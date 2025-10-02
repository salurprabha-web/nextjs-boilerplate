// Input validation and sanitization utilities

export function sanitizeString(input: string, maxLength: number = 1000): string {
  if (!input) return ''
  
  // Remove HTML tags and special characters
  const sanitized = input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>]/g, '') // Remove < and > characters
    .replace(/javascript:/gi, '') // Remove javascript protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
  
  // Truncate to max length
  return sanitized.substring(0, maxLength)
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9.\-_]/g, '') // Keep only alphanumeric, dot, hyphen, underscore
    .replace(/\.{2,}/g, '.') // Replace multiple dots with single dot
    .replace(/^\.+|\.+$/g, '') // Remove dots from start and end
    .substring(0, 255) // Limit length
}

export function validateFileType(filename: string, allowedTypes: string[]): boolean {
  const extension = filename.split('.').pop()?.toLowerCase()
  return extension ? allowedTypes.includes(extension) : false
}

export function validateFileSize(size: number, maxSize: number): boolean {
  return size <= maxSize
}

// SQL injection prevention
export function sanitizeSQLInput(input: string): string {
  return input
    .replace(/['";\\]/g, '') // Remove dangerous SQL characters
    .replace(/--/g, '') // Remove SQL comments
    .replace(/\/\*|\*\//g, '') // Remove block comments
    .trim()
}

// XSS prevention
export function escapeHtml(text: string): string {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

// Form validation
export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

export function validateForm(data: Record<string, any>, rules: Record<string, any>): ValidationResult {
  const errors: Record<string, string> = {}
  
  for (const [field, rule] of Object.entries(rules)) {
    const value = data[field]
    
    if (rule.required && (!value || value.toString().trim() === '')) {
      errors[field] = `${field} is required`
      continue
    }
    
    if (value && rule.maxLength && value.length > rule.maxLength) {
      errors[field] = `${field} must be less than ${rule.maxLength} characters`
    }
    
    if (value && rule.minLength && value.length < rule.minLength) {
      errors[field] = `${field} must be at least ${rule.minLength} characters`
    }
    
    if (value && rule.pattern && !rule.pattern.test(value)) {
      errors[field] = rule.message || `${field} is invalid`
    }
    
    if (rule.type && typeof value !== rule.type) {
      errors[field] = `${field} must be of type ${rule.type}`
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}