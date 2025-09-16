'use client';

export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Premium Quality",
      description: "We source only the finest materials and employ skilled craftsmen to ensure every piece meets our exacting standards."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Constantly evolving our designs and techniques to stay ahead of fashion trends while maintaining timeless elegance."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Customer First",
      description: "Your satisfaction is our priority. We're committed to providing exceptional service and building lasting relationships."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Sustainability",
      description: "Committed to ethical practices and sustainable fashion that respects both people and our planet."
    }
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Premium Products" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            About HV Fashion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the principles of quality, innovation, and customer satisfaction, 
            HV Fashion has been setting new standards in premium menswear for over two decades.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              What started as a small tailoring shop in Hyderabad has grown into one of India's 
              most trusted premium fashion brands. Our journey began with a simple belief: 
              every man deserves to look and feel his best.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Today, we combine traditional craftsmanship with modern design sensibilities 
              to create clothing that not only looks exceptional but also tells a story of 
              quality, attention to detail, and timeless style.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Quality Guaranteed</p>
                <p className="text-gray-600">Every piece is crafted to perfection</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-96">
              <img 
                src="/About.png" 
                alt="HV Fashion Heritage" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">50K+</div>
                <div className="text-sm text-gray-600">Customers</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Achievements
            </h3>
            <p className="text-navy-200">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-navy-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}