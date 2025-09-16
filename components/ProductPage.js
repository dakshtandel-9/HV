'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blazerImages } from '../app/data/blazerImages';
import { suitsImages } from '../app/data/suitsImages';
import { jacketsImages } from '../app/data/jacketsImages';
import { waistCoatsImages } from '../app/data/waistCoatsImages';
import { shirtsImages } from '../app/data/shirtsImages';
import { accessoriesImages } from '../app/data/accessoriesImages';

export default function ProductPage({ productId }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    phone: ''
  });

  // Blazer images imported from centralized data file

  const blazerStyles = [
    'Executive', 'Casual', 'Formal', 'Business', 'Smart Casual', 'Classic', 'Modern', 'Vintage',
    'Slim Fit', 'Regular Fit', 'Tailored', 'Designer', 'Premium', 'Luxury', 'Professional'
  ];

  const blazerTypes = [
    'Single Breasted', 'Double Breasted', 'Notched Lapel', 'Peak Lapel', 'Shawl Collar',
    'Two Button', 'Three Button', 'Unstructured', 'Half Lined', 'Fully Lined'
  ];

  const suitStyles = [
    'Executive', 'Classic', 'Modern', 'Formal', 'Business', 'Premium', 'Professional',
    'Elegant', 'Sophisticated', 'Contemporary', 'Traditional', 'Luxury', 'Designer', 'Tailored',
    'Slim Fit', 'Regular Fit', 'Three Piece', 'Two Piece', 'Navy', 'Black', 'Charcoal'
  ];

  const suitTypes = [
    'Business Suit', 'Formal Suit', 'Wedding Suit', 'Tuxedo', 'Dinner Suit',
    'Two Piece', 'Three Piece', 'Single Breasted', 'Double Breasted', 'Slim Fit'
  ];

  const jacketStyles = [
    'Casual', 'Bomber', 'Denim', 'Leather', 'Windbreaker', 'Track', 'Varsity', 'Field',
    'Puffer', 'Quilted', 'Fleece', 'Hoodie', 'Zip-up', 'Button-up', 'Oversized', 'Fitted',
    'Vintage', 'Modern', 'Classic', 'Sporty', 'Urban', 'Outdoor', 'Winter', 'Spring'
  ];

  const jacketTypes = [
    'Bomber Jacket', 'Denim Jacket', 'Leather Jacket', 'Windbreaker', 'Track Jacket',
    'Varsity Jacket', 'Field Jacket', 'Puffer Jacket', 'Quilted Jacket', 'Fleece Jacket'
  ];

  const waistCoatStyles = [
    'Classic', 'Formal', 'Vintage', 'Modern', 'Traditional', 'Elegant', 'Premium', 'Designer',
    'Sophisticated', 'Contemporary', 'Luxury', 'Tailored', 'Slim Fit', 'Regular Fit',
    'Single Breasted', 'Double Breasted', 'Textured', 'Wool', 'Cotton', 'Silk'
  ];

  const waistCoatTypes = [
    'Formal Waistcoat', 'Wedding Waistcoat', 'Business Waistcoat', 'Evening Waistcoat', 'Casual Waistcoat',
    'Three Piece Waistcoat', 'Dress Waistcoat', 'Tuxedo Waistcoat', 'Vest', 'Gilet'
  ];

  // Shirt style names for variety
  const shirtStyles = [
    'Formal', 'Casual', 'Business', 'Dress', 'Oxford', 'Polo', 'Henley', 'Button-down',
    'Slim Fit', 'Regular Fit', 'Relaxed Fit', 'Classic', 'Modern', 'Premium', 'Designer',
    'Cotton', 'Linen', 'Silk', 'Denim', 'Flannel', 'Chambray', 'Poplin', 'Twill'
  ];

  const shirtTypes = [
    'Dress Shirt', 'Casual Shirt', 'Business Shirt', 'Polo Shirt', 'Henley Shirt',
    'Oxford Shirt', 'Flannel Shirt', 'Denim Shirt', 'Linen Shirt', 'T-Shirt'
  ];

  // Accessory style names for variety
  const accessoryStyles = [
    'Classic', 'Modern', 'Vintage', 'Luxury', 'Casual', 'Formal', 'Designer', 'Premium',
    'Elegant', 'Stylish', 'Contemporary', 'Traditional', 'Trendy', 'Sophisticated',
    'Minimalist', 'Bold', 'Refined', 'Chic', 'Timeless', 'Fashion-forward'
  ];

  const accessoryTypes = [
    'Tie', 'Bow Tie', 'Pocket Square', 'Cufflinks', 'Watch', 'Belt', 'Suspenders',
    'Lapel Pin', 'Tie Clip', 'Scarf', 'Gloves', 'Hat', 'Sunglasses', 'Wallet'
  ];

  const badges = ['Featured', 'New Arrival', 'Best Seller', 'Premium', 'Limited Edition', 'Professional', 'Casual', 'Formal'];

  // Generate blazer products dynamically
  const blazerProducts = blazerImages.map((imageUrl, index) => {
    const productId = index + 2; // Start from ID 2 to match ProductListing
    const styleIndex = index % blazerStyles.length;
    const typeIndex = index % blazerTypes.length;
    const badgeIndex = index % badges.length;
    
    return {
      id: productId,
      name: 'HV blazers',
      category: 'Blazer',
      images: [
        imageUrl,
        imageUrl
      ],
      description: `Experience premium quality with our ${blazerStyles[styleIndex]} ${blazerTypes[typeIndex]} Blazer. Crafted with attention to detail, this blazer combines style and comfort for the modern professional.`,
      features: [
        'Premium Fabric',
        'Professional Tailoring',
        'Comfortable Fit',
        'Versatile Design',
        'Quality Construction'
      ],
      specifications: {
        'Material': index % 3 === 0 ? '70% Wool, 30% Polyester' : index % 3 === 1 ? '60% Cotton, 40% Polyester' : '80% Wool, 20% Polyester',
        'Fit': index % 2 === 0 ? 'Slim Fit' : 'Regular Fit',
        'Care': index % 2 === 0 ? 'Dry Clean Only' : 'Machine Washable',
        'Origin': 'Made in India',
        'Style': index % 2 === 0 ? 'Single Breasted' : 'Double Breasted',
        'Lining': index % 2 === 0 ? 'Full Lined' : 'Half Lined'
      },
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: index % 4 === 0 ? ['Navy', 'Charcoal', 'Black', 'Brown'] : 
              index % 4 === 1 ? ['Beige', 'Olive', 'Navy', 'Gray'] :
              index % 4 === 2 ? ['Black', 'Charcoal', 'Navy', 'Brown'] :
              ['Gray', 'Navy', 'Black', 'Beige'],
      badge: badges[badgeIndex],
      inStock: true,
      rating: 4.5 + ((index * 7) % 40) / 100, // Deterministic rating between 4.5-4.9
       reviews: ((index * 13) % 150) + 20 // Deterministic reviews between 20-170
    };
  });

  // Generate suits products dynamically
  const suitsProducts = suitsImages.map((imageUrl, index) => {
    const productId = index + blazerImages.length + 2; // Continue from blazer IDs
    const styleIndex = index % suitStyles.length;
    const typeIndex = index % suitTypes.length;
    const badgeIndex = index % badges.length;
    
    return {
      id: productId,
      name: 'HV suits',
      category: 'Suits',
      images: [
        imageUrl,
        imageUrl
      ],
      description: `Experience premium quality with our ${suitStyles[styleIndex]} ${suitTypes[typeIndex]}. Crafted with attention to detail, this suit combines style and comfort for the modern professional.`,
      features: [
        'Premium Fabric',
        'Professional Tailoring',
        'Comfortable Fit',
        'Versatile Design',
        'Quality Construction'
      ],
      specifications: {
        'Material': index % 3 === 0 ? '70% Wool, 30% Polyester' : index % 3 === 1 ? '60% Cotton, 40% Polyester' : '80% Wool, 20% Polyester',
        'Fit': index % 2 === 0 ? 'Slim Fit' : 'Regular Fit',
        'Care': index % 2 === 0 ? 'Dry Clean Only' : 'Machine Washable',
        'Origin': 'Made in India',
        'Style': index % 2 === 0 ? 'Two Piece' : 'Three Piece',
        'Lining': index % 2 === 0 ? 'Full Lined' : 'Half Lined'
      },
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: index % 4 === 0 ? ['Navy', 'Charcoal', 'Black', 'Brown'] : 
              index % 4 === 1 ? ['Beige', 'Olive', 'Navy', 'Gray'] :
              index % 4 === 2 ? ['Black', 'Charcoal', 'Navy', 'Brown'] :
              ['Gray', 'Navy', 'Black', 'Beige'],
      badge: badges[badgeIndex],
      inStock: true,
      rating: 4.5 + ((index * 11) % 40) / 100, // Deterministic rating between 4.5-4.9
      reviews: ((index * 17) % 150) + 20 // Deterministic reviews between 20-170
    };
  });

  // Generate jackets products dynamically
  const jacketsProducts = jacketsImages.map((imageUrl, index) => {
    const productId = index + blazerImages.length + suitsImages.length + 2; // Continue from suits IDs
    const styleIndex = index % jacketStyles.length;
    const typeIndex = index % jacketTypes.length;
    const badgeIndex = index % badges.length;
    
    return {
      id: productId,
      name: 'HV jackets',
      category: 'Jackets',
      images: [
        imageUrl,
        imageUrl
      ],
      description: `Experience comfort and style with our ${jacketStyles[styleIndex]} ${jacketTypes[typeIndex]}. Perfect for casual wear and outdoor activities with modern design and quality materials.`,
      features: [
        'Comfortable Fit',
        'Durable Material',
        'Versatile Style',
        'Modern Design',
        'Quality Construction'
      ],
      specifications: {
        'Material': index % 3 === 0 ? '100% Cotton' : index % 3 === 1 ? '80% Cotton, 20% Polyester' : '100% Polyester',
        'Fit': index % 2 === 0 ? 'Regular Fit' : 'Relaxed Fit',
        'Care': index % 2 === 0 ? 'Machine Washable' : 'Hand Wash',
        'Origin': 'Made in India',
        'Style': index % 2 === 0 ? 'Zip-up' : 'Button-up',
        'Season': index % 2 === 0 ? 'All Season' : 'Winter'
      },
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: index % 4 === 0 ? ['Black', 'Navy', 'Grey', 'Brown'] : 
              index % 4 === 1 ? ['Blue', 'Green', 'Red', 'White'] :
              index % 4 === 2 ? ['Grey', 'Black', 'Navy', 'Khaki'] :
              ['Brown', 'Olive', 'Black', 'Blue'],
      badge: badges[badgeIndex],
      inStock: true,
      rating: 4.5 + ((index * 13) % 40) / 100, // Deterministic rating between 4.5-4.9
      reviews: ((index * 19) % 150) + 20 // Deterministic reviews between 20-170
    };
  });

  // Generate waist coats products dynamically
  const waistCoatsProducts = waistCoatsImages.map((imageUrl, index) => {
    const productId = index + blazerImages.length + suitsImages.length + jacketsImages.length + 2; // Continue from jackets IDs
    const styleIndex = index % waistCoatStyles.length;
    const typeIndex = index % waistCoatTypes.length;
    const badgeIndex = index % badges.length;
    
    return {
      id: productId,
      name: 'HV waist coats',
      category: 'Waist Coats',
      images: [
        imageUrl,
        imageUrl
      ],
      description: `Experience elegance with our ${waistCoatStyles[styleIndex]} ${waistCoatTypes[typeIndex]}. Perfect for formal occasions and layering, combining classic style with modern comfort.`,
      features: [
        'Premium Fabric',
        'Classic Design',
        'Formal Elegance',
        'Perfect Fit',
        'Quality Construction'
      ],
      specifications: {
        'Material': index % 3 === 0 ? '80% Wool, 20% Silk' : index % 3 === 1 ? '70% Cotton, 30% Polyester' : '90% Wool, 10% Cashmere',
        'Fit': index % 2 === 0 ? 'Slim Fit' : 'Regular Fit',
        'Care': index % 2 === 0 ? 'Dry Clean Only' : 'Professional Clean',
        'Origin': 'Made in India',
        'Style': index % 2 === 0 ? 'Single Breasted' : 'Double Breasted',
        'Lining': index % 2 === 0 ? 'Full Lined' : 'Half Lined'
      },
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: index % 4 === 0 ? ['Navy', 'Charcoal', 'Black', 'Grey'] : 
              index % 4 === 1 ? ['Brown', 'Beige', 'Navy', 'Black'] :
              index % 4 === 2 ? ['Black', 'Charcoal', 'Navy', 'Brown'] :
              ['Grey', 'Navy', 'Black', 'Burgundy'],
      badge: badges[badgeIndex],
      inStock: true,
      rating: 4.5 + ((index * 15) % 40) / 100, // Deterministic rating between 4.5-4.9
      reviews: ((index * 21) % 150) + 20 // Deterministic reviews between 20-170
    };
  });

  // Generate shirts products dynamically
  const shirtsProducts = shirtsImages.map((imageUrl, index) => {
    const productId = index + blazerImages.length + suitsImages.length + jacketsImages.length + waistCoatsImages.length + 2; // Continue from waist coats IDs
    const styleIndex = index % shirtStyles.length;
    const typeIndex = index % shirtTypes.length;
    const badgeIndex = index % badges.length;
    
    return {
      id: productId,
      name: 'HV shirts',
      category: 'Shirts',
      images: [
        imageUrl,
        imageUrl
      ],
      description: `Experience comfort and style with our ${shirtStyles[styleIndex]} ${shirtTypes[typeIndex]}. Perfect for professional and casual wear with premium fabric and modern design.`,
      features: [
        'Comfortable Fabric',
        'Versatile Design',
        'Easy Care',
        'Modern Fit',
        'Quality Construction'
      ],
      specifications: {
        'Material': index % 3 === 0 ? '100% Cotton' : index % 3 === 1 ? '60% Cotton, 40% Polyester' : '80% Cotton, 20% Polyester',
        'Fit': index % 2 === 0 ? 'Slim Fit' : 'Regular Fit',
        'Care': index % 2 === 0 ? 'Machine Washable' : 'Easy Care',
        'Origin': 'Made in India',
        'Style': index % 2 === 0 ? 'Button-down' : 'Classic',
        'Collar': index % 2 === 0 ? 'Spread Collar' : 'Point Collar'
      },
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: index % 4 === 0 ? ['White', 'Blue', 'Black', 'Grey'] : 
              index % 4 === 1 ? ['Pink', 'Green', 'Navy', 'White'] :
              index % 4 === 2 ? ['Grey', 'White', 'Blue', 'Black'] :
              ['Navy', 'White', 'Light Blue', 'Beige'],
      badge: badges[badgeIndex],
      inStock: true,
      rating: 4.5 + ((index * 17) % 40) / 100, // Deterministic rating between 4.5-4.9
      reviews: ((index * 23) % 150) + 20 // Deterministic reviews between 20-170
    };
  });

  // Generate accessories products dynamically
  const accessoriesProducts = accessoriesImages.map((imageUrl, index) => {
    const productId = index + blazerImages.length + suitsImages.length + jacketsImages.length + waistCoatsImages.length + shirtsImages.length + 2; // Continue from shirts IDs
    const styleIndex = index % accessoryStyles.length;
    const typeIndex = index % accessoryTypes.length;
    const badgeIndex = index % badges.length;
    
    return {
      id: productId,
      name: 'HV accessories',
      category: 'Accessories',
      images: [
        imageUrl,
        imageUrl
      ],
      description: `Elevate your style with our ${accessoryStyles[styleIndex]} ${accessoryTypes[typeIndex]}. Perfect for adding the finishing touch to any outfit with premium quality and elegant design.`,
      features: [
        'Premium Quality',
        'Elegant Design',
        'Perfect Finishing',
        'Versatile Style',
        'Durable Construction'
      ],
      specifications: {
        'Material': index % 3 === 0 ? 'Premium Silk' : index % 3 === 1 ? 'Fine Cotton' : 'Luxury Leather',
        'Style': accessoryStyles[styleIndex],
        'Type': accessoryTypes[typeIndex],
        'Care': index % 2 === 0 ? 'Dry Clean Only' : 'Hand Wash',
        'Origin': 'Made in India',
        'Finish': index % 2 === 0 ? 'Handcrafted' : 'Machine Finished'
      },
      sizes: accessoryTypes[typeIndex] === 'Belt' ? ['S', 'M', 'L', 'XL'] : 
             accessoryTypes[typeIndex] === 'Gloves' ? ['S', 'M', 'L', 'XL'] :
             ['One Size'],
      colors: index % 4 === 0 ? ['Black', 'Navy', 'Brown', 'Grey'] : 
              index % 4 === 1 ? ['Red', 'Blue', 'Green', 'Black'] :
              index % 4 === 2 ? ['Silver', 'Gold', 'Black', 'White'] :
              ['Brown', 'Black', 'Tan', 'Navy'],
      badge: badges[badgeIndex],
      inStock: true,
      rating: 4.6 + ((index * 19) % 35) / 100, // Deterministic rating between 4.6-4.95
      reviews: ((index * 29) % 120) + 25 // Deterministic reviews between 25-145
    };
  });

  // Create products object with all blazers, suits, jackets, waist coats, shirts, and accessories
  const allProducts = [...blazerProducts, ...suitsProducts, ...jacketsProducts, ...waistCoatsProducts, ...shirtsProducts, ...accessoriesProducts];
  const products = Object.fromEntries(allProducts.map(product => [product.id, product]));

  const product = products[productId] || products[2];

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
            <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-navy-900 transition-colors">Products</Link>
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
                className="object-contain"
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
                      className="object-contain"
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
                    className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-white hover:border-navy-300 text-navy-900"
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
                    className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-white hover:border-navy-300 text-navy-900"
                    required
                  >
                    <option value="" className="text-gray-500">Select a size</option>
                    {product.sizes.map((size) => (
                      <option key={size} value={size} className="text-navy-900">
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
                    className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-white hover:border-navy-300 text-navy-900"
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


          </div>
        </div>
      </div>
    </div>
  );
}