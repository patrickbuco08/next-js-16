/**
 * Navbar Component
 * Main navigation bar
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';
import { Button } from '@/components/ui';

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: ROUTES.HOME },
    { label: 'Properties', href: ROUTES.PROPERTIES },
    { label: 'Agents', href: ROUTES.AGENTS },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">PropertyHub</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Link href={ROUTES.AUTH.LOGIN}>Sign In</Link>
            </Button>
            <Button variant="primary" size="sm">
              <Link href={ROUTES.AUTH.REGISTER}>Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
