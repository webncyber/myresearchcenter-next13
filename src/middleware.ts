import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// This function can be marked `async` if using `await` inside
export function middleware(request: Request) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.url);
    
    return NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    })
}
export const config = {
  matcher: ['/', '/blogs/:path*'], 
}