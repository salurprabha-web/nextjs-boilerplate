import { NextRequest, NextResponse } from 'next/server'

interface RateLimitData {
  count: number
  resetTime: number
}

const rateLimitStore = new Map<string, RateLimitData>()

export function rateLimit(request: NextRequest, limit: number = 100, windowMs: number = 60000) {
  // Get IP from various headers
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             request.headers.get('cf-connecting-ip') ||
             'unknown'
  
  const key = `rate_limit:${ip}`
  
  const now = Date.now()
  const record = rateLimitStore.get(key)
  
  if (!record || now > record.resetTime) {
    // New window
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    })
    return { success: true }
  }
  
  if (record.count >= limit) {
    return {
      success: false,
      error: 'Too many requests',
      retryAfter: Math.ceil((record.resetTime - now) / 1000)
    }
  }
  
  // Increment count
  record.count++
  return { success: true }
}

// Cleanup expired entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}, 60000) // Cleanup every minute