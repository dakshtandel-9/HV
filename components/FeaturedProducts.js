'use client';
import Link from 'next/link';

export default function FeaturedProducts() {
  const featuredImages = [
    'https://res.cloudinary.com/dlk0wvka6/image/upload/v1757598305/0192_ztyfoa.jpg',
    'https://res.cloudinary.com/dlk0wvka6/image/upload/v1757598296/018_u2nnie.jpg',
    'https://res.cloudinary.com/dlk0wvka6/image/upload/v1757598295/047_uy57lo.jpg',
    'https://res.cloudinary.com/dlk0wvka6/image/upload/v1757598283/0234_bb6sfk.jpg',
    'https://res.cloudinary.com/dlk0wvka6/image/upload/v1757598275/068_muovho.jpg',
    'https://res.cloudinary.com/dlk0wvka6/image/upload/v1757598273/0154_g9jkrq.jpg'
  ];

  const blazerStyles = [
    'Executive', 'Casual', 'Formal', 'Business', 'Smart Casual', 'Classic', 'Modern', 'Vintage',
    'Slim Fit', 'Regular Fit', 'Tailored', 'Designer', 'Premium', 'Luxury', 'Professional'
  ];

  const blazerTypes = [
    'Single Breasted', 'Double Breasted', 'Notched Lapel', 'Peak Lapel', 'Shawl Collar',
    'Two Button', 'Three Button', 'Unstructured', 'Half Lined', 'Fully Lined'
  ];

  const badges = ['Featured', 'New Arrival', 'Best Seller', 'Premium', 'Limited Edition', 'Professional'];
  const prices = ['₹4,999', '₹5,499', '₹6,999', '₹7,499', '₹8,999', '₹9,499'];
  const originalPrices = ['₹6,999', '₹7,999', '₹9,999', '₹10,999', '₹12,999', '₹13,999'];

  // Generate featured products from new image data
  const products = featuredImages.map((imageUrl, index) => {
    const productId = index + 2; // Start from ID 2 to match ProductListing
    const styleIndex = index % blazerStyles.length;
    const typeIndex = index % blazerTypes.length;
    const badgeIndex = index % badges.length;
    
    return {
      id: productId,
      name: `${blazerStyles[styleIndex]} Blazer`,
      category: 'Blazer',
      price: prices[index % prices.length],
      originalPrice: originalPrices[index % originalPrices.length],
      image: imageUrl,
      rating: 4.5 + ((index * 7) % 40) / 100, // Deterministic rating between 4.5-4.9
      reviews: ((index * 13) % 150) + 20, // Deterministic reviews between 20-170
      badge: badges[badgeIndex],
      description: `Premium ${blazerTypes[typeIndex]} design with superior craftsmanship`
    };
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked collection of premium fashion essentials, 
            crafted with attention to detail and designed for the modern lifestyle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Product Image */}
              <div className="relative overflow-hidden h-full">
                <div className="w-full h-full">
                  <img 
                    src={product.image} 
                    alt={`Product ${product.id}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/products">
            <button className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}