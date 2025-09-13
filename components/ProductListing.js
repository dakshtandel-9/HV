'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blazerImages } from '../app/data/blazerImages';
import { suitsImages } from '../app/data/suitsImages';

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  // Blazer images imported from centralized data file

  // Blazer style names for variety
  const blazerStyles = [
    'Executive', 'Classic', 'Modern', 'Formal', 'Casual', 'Premium', 'Business', 'Professional',
    'Elegant', 'Sophisticated', 'Contemporary', 'Traditional', 'Luxury', 'Designer', 'Tailored',
    'Slim Fit', 'Regular Fit', 'Double Breasted', 'Single Breasted', 'Navy', 'Black', 'Charcoal',
    'Grey', 'Blue', 'Brown', 'Pinstripe', 'Textured', 'Wool', 'Cotton', 'Linen', 'Velvet'
  ];

  const blazerTypes = [
    'Blazer', 'Sport Coat', 'Suit Jacket', 'Dinner Jacket', 'Tuxedo Jacket'
  ];

  // Suit style names for variety
  const suitStyles = [
    'Executive', 'Classic', 'Modern', 'Formal', 'Business', 'Premium', 'Professional',
    'Elegant', 'Sophisticated', 'Contemporary', 'Traditional', 'Luxury', 'Designer', 'Tailored',
    'Slim Fit', 'Regular Fit', 'Three Piece', 'Two Piece', 'Navy', 'Black', 'Charcoal',
    'Grey', 'Blue', 'Brown', 'Pinstripe', 'Textured', 'Wool', 'Cotton', 'Linen', 'Velvet'
  ];

  const suitTypes = [
    'Business Suit', 'Formal Suit', 'Wedding Suit', 'Tuxedo', 'Dinner Suit'
  ];

  const badges = ['Featured', 'Premium', 'Best Seller', 'New', 'Popular', 'Limited', 'Exclusive'];

  // Generate all blazer products
  const blazerProducts = blazerImages.map((imageUrl, index) => {
    const styleIndex = index % blazerStyles.length;
    const typeIndex = index % blazerTypes.length;
    const badgeIndex = index % badges.length;
    
    return {
      id: index + 2, // Start from 2 since shirt is id 1
      name: 'HV blazers',
      category: 'Blazer',
      image: imageUrl,
      description: `Premium ${blazerStyles[styleIndex].toLowerCase()} ${blazerTypes[typeIndex].toLowerCase()} crafted with finest materials for the modern professional`,
      features: ['Premium Fabric', 'Tailored Fit', 'Professional Look'],
      badge: badges[badgeIndex],
      rating: 4.5 + ((index * 7) % 40) / 100, // Deterministic rating between 4.5-4.9
      reviews: ((index * 13) % 150) + 20 // Deterministic reviews between 20-170
    };
  });

  // Generate all suits products
  const suitsProducts = suitsImages.map((imageUrl, index) => {
    const styleIndex = index % suitStyles.length;
    const typeIndex = index % suitTypes.length;
    const badgeIndex = index % badges.length;
    
    return {
      id: index + blazerImages.length + 2, // Continue from blazer IDs
      name: 'HV suits',
      category: 'Suits',
      image: imageUrl,
      description: `Premium ${suitStyles[styleIndex].toLowerCase()} ${suitTypes[typeIndex].toLowerCase()} crafted with finest materials for the modern professional`,
      features: ['Premium Fabric', 'Tailored Fit', 'Professional Look'],
      badge: badges[badgeIndex],
      rating: 4.5 + ((index * 11) % 40) / 100, // Deterministic rating between 4.5-4.9
      reviews: ((index * 17) % 150) + 20 // Deterministic reviews between 20-170
    };
  });

  // Product data with all blazers and suits
  const products = [...blazerProducts, ...suitsProducts];

  const categories = ['All', 'Blazer', 'Suits'];
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(12); // Initial load count

  // Memoized filtered products for better performance
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });
  }, [filteredProducts, sortBy]);

  // Memoized displayed products with lazy loading
  const displayedProducts = useMemo(() => {
    return sortedProducts.slice(0, displayCount);
  }, [sortedProducts, displayCount]);

  // Load more products function
  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 12, sortedProducts.length));
  };

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(12);
  }, [selectedCategory, searchTerm]);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Featured':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'New':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Our Product Collection
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium fashion items
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-navy-200 rounded-lg bg-white text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-navy-700 hover:bg-navy-50 border border-navy-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-navy-700 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-navy-200 rounded-lg bg-white text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500"
            >
              <option value="name">Name</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden block"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-navy-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="w-full bg-gradient-to-r from-navy-900 to-navy-800 hover:from-navy-800 hover:to-navy-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center">
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {displayedProducts.length < sortedProducts.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-navy-900 to-navy-800 hover:from-navy-800 hover:to-navy-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Load More Products
            </button>
          </div>
        )}

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-navy-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-2">No products found</h3>
            <p className="text-navy-600">Try adjusting your filters to see more products.</p>
          </div>
        )}
      </div>
    </section>
  );
}