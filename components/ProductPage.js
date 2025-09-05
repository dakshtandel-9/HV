'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProductPage({ productId }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    phone: ''
  });

  // Product data - in a real app, this would come from an API or database
  const products = {
    1: {
      id: 1,
      name: 'Premium Shirt',
      category: 'Shirt',
      images: [
        '/ProductsImage/Shirt/WhatsApp Image 2025-09-05 at 11.16.56 AM.jpeg'
      ],
      description: 'Experience the perfect blend of comfort and style with our premium shirt. Crafted from the finest materials, this shirt offers exceptional quality and a sophisticated look that\'s perfect for both professional and casual settings.',
      features: [
        'Premium Cotton Blend',
        'Wrinkle Resistant Technology',
        'Comfortable Regular Fit',
        'Easy Care Instructions',
        'Breathable Fabric',
        'Durable Construction'
      ],
      specifications: {
        'Material': '100% Premium Cotton',
        'Fit': 'Regular Fit',
        'Care': 'Machine Washable',
        'Origin': 'Made in India',
        'Collar': 'Classic Collar',
        'Sleeve': 'Full Sleeve'
      },
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Blue', 'Black'],
      badge: 'Featured',
      inStock: true,
      rating: 4.8,
      reviews: 124
    }
  };

  const product = products[productId] || products[1];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.size || !formData.phone) {
      alert('Please fill in all fields');
      return;
    }
    
    const message = `Hi! I'm interested in ${product.name}\n\nProduct Link: ${window.location.href}\nName: ${formData.name}\nSize: ${formData.size}\nPhone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/916363073455?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-navy-600">
            <a href="/" className="hover:text-navy-900 transition-colors">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-navy-900 transition-colors">Products</a>
            <span>/</span>
            <span className="text-navy-900 font-medium">{product.category}</span>
            <span>/</span>
            <span className="text-navy-900 font-medium">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.badge && (
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${getBadgeColor(product.badge)}`}>
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-navy-900 ring-2 ring-navy-200'
                        : 'border-gray-200 hover:border-navy-400'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-600 font-medium text-sm">{product.category}</span>
                {product.inStock && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    In Stock
                  </span>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-navy-600 text-sm">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Description</h3>
              <p className="text-navy-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-navy-50 to-blue-50 p-6 rounded-xl border border-navy-100">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Contact for This Product</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-white hover:border-navy-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-navy-700 mb-2">
                    Preferred Size *
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-white hover:border-navy-300"
                    required
                  >
                    <option value="">Select a size</option>
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-white hover:border-navy-300"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Send WhatsApp Message
                </button>
              </form>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-navy-600">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Specifications</h3>
              <div className="bg-white rounded-lg p-4 space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-b-0">
                    <span className="text-navy-600 font-medium">{key}:</span>
                    <span className="text-navy-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}