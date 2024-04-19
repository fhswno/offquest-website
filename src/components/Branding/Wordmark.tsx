// NEXT
import Image from 'next/image';
import Link from 'next/link';

const Wordmark = () => {
  return (
    <Link
      className="flex items-center duration-500 ease-in-out hover:scale-105"
      href="/"
    >
      <Image
        src="/logo.png"
        alt="OffQuest Logo"
        width={40}
        height={40}
        priority
        className="hover:animate-pulse"
      />
      <h1 className="ml-2 text-xl font-semibold text-black dark:text-white">
        OffQuest
      </h1>
    </Link>
  );
};

export default Wordmark;
