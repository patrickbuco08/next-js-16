/**
 * Properties List Page
 * Display all properties with filters
 */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Properties - PropertyHub',
  description: 'Browse all available properties for sale and rent',
};

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Browse Properties
        </h1>
        <p className="text-gray-600">
          Discover your perfect property from our extensive listings
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <p className="text-sm text-gray-500">
              Add PropertyFilters component here
            </p>
          </div>
        </aside>

        {/* Properties Grid */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold">0</span> properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* PropertyCard components will go here */}
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">
                No properties found. Add properties via API or database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
