'use client';
import Link from 'next/link';
import { blazerImages } from '../app/data/blazerImages';

export default function FeaturedProducts() {

  const products = [
    {
      id: 1,
      name: "Premium Formal Shirt",
      category: "shirts",
      image: blazerImages[0],
      badge: "Best Seller",
      rating: 4.8,
      price: "$89",
      originalPrice: "$120",
      description: "Classic white formal shirt with premium cotton blend"
    },
    {
      id: 2,
      name: "Executive Blazer",
      category: "blazers",
      image: blazerImages[0],
      badge: "Premium",
      rating: 4.9,
      price: "$299",
      originalPrice: "$399",
      description: "Sophisticated navy blazer for business professionals"
    },
    {
      id: 3,
      name: "Formal Trousers",
      category: "pants",
      image: blazerImages[1],
      badge: "New",
      rating: 4.7,
      price: "$129",
      originalPrice: "$159",
      description: "Comfortable formal trousers with perfect fit"
    },
    {
      id: 4,
      name: "Casual Polo Shirt",
      category: "shirts",
      image: blazerImages[2],
      badge: "Featured",
      rating: 4.6,
      price: "$69",
      originalPrice: "$89",
      description: "Premium cotton polo for casual elegance"
    },
    {
      id: 5,
      name: "Designer Tie",
      category: "accessories",
      image: blazerImages[3],
      badge: "Limited",
      rating: 4.8,
      price: "$49",
      originalPrice: "$69",
      description: "Silk tie with sophisticated pattern"
    },
    {
      id: 6,
      name: "Chino Pants",
      category: "pants",
      image: blazerImages[0],
      badge: "Trending",
      rating: 4.7,
      price: "$99",
      originalPrice: "$129",
      description: "Versatile chino pants for smart casual look"
    },
    {
      id: 7,
      name: "Classic Business Blazer",
      category: "blazers",
      image: blazerImages[1],
      badge: "Best Seller",
      rating: 4.8,
      price: "$349",
      originalPrice: "$449",
      description: "Timeless classic blazer perfect for business meetings"
    },
    {
      id: 8,
      name: "Modern Fit Blazer",
      category: "blazers",
      image: blazerImages[2],
      badge: "New",
      rating: 4.7,
      price: "$279",
      originalPrice: "$359",
      description: "Contemporary blazer with modern tailoring"
    },
    {
      id: 9,
      name: "Premium Wool Blazer",
      category: "blazers",
      image: blazerImages[3],
      badge: "Limited",
      rating: 4.9,
      price: "$499",
      originalPrice: "$649",
      description: "Luxurious wool blazer for special occasions"
    },
    {
      id: 10,
      name: "Oxford Dress Shirt",
      category: "shirts",
      image: blazerImages[1],
      badge: "Best Seller",
      rating: 4.8,
      price: "$79",
      originalPrice: "$99",
      description: "Classic oxford shirt perfect for business attire"
    },
    {
      id: 11,
      name: "Leather Dress Shoes",
      category: "shoes",
      image: blazerImages[2],
      badge: "Premium",
      rating: 4.9,
      price: "$199",
      originalPrice: "$259",
      description: "Handcrafted leather shoes for formal occasions"
    },
    {
      id: 12,
      name: "Three-Piece Suit",
      category: "suits",
      image: blazerImages[3],
      badge: "Limited",
      rating: 4.9,
      price: "$699",
      originalPrice: "$899",
      description: "Complete three-piece suit for special events"
    },
    {
      id: 13,
      name: "Casual Sneakers",
      category: "shoes",
      image: blazerImages[0],
      badge: "Trending",
      rating: 4.6,
      price: "$149",
      originalPrice: "$189",
      description: "Comfortable sneakers for everyday wear"
    },
    {
      id: 14,
      name: "Pocket Watch",
      category: "accessories",
      image: blazerImages[1],
      badge: "Featured",
      rating: 4.7,
      price: "$299",
      originalPrice: "$399",
      description: "Vintage-style pocket watch with chain"
    },
    {
      id: 15,
      name: "Slim Fit Jeans",
      category: "pants",
      image: blazerImages[2],
      badge: "New",
      rating: 4.5,
      price: "$89",
      originalPrice: "$119",
      description: "Modern slim fit jeans for casual style"
    }
  ];



  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
        </div>

        {/* Simple Products Grid - Images Only */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 hover:opacity-75 transition-opacity duration-300">
                <img 
                  src={product.image} 
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}