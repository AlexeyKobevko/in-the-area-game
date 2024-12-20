import { NextResponse } from 'next/server';

export function cookiesMiddleware() {
  // console.log(request.headers.get('user-agent'));
  // const deviceType = UAParser(request.headers.get('user-agent'));
  // console.log(deviceType);
  // const cookie = request.cookies.get('nextjs');
  // console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  // const allCookies = request.cookies.getAll();
  // console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  // request.cookies.has('nextjs'); // => true
  // request.cookies.delete('nextjs');
  // request.cookies.has('nextjs'); // => false
  // return NextResponse.redirect(new URL('/sign-up', request.url));
  console.log('Cookies middleware');
  return NextResponse.next();
}
