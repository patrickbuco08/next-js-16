/**
 * PropertyCard Component
 * Display property in card format
 */

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Property } from '@/types';
import { Card, CardContent } from '@/components/ui';
import { formatCurrency, formatNumberAbbreviation } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const primaryImage = property.images.find((img) => img.isPrimary) || property.images[0];

  return (
    <Link href={ROUTES.PROPERTY_DETAILS(property.id)}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" padding="none">
        {/* Image */}
        <div className="relative h-48 w-full bg-gray-200">
          {primaryImage && (
            <Image
              src={primaryImage.url}
              alt={primaryImage.alt}
              fill
              className="object-cover"
            />
          )}
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
              {property.status.replace('_', ' ').toUpperCase()}
            </span>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-4">
          {/* Price */}
          <div className="mb-2">
            <span className="text-2xl font-bold text-gray-900">
              {formatCurrency(property.price, property.currency)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
            {property.title}
          </h3>

          {/* Location */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-1">
            {property.location.city}, {property.location.state}
          </p>

          {/* Features */}
          <div className="flex items-center space-x-4 text-sm text-gray-700">
            <div className="flex items-center">
              <span className="font-medium">{property.features.bedrooms}</span>
              <span className="ml-1">Beds</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">{property.features.bathrooms}</span>
              <span className="ml-1">Baths</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">
                {formatNumberAbbreviation(property.features.area)}
              </span>
              <span className="ml-1">{property.features.areaUnit}</span>
            </div>
          </div>

          {/* Agent */}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-900">{property.agent.name}</p>
                <p className="text-xs text-gray-500">{property.agent.company}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
