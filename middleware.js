import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // if (new RegExp(/^.*(fonts|_next|vk.com|favicon).*$/).test(request.url)) {
  //   return NextResponse.next()
  // }
  // console.log(request.url);
  const requestHeaders = new Headers(request.headers);
  const ip = request.ip || "";
  requestHeaders.set("x-forwarded-for", ip);
  console.log('in middleware : ', request.headers);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/tester/:path*'],
}