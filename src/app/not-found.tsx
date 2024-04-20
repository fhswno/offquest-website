// NEXT
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10 text-white bg-gray-900">
      <Link
        className="flex items-center duration-500 ease-in-out hover:scale-105"
        href="/"
      >
        <Image
          src="/logo.png"
          alt="OffQuest Logo"
          width={60}
          height={60}
          priority
          className="hover:animate-pulse"
        />
        <h1 className="ml-2 text-4xl font-semibold text-black dark:text-white">
          OffQuest
        </h1>
      </Link>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h1 className="font-semibold text-8xl">404</h1>
        <p className="text-2xl font-light">Page not found</p>
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Go back home 🏡
      </Link>
    </div>
  );
}
