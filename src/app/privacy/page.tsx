// NEXT
import Image from 'next/image';

// NAVIGATION
import Navbar from '@/components/Navigation/Navbar';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen text-white bg-gray-900">
      <Navbar />
      <div className="flex flex-row items-center gap-4 h-96">
        <Image
          src="/logo.png"
          alt="OffQuest Logo"
          width={300}
          height={300}
          priority
          className="w-16"
          blurDataURL="/logo.png"
          placeholder="blur"
        />
        <h1 className="text-6xl">Privacy</h1>
      </div>
    </main>
  );
};

export default Page;
