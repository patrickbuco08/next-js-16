/**
 * Properties Service
 * API calls related to properties
 */

import { apiClient } from './client';
import type {
  Property,
  PaginatedResponse,
  SearchParams,
  ApiResponse,
} from '@/types';

export const propertiesService = {
  /**
   * Get all properties with pagination
   */
  async getProperties(
    params: SearchParams
  ): Promise<PaginatedResponse<Property>> {
    return apiClient.get<PaginatedResponse<Property>>('/properties', params);
  },

  /**
   * Get property by ID
   */
  async getPropertyById(id: string): Promise<ApiResponse<Property>> {
    return apiClient.get<ApiResponse<Property>>(`/properties/${id}`);
  },

  /**
   * Search properties
   */
  async searchProperties(
    params: SearchParams
  ): Promise<PaginatedResponse<Property>> {
    return apiClient.post<PaginatedResponse<Property>>(
      '/properties/search',
      params
    );
  },

  /**
   * Create property (admin/agent only)
   */
  async createProperty(data: Partial<Property>): Promise<ApiResponse<Property>> {
    return apiClient.post<ApiResponse<Property>>('/properties', data);
  },

  /**
   * Update property
   */
  async updateProperty(
    id: string,
    data: Partial<Property>
  ): Promise<ApiResponse<Property>> {
    return apiClient.put<ApiResponse<Property>>(`/properties/${id}`, data);
  },

  /**
   * Delete property
   */
  async deleteProperty(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<ApiResponse<void>>(`/properties/${id}`);
  },

  /**
   * Get featured properties
   */
  async getFeaturedProperties(
    limit: number = 6
  ): Promise<ApiResponse<Property[]>> {
    return apiClient.get<ApiResponse<Property[]>>('/properties/featured', {
      limit,
    });
  },

  /**
   * Get similar properties
   */
  async getSimilarProperties(
    id: string,
    limit: number = 4
  ): Promise<ApiResponse<Property[]>> {
    return apiClient.get<ApiResponse<Property[]>>(
      `/properties/${id}/similar`,
      { limit }
    );
  },
};
