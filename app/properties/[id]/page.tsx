/**
 * Property Details Page
 * Show detailed information about a single property
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  
  return {
    title: `Property ${id} - PropertyHub`,
    description: 'View detailed information about this property',
  };
}

export default async function PropertyDetailsPage({ params }: Props) {
  const { id } = await params;

  // In production, fetch property data here
  // const property = await propertiesService.getPropertyById(id);
  // if (!property) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Property Details
        </h1>
        <p className="text-gray-600">Property ID: {id}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="aspect-video bg-gray-200 rounded-lg mb-6" />
            
            <h2 className="text-2xl font-bold mb-4">Property Title</h2>
            <p className="text-gray-600 mb-4">
              Property description will appear here...
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">1,500</p>
                <p className="text-sm text-gray-600">sqft</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <div className="mb-4">
              <p className="text-3xl font-bold text-gray-900">$500,000</p>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <h3 className="font-semibold mb-2">Contact Agent</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get in touch to schedule a viewing
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
