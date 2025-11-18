/**
 * useProperties Hook
 * Fetch and manage properties data
 */

'use client';

import { useState, useEffect } from 'react';
import { propertiesService } from '@/services/api';
import type { Property, SearchParams, PaginatedResponse } from '@/types';

export function useProperties(params: SearchParams = {}) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  });

  useEffect(() => {
    fetchProperties();
  }, [params]);

  const fetchProperties = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response: PaginatedResponse<Property> = await propertiesService.getProperties(params);
      
      setProperties(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch properties');
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    fetchProperties();
  };

  return {
    properties,
    isLoading,
    error,
    pagination,
    refetch,
  };
}
