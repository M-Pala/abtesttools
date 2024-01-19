// This is for abtesting tools

// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   // if (new RegExp(/^.*(fonts|_next|vk.com|favicon).*$/).test(request.url)) {
//   //   return NextResponse.next()
//   // }
//   // console.log(request.url);
//   const requestHeaders = new Headers(request.headers);
//   const ip = request.ip || "";
//   requestHeaders.set("x-forwarded-for", ip);
//   console.log('in middleware : ', request.headers);
//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   })
// }

// export const config = {
//   matcher: ['/tester/:path*'],
// }


// this is for internationalization


import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};