import { pathToFileURL } from 'node:url';
import { GET } from '../app/9b75df3844dd77464ce1d6db905a9546.txt/route.ts';

const origin = 'https://targetkb.com';

export async function makeSubmission(paths) {
  const urlList = [...new Set(paths.map(path => {
    const url = new URL(path, `${origin}/`);
    if (url.origin !== origin || url.username || url.password || url.search || url.hash) {
      throw new Error('Use only canonical HTTPS targetkb.com pages, without query strings or fragments.');
    }
    return url.href;
  }))];
  // ponytail: cap at 100 explicit changed URLs; increase for a genuinely larger publishing batch.
  if (!urlList.length || urlList.length > 100) throw new Error('Provide 1–100 actually changed page URLs.');
  const key = (await GET().text()).trim();
  return { host: 'targetkb.com', key, keyLocation: `${origin}/${key}.txt`, urlList };
}

async function main() {
  const payload = await makeSubmission(process.argv.slice(2));
  const options = { signal: AbortSignal.timeout(20000), redirect: 'error' };
  const verification = await fetch(payload.keyLocation, options);
  if (verification.status !== 200 || (await verification.text()).trim() !== payload.key) {
    throw new Error('Publish and verify the ownership key before submitting URLs.');
  }
  for (const url of payload.urlList) {
    const response = await fetch(url, { ...options, signal: AbortSignal.timeout(20000) });
    const html = await response.text();
    const canonicalTag = html.match(/<link[^>]*rel="canonical"[^>]*>/)?.[0] || '';
    if (response.status !== 200 || !canonicalTag.includes(`href="${url}"`)) {
      throw new Error(`Page is not a published 200/self-canonical HTML page: ${url}`);
    }
  }
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(20000),
  });
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned HTTP ${response.status}; do not repeatedly retry.`);
  console.log(`IndexNow HTTP ${response.status}: received ${payload.urlList.length} changed URLs${response.status === 202 ? '; ownership validation pending' : ''}. This does not confirm indexing or rankings.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
