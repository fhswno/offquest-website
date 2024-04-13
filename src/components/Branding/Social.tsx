// NEXT
import Link from 'next/link';

// COMPONENTS
import XLogo from '../XLogo';

const Social = () => {
  return (
    <div className="flex flex-row items-center">
      <Link href="https://x.com/offquesthq" target="_blank">
        <div className="w-6 h-6 ml-4 text-2xl text-white transition duration-500 ease-in-out transform hover:text-blue-500 hover:-translate-y-1 hover:scale-110 group">
          <XLogo color="text-white group-hover:text-[#26a7de]" />
        </div>
      </Link>
    </div>
  );
};

export default Social;
