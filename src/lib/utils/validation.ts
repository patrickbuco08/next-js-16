/**
 * Validation Utilities
 * Helper functions for data validation
 */

import { VALIDATION } from '@/lib/constants';

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  return VALIDATION.EMAIL_REGEX.test(email);
}

/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  return VALIDATION.PHONE_REGEX.test(phone);
}

/**
 * Validate password strength
 */
export function isValidPassword(password: string): boolean {
  if (password.length < VALIDATION.PASSWORD_MIN_LENGTH) return false;
  
  // Check for at least one uppercase, one lowercase, one number
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  
  return hasUpperCase && hasLowerCase && hasNumber;
}

/**
 * Get password strength
 */
export function getPasswordStrength(password: string): 'weak' | 'medium' | 'strong' {
  if (password.length < 8) return 'weak';
  
  let strength = 0;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z\d]/.test(password)) strength++;
  if (password.length >= 12) strength++;
  
  if (strength <= 2) return 'weak';
  if (strength <= 3) return 'medium';
  return 'strong';
}

/**
 * Validate ZIP code
 */
export function isValidZipCode(zipCode: string): boolean {
  return VALIDATION.ZIP_CODE_REGEX.test(zipCode);
}

/**
 * Sanitize string input
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}
