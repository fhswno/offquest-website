// NEXT
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/main-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex flex-col items-start justify-start w-full h-screen gap-10 p-10 pt-40 text-white"
    >
      <h1 className="w-2/3 text-5xl leading-tight">
        We&apos;re making{' '}
        <span className="z-10 underline-effect">top-tier</span> Software
        accessible to <span className="z-10 underline-effect">everyone</span>.
      </h1>
      <p className="w-1/2 text-lg">
        OffQuest is a software company specialised in FinTech, on a quest to
        build unique, life-changing products to help people make better
        financial decisions.
      </p>
      <Link
        href="/#products"
        className="px-6 py-3 mt-4 font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
      >
        Learn More
        <span className="inline w-5 h-5 ml-2">🌍</span>
      </Link>
    </section>
  );
};

export default Hero;
