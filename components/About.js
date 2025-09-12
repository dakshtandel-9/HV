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
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-700 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">HV Fashion</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Crafting premium fashion experiences since 1999, we blend traditional craftsmanship 
            with contemporary design to create clothing that defines modern elegance.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Our Story of Excellence
            </h3>
            <div className="space-y-6 text-navy-600 leading-relaxed">
              <p>
                Founded with a vision to redefine men&apos;s fashion, HV Fashion has been at the forefront 
                of premium clothing for over two decades. What started as a small boutique has grown 
                into a trusted name synonymous with quality, style, and sophistication.
              </p>
              <p>
                Our journey began with a simple belief: every man deserves to look and feel his best. 
                This philosophy drives everything we do, from selecting the finest fabrics to ensuring 
                impeccable tailoring in every piece we create.
              </p>
              <p>
                Today, we continue to honor our heritage while embracing innovation, creating timeless 
                pieces that seamlessly blend classic elegance with contemporary style. Each garment 
                tells a story of craftsmanship, attention to detail, and unwavering commitment to excellence.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Discover Our Heritage
              </button>
            </div>
          </div>
          
          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>
              
              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-navy-900 mb-2">25+ Years</h4>
                <p className="text-navy-600">of Fashion Excellence</p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a brand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 group-hover:from-amber-500 group-hover:to-amber-600 rounded-full mb-6 transition-all duration-300 text-navy-600 group-hover:text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h4>
                <p className="text-navy-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="">
                <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-navy-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}