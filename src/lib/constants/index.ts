/**
 * Application Constants
 * Centralized constants for configuration and magic strings
 */

// ============ API Configuration ============
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
} as const;

// ============ Pagination ============
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 100,
} as const;

// ============ Routes ============
export const ROUTES = {
  HOME: '/',
  PROPERTIES: '/properties',
  PROPERTY_DETAILS: (id: string) => `/properties/${id}`,
  SEARCH: '/search',
  AGENTS: '/agents',
  AGENT_PROFILE: (id: string) => `/agents/${id}`,
  DASHBOARD: '/dashboard',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  USER: {
    PROFILE: '/user/profile',
    SETTINGS: '/user/settings',
    FAVORITES: '/user/favorites',
  },
} as const;

// ============ Local Storage Keys ============
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_PREFERENCES: 'user_preferences',
  RECENT_SEARCHES: 'recent_searches',
} as const;

// ============ Property Constants ============
export const PROPERTY_AMENITIES = [
  'Pool',
  'Gym',
  'Garden',
  'Balcony',
  'Parking',
  'Security',
  'Air Conditioning',
  'Heating',
  'Elevator',
  'Pet Friendly',
  'Furnished',
  'Internet',
] as const;

export const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  PHP: '₱',
  JPY: '¥',
} as const;

// ============ Validation ============
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  PHONE_REGEX: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  ZIP_CODE_REGEX: /^\d{5}(-\d{4})?$/,
} as const;

// ============ Feature Flags ============
export const FEATURES = {
  ENABLE_CHAT: true,
  ENABLE_VIRTUAL_TOURS: true,
  ENABLE_MORTGAGE_CALCULATOR: true,
  ENABLE_DARK_MODE: true,
} as const;
