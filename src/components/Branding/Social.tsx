// NEXT
import Link from 'next/link';

// LUCIDE
import { GitHub } from 'react-feather';

const Social = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <Link href="https://x.com/offquesthq" target="_blank" className="p-2">
        <div className="px-2 ml-4 text-2xl text-white transition duration-500 ease-in-out transform rounded-lg hover:bg-black hover:-translate-y-1 hover:scale-110">
          <span className="text-4xl">𝕏</span>
        </div>
      </Link>
      <Link href="https://github.com/offquest" target="_blank">
        <div className="p-2 text-2xl text-white transition duration-500 ease-in-out transform rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black">
          <GitHub width={24} height={24} />
        </div>
      </Link>
    </div>
  );
};

export default Social;
