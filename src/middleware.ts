import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Prevent access to sensitive files
  if (request.nextUrl.pathname.includes('.env') || 
      request.nextUrl.pathname.includes('.git') ||
      request.nextUrl.pathname.includes('node_modules')) {
    return new NextResponse('Forbidden', { status: 403 })
  }
  
  // Note: We can't check localStorage in middleware since it's client-side only
  // The actual authentication check is done in the auth HOC
  // For now, we'll allow access to admin routes and let the client-side auth handle it
  
  // Apply security headers to all responses
  const response = NextResponse.next()
  
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  
  // More permissive CSP for development
  const isDevelopment = process.env.NODE_ENV === 'development'
  if (isDevelopment) {
    response.headers.set('Content-Security-Policy', "default-src *; script-src * 'unsafe-eval' 'unsafe-inline'; style-src * 'unsafe-inline'; img-src * data: blob:; font-src * data:; connect-src * ws: wss:; frame-ancestors 'none';")
  } else {
    response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';")
  }
  
  // Remove headers that expose server information
  response.headers.delete('x-powered-by')
  
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}