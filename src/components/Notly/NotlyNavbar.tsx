// NEXT
import Image from 'next/image';
import Link from 'next/link';

// TYPESCRIPT
type Props = {
  isPrivacy?: boolean;
};

const NotlyNavbar = ({ isPrivacy = false }: Props) => {
  return (
    <nav className="flex flex-row items-center justify-between w-full text-white tablet:p-4">
      <Image
        src="/notly-wordmark.png"
        alt="Notly Logo"
        width={300}
        height={300}
        priority
        className="w-32 tablet:w-36 laptop:w-44 hover:animate-pulse"
      />
      <div className="flex flex-row items-center gap-2 tablet:gap-12">
        <Link
          // href="/notly/privacy"
          href={isPrivacy ? '/notly' : '/notly/privacy'}
          className="px-4 py-2 text-base duration-500 ease-in-out rounded-lg tablet:text-lg laptop:text-xl hover:bg-orange-800"
        >
          {isPrivacy ? 'App' : 'Privacy'}
        </Link>
        <Link
          href="/"
          className="px-4 py-2 text-base duration-500 ease-in-out rounded-lg tablet:text-lg laptop:text-xl hover:bg-orange-800"
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default NotlyNavbar;
