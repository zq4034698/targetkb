export function GET() {
  return new Response('9b75df3844dd77464ce1d6db905a9546', {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=86400',
      'x-robots-tag': 'noindex',
    },
  });
}
