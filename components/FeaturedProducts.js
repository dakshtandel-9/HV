'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Premium Formal Shirt",
      category: "shirts",
      image: "bg-gradient-to-br from-navy-100 to-navy-200",
      badge: "Best Seller",
      rating: 4.8,
      description: "Classic white formal shirt with premium cotton blend"
    },
    {
      id: 2,
      name: "Executive Blazer",
      category: "blazers",
      image: "bg-gradient-to-br from-navy-800 to-navy-900",
      badge: "Premium",
      rating: 4.9,
      description: "Sophisticated navy blazer for business professionals"
    },
    {
      id: 3,
      name: "Formal Trousers",
      category: "pants",
      image: "bg-gradient-to-br from-amber-100 to-amber-200",
      badge: "New",
      rating: 4.7,
      description: "Comfortable formal trousers with perfect fit"
    },
    {
      id: 4,
      name: "Casual Polo Shirt",
      category: "shirts",
      image: "bg-gradient-to-br from-navy-300 to-navy-400",
      badge: "Featured",
      rating: 4.6,
      description: "Premium cotton polo for casual elegance"
    },
    {
      id: 5,
      name: "Designer Tie",
      category: "accessories",
      image: "bg-gradient-to-br from-amber-400 to-amber-600",
      badge: "Limited",
      rating: 4.8,
      description: "Silk tie with sophisticated pattern"
    },
    {
      id: 6,
      name: "Chino Pants",
      category: "pants",
      image: "bg-gradient-to-br from-navy-600 to-navy-700",
      badge: "Trending",
      rating: 4.7,
      description: "Versatile chino pants for smart casual look"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏷️' },
    { id: 'shirts', name: 'Shirts', icon: '👔' },
    { id: 'pants', name: 'Trousers', icon: '👖' },
    { id: 'blazers', name: 'Blazers', icon: '🧥' },
    { id: 'accessories', name: 'Accessories', icon: '👔' }
  ];

  const getBadgeColor = (badge) => {
    const colors = {
      'Best Seller': 'bg-gradient-to-r from-amber-500 to-amber-600 text-white',
      'Premium': 'bg-gradient-to-r from-navy-600 to-navy-700 text-white',
      'New': 'bg-gradient-to-r from-green-500 to-green-600 text-white',
      'Featured': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
      'Limited': 'bg-gradient-to-r from-purple-500 to-purple-600 text-white',
      'Trending': 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
    };
    return colors[badge] || 'bg-gray-500 text-white';
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Collection</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium fashion essentials, 
            crafted for the modern professional who values quality and style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-navy-600 to-navy-700 text-white shadow-lg transform scale-105'
                  : 'bg-white text-navy-600 hover:bg-navy-50 border border-navy-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 block">
              {/* Product Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </span>
                </div>
                
                {/* Product Image */}
                <div className={`h-64 ${product.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy-600 hover:bg-white hover:text-navy-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy-600 hover:bg-white hover:text-navy-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-navy-600 text-sm mb-4">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-navy-600">({product.rating})</span>
                </div>
                

                
                {/* View Details Button */}
                <div className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}