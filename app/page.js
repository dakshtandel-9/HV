
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import TrustBadges from '../components/TrustBadges';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      {/* Featured Products Section */}
      <section id="products" className="scroll-mt-20">
        <FeaturedProducts />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {/* Trust Badges Section */}
      <section id="trust" className="scroll-mt-20">
        <TrustBadges />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
  );
}
