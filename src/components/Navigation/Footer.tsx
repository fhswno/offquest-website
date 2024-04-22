// NEXT
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 px-10 py-16">
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
        <h1 className="ml-2 text-5xl font-semibold text-black dark:text-white">
          OffQuest
        </h1>
      </Link>
      <div className="flex flex-col items-center justify-center w-4/5 gap-6 tablet:w-1/2">
        <p className="text-white">Made with ❤️ in London 🇬🇧</p>
        <p className="text-sm text-center text-white tablet:text-base">
          © {new Date().getFullYear()} - All rights reserved. OffQuest is a
          Simplified Joint Stock Company (SAS) registered in Paris, France under
          company number 952107431.
        </p>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href="/privacy"
            className="px-4 py-2 text-white duration-500 ease-in-out rounded-md hover:bg-gray-500"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="px-4 py-2 text-white duration-500 ease-in-out rounded-md hover:bg-gray-500"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
