// NEXT
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <main
      className="flex flex-col items-center justify-start h-screen gap-10 p-10 text-white"
      style={{
        backgroundImage: `url('/notly-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <NotlyNavbar />
      <h1 className="text-4xl">Hello, World!!! 🇮🇱</h1>
    </main>
  );
};

export default Page;

const NotlyNavbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between w-full p-4 text-white ">
      <Image
        src="/notly-wordmark.png"
        alt="Notly Logo"
        width={300}
        height={300}
        priority
        className="w-44 hover:animate-pulse"
      />
      <div className="flex flex-row items-center gap-12">
        <Link
          href="/notly-retro/privacy"
          className="px-4 py-2 text-xl duration-500 ease-in-out rounded-lg hover:bg-orange-800"
        >
          Privacy
        </Link>
        <Link
          href="/"
          className="px-4 py-2 text-xl duration-500 ease-in-out rounded-lg hover:bg-orange-800"
        >
          Home
        </Link>
      </div>
    </nav>
  );
};
