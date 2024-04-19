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
      <footer className="flex flex-col items-center justify-center px-4 py-6 bg-gray-300 dark:bg-black sm:px-6 lg:px-8">
        <p className="text-sm text-center text-gray-600">
          Built with ❤️ in London, using Next.js & Tailwind CSS
        </p>
        <p className="w-full my-4 text-sm text-center text-gray-600 tablet:w-1/2">
          &copy; {new Date().getFullYear()} - All rights reserved. OffQuest is a
          Simplified Joint Stock Company (SAS) registered in Paris, France under
          company number 952107431.
        </p>
        <Link
          href="https://sarsburydarwell.notion.site/Privacy-Policy-afa1856985e54b9899cc8776f79f31eb?pvs=4"
          passHref
          target="_blank"
          className="text-sm text-center text-gray-600 hover:text-purple-500"
        >
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
