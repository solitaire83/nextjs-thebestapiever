import { NextResponse } from 'next/server';

export function middleware() {
  const r = NextResponse.next();
  r.headers.set('Access-Control-Allow-Origin', '*');
  return r;
}

export const config = {
  matcher: [
    '/app/backend/:path*',
    '/api/:path*'
  ],
};
