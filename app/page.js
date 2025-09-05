import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import TrustBadges from '../components/TrustBadges';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <About />
      <TrustBadges />
      <Contact />
    </div>
  );
}
