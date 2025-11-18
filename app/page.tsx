import Link from "next/link";
import { Button } from "@/components/ui";
import { ROUTES } from "@/lib/constants";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Find Your Dream Property
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the perfect home with PropertyHub. Browse thousands of properties
          for sale and rent in your area.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href={ROUTES.PROPERTIES}>
            <Button size="lg">Browse Properties</Button>
          </Link>
          <Link href={ROUTES.AUTH.REGISTER}>
            <Button variant="outline" size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose PropertyHub?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Browse thousands of verified properties from trusted agents
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
            <p className="text-gray-600">
              Find your perfect property with powerful search and filters
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Platform</h3>
            <p className="text-gray-600">
              Connect with verified agents and get expert assistance
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50 rounded-2xl text-center my-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of happy homeowners today
        </p>
        <Link href={ROUTES.PROPERTIES}>
          <Button size="lg">Start Searching Now</Button>
        </Link>
      </section>
    </div>
  );
}
