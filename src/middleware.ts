import { NextResponse, type NextRequest } from 'next/server'
import { refreshAccessToken } from './actions/account'
import { setCookie } from './actions/cookie'
 
export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  let currentToken = request.cookies.get('music_history_token')?.value
  const currentRefreshToken = request.cookies.get('music_history_refresh')?.value
 
  if (currentToken && request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }

  if (currentToken && request.nextUrl.pathname.startsWith('/register')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
  
  if (!currentRefreshToken && !request.nextUrl.pathname.startsWith('/login') && !request.nextUrl.pathname.startsWith('/register')) {
    return Response.redirect(new URL('/login', request.url))
  } 
  return response
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.svg$|$).*)'],
}