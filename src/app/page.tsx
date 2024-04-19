// NEXT
import Image from 'next/image';
import Link from 'next/link';

// HARD CODED DATA
import { CardData } from '@/data';

// COMPONENTS
import GlowingEffect from '@/components/GlowingEffect';
import GradientText from '@/components/GradientText';
import Card from '@/components/Card';
import Hero from '@/components/Homepage/Hero';
import Ventures from '@/components/Homepage/Ventures';
import Software from '@/components/Homepage/Software';
import Contact from '@/components/Contact/Contact';

// NAVIGATION
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';

// STYLES
import '../../public/glowing-effect.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Ventures />
      <Software />
      <Contact />
      <Footer />
    </div>
  );
}
