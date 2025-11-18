/**
 * Footer Component
 * Site-wide footer
 */

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
    Resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Help Center', href: '/help' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
    Properties: [
      { label: 'For Sale', href: ROUTES.PROPERTIES },
      { label: 'For Rent', href: ROUTES.PROPERTIES },
      { label: 'Agents', href: ROUTES.AGENTS },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg" />
              <span className="text-xl font-bold text-white">PropertyHub</span>
            </div>
            <p className="text-sm text-gray-400">
              Find your dream property with the most comprehensive real estate platform.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} PropertyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
