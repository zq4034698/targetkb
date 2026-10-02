import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if ((url.hostname === 'targetkb.com' && url.protocol === 'http:') || url.hostname === 'www.targetkb.com') {
    url.protocol = 'https:';
    url.hostname = 'targetkb.com';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}
