import assert from 'node:assert/strict';
import test from 'node:test';
import { strictDecimalPreset, summarizeCompression } from '../app/lib/compressionResult.ts';
import { encodeCanvas } from '../app/lib/canvasOutput.ts';

const result = { originalBytes: 899505, compressedBytes: 102395, targetBytes: 102400, originalWidth: 512, originalHeight: 512, width: 512, height: 512 };

test('uses exact byte counts rather than rounded KB to determine the limit', () => {
  assert.equal(summarizeCompression(result).meetsLimit, true);
  assert.equal(summarizeCompression({ ...result, compressedBytes: 102400 }).meetsLimit, true);
  assert.equal(summarizeCompression({ ...result, compressedBytes: 102401 }).meetsLimit, false);
  assert.equal(summarizeCompression({ ...result, targetBytes: 100000 }).meetsLimit, false);
});

test('reports either changed dimension, without implying an unchanged size', () => {
  assert.equal(summarizeCompression(result).dimensionsChanged, false);
  assert.equal(summarizeCompression({ ...result, width: 400 }).dimensionsChanged, true);
  assert.equal(summarizeCompression({ ...result, height: 400 }).dimensionsChanged, true);
});

test('does not claim savings when conversion makes a file larger', () => {
  assert.equal(summarizeCompression(result).savedPercent, 88.6);
  assert.equal(summarizeCompression({ ...result, compressedBytes: 1 }).savedPercent, 99.9);
  assert.equal(summarizeCompression({ ...result, compressedBytes: result.originalBytes }).savedPercent, 0);
  assert.equal(summarizeCompression({ ...result, compressedBytes: result.originalBytes + 1 }).savedPercent, 0);
  assert.equal(summarizeCompression({ ...result, originalBytes: 0 }).savedPercent, 0);
});

test('strict portal presets fit explicit decimal byte limits', () => {
  for (const target of ['50', '100', '150', '200', '500']) {
    const preset = strictDecimalPreset(target, 'KB');
    assert.ok(Number(preset.target) * 1024 < preset.byteLimit);
  }
  assert.deepEqual(strictDecimalPreset('100', 'KB'), { target: '97', byteLimit: 100000 });
  assert.deepEqual(strictDecimalPreset('200', 'KB'), { target: '195', byteLimit: 200000 });
  assert.equal(strictDecimalPreset('100', 'MB'), null);
  assert.deepEqual(strictDecimalPreset('50', 'KB'), { target: '48', byteLimit: 50000 });
  assert.deepEqual(strictDecimalPreset('150', 'KB'), { target: '146', byteLimit: 150000 });
  assert.deepEqual(strictDecimalPreset('500', 'KB'), { target: '488', byteLimit: 500000 });
  assert.deepEqual(strictDecimalPreset('1', 'MB'), { target: '976', byteLimit: 1000000 });
  assert.ok(Number(strictDecimalPreset('1', 'MB').target) * 1024 < 1000000);
  assert.equal(strictDecimalPreset('97', 'KB'), null);
  assert.equal(strictDecimalPreset('0', 'MB'), null);
  assert.equal(strictDecimalPreset('invalid', 'KB'), null);
});

test('encoding rejects even an oversized PNG fallback immediately', async () => {
  let calls = 0;
  const canvas = { toBlob(callback) { calls++; callback(new Blob([new Uint8Array(204801)], { type: 'image/png' })); } };
  await assert.rejects(encodeCanvas(canvas, 'image/webp', 0.9), { message: 'format_unavailable' });
  assert.equal(calls, 1);
});

test('encoding retains the actual output and requested parameters', async () => {
  const blob = new Blob(['test'], { type: 'image/jpeg' });
  const canvas = { toBlob(callback, mime, quality) { assert.equal(mime, 'image/jpeg'); assert.equal(quality, 0.8); callback(blob); } };
  assert.equal(await encodeCanvas(canvas, 'image/jpeg', 0.8), blob);
  assert.equal(await encodeCanvas({ toBlob(callback) { callback(null); } }, 'image/jpeg'), null);
});
