/**
 * PropertyFilters Component
 * Filter panel for property search
 */

'use client';

import React, { useState } from 'react';
import { Button, Input } from '@/components/ui';
import type { PropertyFilters as Filters, PropertyType, PropertyStatus } from '@/types';

interface PropertyFiltersProps {
  onFilter: (filters: Filters) => void;
}

export function PropertyFilters({ onFilter }: PropertyFiltersProps) {
  const [filters, setFilters] = useState<Filters>({});

  const handleFilterChange = (key: keyof Filters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  const handleApplyFilters = () => {
    onFilter(filters);
  };

  const handleClearFilters = () => {
    setFilters({});
    onFilter({});
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <Button variant="ghost" size="sm" onClick={handleClearFilters}>
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bedrooms
        </label>
        <Input
          type="number"
          placeholder="Min bedrooms"
          value={filters.bedrooms || ''}
          onChange={(e) => handleFilterChange('bedrooms', Number(e.target.value))}
        />
      </div>

      {/* Bathrooms */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bathrooms
        </label>
        <Input
          type="number"
          placeholder="Min bathrooms"
          value={filters.bathrooms || ''}
          onChange={(e) => handleFilterChange('bathrooms', Number(e.target.value))}
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <Input
          placeholder="City or State"
          value={filters.city || ''}
          onChange={(e) => handleFilterChange('city', e.target.value)}
        />
      </div>

      {/* Apply Button */}
      <Button className="w-full" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
}
