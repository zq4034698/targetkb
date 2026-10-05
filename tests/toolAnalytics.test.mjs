import assert from 'node:assert/strict';
import test from 'node:test';

let moduleId = 0;
const defaults = {
  tool_page: '100kb', target_kb: 100, output_format: 'jpg',
  file_count: 2, processed_count: 0, language: 'en', trigger: 'upload',
};

async function setup(t, choice = 'accepted') {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const calls = [];
  const browser = {
    localStorage: { getItem: () => choice },
    gtag: (...args) => calls.push(args),
  };
  Object.defineProperty(globalThis, 'window', { value: browser, configurable: true });
  t.after(() => {
    if (original) Object.defineProperty(globalThis, 'window', original);
    else delete globalThis.window;
  });
  const analytics = await import(`../app/lib/toolAnalytics.ts?test=${++moduleId}`);
  return { analytics, browser, calls };
}

test('server-side tracking and flushing do nothing', async () => {
  const analytics = await import(`../app/lib/toolAnalytics.ts?test=${++moduleId}`);
  assert.doesNotThrow(() => analytics.trackToolEvent('compression_start', defaults));
  assert.doesNotThrow(() => analytics.flushToolEvents());
});

test('missing, declined and inaccessible consent never retain events', async (t) => {
  for (const choice of [null, 'declined', 'unknown']) {
    await t.test(String(choice), async (t) => {
      const { analytics, browser, calls } = await setup(t, choice);
      analytics.trackToolEvent('compression_start', defaults);
      browser.localStorage.getItem = () => 'accepted';
      analytics.flushToolEvents();
      assert.equal(calls.length, 0);
    });
  }
  await t.test('throwing storage', async (t) => {
    const { analytics, browser, calls } = await setup(t);
    browser.localStorage.getItem = () => { throw new Error('storage blocked'); };
    analytics.trackToolEvent('compression_start', defaults);
    browser.localStorage.getItem = () => 'accepted';
    analytics.flushToolEvents();
    assert.equal(calls.length, 0);
  });
});

test('accepted activity waits for explicit initialization and flushes once in order', async (t) => {
  const { analytics, calls } = await setup(t);
  analytics.trackToolEvent('compression_start', defaults);
  analytics.trackToolEvent('compression_success', { ...defaults, processed_count: 2 });
  assert.equal(calls.length, 0, 'a gtag stub alone is not initialization');
  analytics.flushToolEvents();
  analytics.flushToolEvents();
  assert.deepEqual(calls.map((call) => call.slice(0, 2)), [
    ['event', 'compression_start'], ['event', 'compression_success'],
  ]);
  analytics.trackToolEvent('image_download', { ...defaults, processed_count: 1 });
  assert.equal(calls.length, 3);
});

test('accepted queue tolerates missing gtag and keeps only a safe snapshot', async (t) => {
  const { analytics, browser, calls } = await setup(t);
  delete browser.gtag;
  const params = { ...defaults, file_name: 'private-passport.jpg', error: 'user secret', url: 'https://private.example', image: 'raw bytes' };
  analytics.trackToolEvent('compression_start', params);
  params.target_kb = 200;
  analytics.flushToolEvents();
  browser.gtag = (...args) => calls.push(args);
  analytics.flushToolEvents();
  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0][2], defaults);
});

test('invalid names, target sizes, counts and enum values are dropped', async (t) => {
  const { analytics, calls } = await setup(t);
  analytics.flushToolEvents();
  analytics.trackToolEvent('private_event', defaults);
  const invalid = [
    { tool_page: '/user/private-url' }, { target_kb: 0 }, { target_kb: -1 },
    { target_kb: NaN }, { target_kb: Infinity }, { target_kb: '100' },
    { output_format: 'gif' }, { file_count: 0 }, { file_count: 11 }, { file_count: 1.5 },
    { processed_count: -1 }, { processed_count: 11 }, { processed_count: 0.5 },
    { language: 'private-language' }, { error_code: 'raw error text' }, { trigger: 'private-trigger' },
  ];
  for (const update of invalid) analytics.trackToolEvent('compression_error', { ...defaults, ...update });
  assert.equal(calls.length, 0);
  analytics.trackToolEvent('compression_error', { ...defaults, processed_count: 1, error_code: 'decode_failed' });
  assert.equal(calls.length, 1);
});

test('revoked consent clears pending activity rather than replaying it on acceptance', async (t) => {
  const { analytics, browser, calls } = await setup(t);
  analytics.trackToolEvent('compression_start', defaults);
  browser.localStorage.getItem = () => 'declined';
  analytics.flushToolEvents();
  browser.localStorage.getItem = () => 'accepted';
  analytics.flushToolEvents();
  assert.equal(calls.length, 0);
  browser.localStorage.getItem = () => 'declined';
  analytics.trackToolEvent('image_download', { ...defaults, processed_count: 1 });
  assert.equal(calls.length, 0);
});

test('invalid-target failures record only the category, never the invalid input', async (t) => {
  const { analytics, calls } = await setup(t);
  analytics.flushToolEvents();
  analytics.trackToolEvent('compression_error', { ...defaults, target_kb: NaN, error_code: 'invalid_target' });
  assert.equal(calls.length, 1);
  assert.equal(calls[0][2].error_code, 'invalid_target');
  assert.equal('target_kb' in calls[0][2], false);
});

test('deferred readiness flushes even when inline onReady fires before tag initialization', async (t) => {
  const { analytics, browser, calls } = await setup(t);
  delete browser.gtag;
  analytics.trackToolEvent('compression_start', defaults);
  queueMicrotask(analytics.flushToolEvents);
  // Simulate synchronous inline script insertion/config immediately after onReady.
  browser.gtag = (...args) => calls.push(args);
  await new Promise((resolve) => queueMicrotask(resolve));
  assert.equal(calls.length, 1);
  analytics.trackToolEvent('compression_success', { ...defaults, processed_count: 2 });
  assert.equal(calls.length, 2);
});

test('queue is bounded and analytics failures never escape into the tool', async (t) => {
  const { analytics, browser, calls } = await setup(t);
  for (let i = 0; i < 110; i++) analytics.trackToolEvent('compression_start', defaults);
  analytics.flushToolEvents();
  assert.equal(calls.length, 100);
  browser.gtag = () => { throw new Error('blocked analytics'); };
  assert.doesNotThrow(() => analytics.trackToolEvent('image_download', { ...defaults, processed_count: 1 }));
  const maliciousParams = Object.defineProperty({}, 'tool_page', { get() { throw new Error('bad getter'); } });
  assert.doesNotThrow(() => analytics.trackToolEvent('compression_error', maliciousParams));
});
