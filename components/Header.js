'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-navy-100 sticky top-0 z-50">
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-900 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">HV</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-navy-900">HV Fashion</h1>
                  <p className="text-sm text-navy-600">Premium Collection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <Link href="/products" className="text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </Link>
              
              {/* Collections Dropdown */}
              <div className="relative group">
                <button className="text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  Collections
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-navy-100">
                  <div className="py-1">
                    <a href="#shirts" className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900">Premium Shirts</a>
                    <a href="#pants" className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900">Formal Trousers</a>
                    <a href="#casual" className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900">Casual Wear</a>
                    <a href="#accessories" className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900">Accessories</a>
                  </div>
                </div>
              </div>

              <a href="#about" className="text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              
              {/* Sale with badge */}
              <a href="#sale" className="relative text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sale
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">New</span>
              </a>
            </div>
          </nav>

          {/* Right side - Contact Us button */}
          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy-700 hover:text-navy-900 p-2 rounded-md transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-navy-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              Home
            </a>
            <Link href="/products" className="block px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              Products
            </Link>
            <div className="px-3 py-2">
              <p className="text-navy-900 font-medium text-base mb-2">Collections</p>
              <div className="pl-4 space-y-1">
                <a href="#shirts" className="block py-1 text-navy-600 hover:text-navy-900 text-sm">Premium Shirts</a>
                <a href="#pants" className="block py-1 text-navy-600 hover:text-navy-900 text-sm">Formal Trousers</a>
                <a href="#casual" className="block py-1 text-navy-600 hover:text-navy-900 text-sm">Casual Wear</a>
                <a href="#accessories" className="block py-1 text-navy-600 hover:text-navy-900 text-sm">Accessories</a>
              </div>
            </div>
            <a href="#about" className="block px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              About
            </a>
            <a href="#contact" className="block px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              Contact
            </a>
            <a href="#sale" className="block px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              Sale
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">New</span>
            </a>
            <div className="px-3 py-2">
              <a href="#contact" className="block bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
      )}
    </header>
  );
}