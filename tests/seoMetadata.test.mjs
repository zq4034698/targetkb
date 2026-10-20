import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { makeSubmission } from '../scripts/submit-indexnow.mjs';
import { GET } from '../app/9b75df3844dd77464ce1d6db905a9546.txt/route.ts';

test('all literal sitemap pages declare one matching self-canonical', async () => {
  const sitemap = await readFile(new URL('../app/sitemap.ts', import.meta.url), 'utf8');
  const routes = ['/', ...[...sitemap.matchAll(/url:\s*`\$\{base\}([^`]*)`/g)].map(match => match[1])];
  assert.ok(routes.length >= 52, 'the sitemap parser must cover the current static list');
  assert.equal(new Set(routes).size, routes.length);
  for (const route of routes) {
    const page = await readFile(new URL(`../app${route === '/' ? '/' : `${route}/`}page.tsx`, import.meta.url), 'utf8');
    const canonicals = [...page.matchAll(/\bcanonical:\s*['"]([^'"]+)['"]/g)].map(match => match[1]);
    assert.equal(canonicals.length, 1, `${route}: missing or multiple canonical declarations`);
    assert.equal(new URL(canonicals[0], 'https://targetkb.com/').href, new URL(route, 'https://targetkb.com/').href, route);
  }
});

test('IndexNow only builds explicit canonical pages and verifies a plain-text key', async () => {
  const keyResponse = GET();
  const key = await keyResponse.text();
  assert.match(key, /^[a-f0-9]{32}$/);
  assert.match(keyResponse.headers.get('content-type'), /^text\/plain/);
  assert.equal(keyResponse.headers.get('x-robots-tag'), 'noindex');
  const payload = await makeSubmission(['/resize-image', 'https://targetkb.com/resize-image', '/']);
  assert.deepEqual(payload.urlList, ['https://targetkb.com/resize-image', 'https://targetkb.com/']);
  assert.equal(payload.keyLocation, `https://targetkb.com/${key}.txt`);
  assert.equal(payload.key, key);
  for (const input of [[], ['https://other.example/'], ['http://targetkb.com/'], ['https://www.targetkb.com/'], ['/?target=100'], ['/#compressor'], ['https://user:password@targetkb.com/']]) {
    await assert.rejects(makeSubmission(input));
  }
  await assert.rejects(makeSubmission(Array.from({length:101}, (_, i) => `/page-${i}`)));
});

test('JPG conversion pages keep a usable inline tool and distinct analytics labels', async () => {
  for (const [route, label] of [['convert-image-to-jpg', 'image-to-jpg'], ['convert-png-to-jpg', 'png-to-jpg'], ['convert-heic-to-jpg', 'heic-to-jpg']]) {
    const page = await readFile(new URL(`../app/${route}/page.tsx`, import.meta.url), 'utf8');
    assert.ok(page.includes(`inlineToolPage="${label}"`), route);
    assert.ok(page.includes('toolHref="/?format=jpg&target=1mb"'), route);
  }
  const landing = await readFile(new URL('../app/components/TransformLanding.tsx', import.meta.url), 'utf8');
  assert.ok(landing.includes('initialTarget="1" initialUnit="MB"'));
});
