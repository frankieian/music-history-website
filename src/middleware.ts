import type { NextRequest } from 'next/server'
import { getAccount } from './lib/account'
 
export async function middleware(request: NextRequest) {
  const currentToken = request.cookies.get('music_history_token')?.value
  const currentRefreshToken = request.cookies.get('music_history_refresh')?.value

  if(!currentToken && currentRefreshToken) {
    //Refresh token if token doesnt exist
  }
 
  if (currentToken && request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
 
  if (!currentToken && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.svg$|register$|$).*)'],
}