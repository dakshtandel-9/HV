'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (href, sectionId = null) => {
    if (sectionId) {
      if (window.location.pathname === '/') {
        scrollToSection(sectionId);
      } else {
        router.push('/');
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg border-b border-navy-100 sticky top-0 z-50">
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="HV Fashion Logo" 
                  className="w-12 h-12 mr-3"
                />
                <div>
                  <h1 className="text-2xl font-bold text-navy-900">HV Fashions</h1>
                  <p className="text-sm text-navy-600">Blazer World</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => handleNavigation('/', 'home')} className="text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </button>
              <Link href="/products" className="text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </Link>
              


              <button onClick={() => handleNavigation('/', 'about')} className="text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </button>
              <button onClick={() => handleNavigation('/', 'contact')} className="text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </button>
              
              {/* Sale with badge */}
              <Link href="/products" className="relative text-navy-700 hover:text-navy-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sale
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">New</span>
              </Link>
            </div>
          </nav>

          {/* Right side - Contact Us button */}
          <div className="hidden md:flex items-center">
            <button onClick={() => handleNavigation('/', 'contact')} className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
              Contact Us
            </button>
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
            <button onClick={() => handleNavigation('/', 'home')} className="block w-full text-left px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              Home
            </button>
            <Link href="/products" className="block px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              Products
            </Link>

            <button onClick={() => handleNavigation('/', 'about')} className="block w-full text-left px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              About
            </button>
            <button onClick={() => handleNavigation('/', 'contact')} className="block w-full text-left px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              Contact
            </button>
            <Link href="/products" className="block w-full text-left px-3 py-2 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-md text-base font-medium">
              Sale
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">New</span>
            </Link>
            <div className="px-3 py-2">
              <button onClick={() => handleNavigation('/', 'contact')} className="block w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        
      )}
    </header>
  );
}