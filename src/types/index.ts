/**
 * Global Type Definitions
 * Centralized type definitions for the entire application
 */

// ============ Common Types ============
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
  timestamp: string;
}

// ============ User Types ============
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  ADMIN = 'admin',
  AGENT = 'agent',
  USER = 'user',
}

// ============ Property Types ============
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  type: PropertyType;
  status: PropertyStatus;
  location: Location;
  images: PropertyImage[];
  features: PropertyFeatures;
  agent: Agent;
  createdAt: string;
  updatedAt: string;
}

export enum PropertyType {
  HOUSE = 'house',
  APARTMENT = 'apartment',
  CONDO = 'condo',
  VILLA = 'villa',
  LAND = 'land',
  COMMERCIAL = 'commercial',
}

export enum PropertyStatus {
  FOR_SALE = 'for_sale',
  FOR_RENT = 'for_rent',
  SOLD = 'sold',
  RENTED = 'rented',
  OFF_MARKET = 'off_market',
}

export interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  order: number;
  isPrimary: boolean;
}

export interface PropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: 'sqft' | 'sqm';
  parking?: number;
  yearBuilt?: number;
  amenities: string[];
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  company?: string;
}

// ============ Filter & Search Types ============
export interface PropertyFilters {
  type?: PropertyType[];
  status?: PropertyStatus[];
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  city?: string;
  state?: string;
  amenities?: string[];
}

export interface SearchParams {
  query?: string;
  filters?: PropertyFilters;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'date' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}
