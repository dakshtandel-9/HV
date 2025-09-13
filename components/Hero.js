'use client';

import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-500 text-navy-900 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                Premium Quality Since 2024
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elevate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Style Game
              </span>
            </h1>
            
            <p className="text-xl text-navy-100 mb-8 leading-relaxed">
              Discover our premium collection of formal and casual wear. 
              Crafted with precision, designed for the modern professional 
              who values quality and sophistication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/products">
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Collection
                </button>
              </Link>
              <Link href="#about">
                <button className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                  Watch Our Story
                </button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-navy-600">
              <div>
                <div className="text-3xl font-bold text-amber-400">50K+</div>
                <div className="text-navy-200 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-navy-200 text-sm">Premium Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">99%</div>
                <div className="text-navy-200 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Hero Image */}
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="rounded-xl overflow-hidden h-96">
                  <img 
                    src="/hero.jpg" 
                    alt="HV Fashion Premium Collection" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent rounded-2xl transform -rotate-6 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
}