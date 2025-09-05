'use client';

export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5-6v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
      ),
      title: "Quality Guaranteed",
      description: "Premium materials and expert craftsmanship in every piece",
      highlight: "100% Authentic"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Free Shipping",
      description: "Complimentary delivery on orders above ₹2,999",
      highlight: "Pan India"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days of purchase",
      highlight: "No Questions Asked"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure Payment",
      description: "256-bit SSL encryption for safe transactions",
      highlight: "Bank Grade Security"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock customer service assistance",
      highlight: "Always Available"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Premium Experience",
      description: "Luxury shopping experience with personal styling",
      highlight: "VIP Treatment"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-700 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">ISO</span>
        </div>
      )
    },
    {
      name: "OEKO-TEX",
      description: "Textile Safety",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">ECO</span>
        </div>
      )
    },
    {
      name: "GOTS Certified",
      description: "Organic Standards",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">ORG</span>
        </div>
      )
    },
    {
      name: "Fair Trade",
      description: "Ethical Sourcing",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">FT</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">HV Fashion</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Your trust is our foundation. We're committed to providing exceptional quality, 
            service, and value in every aspect of your shopping experience.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {badges.map((badge, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-navy-100 group hover:border-amber-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 group-hover:from-amber-500 group-hover:to-amber-600 rounded-xl flex items-center justify-center transition-all duration-300 text-navy-600 group-hover:text-white">
                    {badge.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-navy-900">{badge.title}</h3>
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                      {badge.highlight}
                    </span>
                  </div>
                  <p className="text-navy-600 leading-relaxed">{badge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-navy-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">Our Certifications</h3>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Recognized by leading industry bodies for our commitment to quality, 
              sustainability, and ethical business practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  {cert.logo}
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-2">{cert.name}</h4>
                <p className="text-navy-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Summary */}
        <div className="mt-20 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">4.9/5</div>
              <div className="text-navy-200 mb-4">Average Rating</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">50K+</div>
              <div className="text-navy-200">Happy Customers</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-navy-200">Would Recommend</div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-navy-700">
            <blockquote className="text-xl text-navy-100 italic mb-4">
              "Exceptional quality and outstanding service. HV Fashion has become my go-to destination for premium clothing."
            </blockquote>
            <cite className="text-amber-400 font-medium">- Rajesh Kumar, Verified Customer</cite>
          </div>
        </div>
      </div>
    </section>
  );
}