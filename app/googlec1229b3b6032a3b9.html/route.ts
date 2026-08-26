export function GET() {
  return new Response("google-site-verification: googlec1229b3b6032a3b9.html", {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
