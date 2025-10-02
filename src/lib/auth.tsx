'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function withAuth(Component: React.ComponentType<any>) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter()

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('admin-auth') === 'true'
      const authTimestamp = localStorage.getItem('admin-auth-timestamp')
      
      // Check if session is valid (24 hours)
      const isSessionValid = authTimestamp && 
        (Date.now() - parseInt(authTimestamp)) < 24 * 60 * 60 * 1000
      
      if (!isAuthenticated || !isSessionValid) {
        localStorage.removeItem('admin-auth')
        localStorage.removeItem('admin-auth-timestamp')
        router.push('/admin/login')
      }
    }, [router])

    return <Component {...props} />
  }
}