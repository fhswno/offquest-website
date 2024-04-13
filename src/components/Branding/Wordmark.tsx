// NEXT
import Image from 'next/image';

const Wordmark = () => {
  return (
    <div className="flex items-center">
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
    </div>
  );
};

export default Wordmark;
