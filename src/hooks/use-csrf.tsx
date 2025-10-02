'use client'

import { useEffect, useState } from 'react'
import { createCSRFToken } from '@/lib/security'

export function useCSRFToken() {
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    // Generate CSRF token on component mount
    const csrfToken = createCSRFToken()
    setToken(csrfToken)
    
    // Store token in session storage
    sessionStorage.setItem('csrf-token', csrfToken)
  }, [])

  return token
}

// CSRF Token component for forms
export function CSRFTokenField() {
  const token = useCSRFToken()
  
  return (
    <input
      type="hidden"
      name="csrf-token"
      value={token}
    />
  )
}

// Hook to validate CSRF token
export function useCSRFValidation() {
  const validateToken = (submittedToken: string): boolean => {
    const storedToken = sessionStorage.getItem('csrf-token')
    return submittedToken === storedToken
  }

  return { validateToken }
}