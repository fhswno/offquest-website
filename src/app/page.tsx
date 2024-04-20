// COMPONENTS
import Hero from '@/components/Homepage/Hero';
import Ventures from '@/components/Homepage/Ventures';
import Software from '@/components/Homepage/Software';
import Contact from '@/components/Contact/Contact';

// NAVIGATION
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';

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
