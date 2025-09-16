'use client';

export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5-6v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
      ),
      title: "Secure Payments",
      description: "256-bit SSL encryption protects your payment information",
      highlight: "Bank-level Security"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "100% Satisfaction",
      description: "Love it or return it within 30 days for full refund",
      highlight: "Money Back Guarantee"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Free Shipping",
      description: "Complimentary shipping on all orders above ₹2,999",
      highlight: "No Hidden Charges"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs",
      highlight: "Always Here for You"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001",
      description: "Quality Management",
      logo: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">ISO</span>
        </div>
      )
    },
    {
      name: "OEKO-TEX",
      description: "Textile Safety",
      logo: (
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">ECO</span>
        </div>
      )
    },
    {
      name: "GOTS",
      description: "Organic Standards",
      logo: (
        <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">ORG</span>
        </div>
      )
    },
    {
      name: "Fair Trade",
      description: "Ethical Sourcing",
      logo: (
        <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">FT</span>
        </div>
      )
    }
  ];

  const testimonialStats = [
    { platform: "Google Reviews", rating: "4.8/5", reviews: "2,500+" },
    { platform: "Trustpilot", rating: "4.9/5", reviews: "1,800+" },
    { platform: "Facebook", rating: "4.7/5", reviews: "3,200+" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Why Choose HV Fashion?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trust is our priority. Here&apos;s why thousands of customers choose us for their fashion needs.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {badges.map((badge, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4">
                  <div className="text-white">
                    {badge.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {badge.description}
                </p>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {badge.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Reviews Stats */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">
              Trusted by Thousands
            </h3>
            <p className="text-gray-600">
              See what our customers are saying about us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-2xl font-bold text-navy-900 mb-1">
                  {stat.rating}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  {stat.platform}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.reviews} reviews
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Certified Excellence
            </h3>
            <p className="text-navy-200">
              Our commitment to quality is recognized by leading industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                <div className="flex justify-center mb-3">
                  {cert.logo}
                </div>
                <h4 className="text-white font-bold mb-1">
                  {cert.name}
                </h4>
                <p className="text-navy-200 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full border border-green-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">
              Your data is protected with industry-standard encryption
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}