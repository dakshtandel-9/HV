'use client';
import { useRouter } from 'next/navigation';

export default function Footer() {
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
  };
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "Premium Shirts", href: "/products", sectionId: null },
        { name: "Formal Trousers", href: "/products", sectionId: null },
        { name: "Blazers & Suits", href: "/products", sectionId: null },
        { name: "Casual Wear", href: "/products", sectionId: null },
        { name: "Accessories", href: "/products", sectionId: null },
        { name: "Sale Items", href: "/", sectionId: "featured-products" }
      ]
    },
    {
      title: "Customer Care",
      links: [
        { name: "Size Guide", href: "/", sectionId: "contact" },
        { name: "Shipping Info", href: "/", sectionId: "contact" },
        { name: "Returns & Exchange", href: "/", sectionId: "contact" },
        { name: "Care Instructions", href: "/", sectionId: "contact" },
      ]
    }
  ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-navy-800 to-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Stay Updated with <span className="text-amber-400">HV Fashion</span>
              </h3>
              <p className="text-navy-200 text-lg">
                Subscribe to our newsletter for exclusive offers, style tips, and early access to new collections.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white text-navy-900 placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="/logo.png" 
                  alt="HV Fashion Logo" 
                  className="w-12 h-12 mr-3"
                />
                <div>
                  <h3 className="text-2xl font-bold">HV Fashion</h3>
                  <p className="text-amber-400 text-sm">Blazer World</p>
                </div>
              </div>
              <p className="text-navy-300 mb-6 leading-relaxed">
                Crafting premium fashion experiences since 1999. Your trusted destination for quality, style, and sophistication.
              </p>
              <div className="flex space-x-4">
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-6 text-amber-400">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => handleNavigation(link.href, link.sectionId)}
                        className="text-navy-300 hover:text-white transition-colors duration-200 text-sm text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <div className="space-y-2 text-navy-300 text-sm">
                <p className="flex items-center justify-center lg:justify-start">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  08977009210
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@hvfashion.com
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
3F, Samrat R Complex, Saifabad, Lakdikapul, Hyderabad, Telangana 500004
                </p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="text-center">
              <h5 className="text-sm font-semibold text-amber-400 mb-4"></h5>
              <div className="flex justify-center space-x-3">
                {/* {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="w-12 h-8 bg-white rounded flex items-center justify-center"
                  >
                    <span className="text-navy-900 text-xs font-bold">{method.logo}</span>
                  </div>
                ))} */}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <div className="space-y-2 text-navy-300 text-sm">
                <p>&copy; 2025 HV Fashion. All rights reserved.</p>
<p>Designed and Developed by Daksh Tandel</p>
                <div className="flex justify-center lg:justify-end space-x-4">
                  {/* <button onClick={() => handleNavigation('/', 'contact')} className="hover:text-white transition-colors">Privacy Policy</button>
                  <button onClick={() => handleNavigation('/', 'contact')} className="hover:text-white transition-colors">Terms of Service</button>
                  <button onClick={() => handleNavigation('/', 'contact')} className="hover:text-white transition-colors">Cookie Policy</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}