// NEXT
import Image from 'next/image';

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-6 text-white bg-gray-900">
      <Image
        src="/logo.png"
        alt="OffQuest Logo"
        width={300}
        height={300}
        priority
        className="w-24 animate-pulse"
        blurDataURL="/logo.png"
        placeholder="blur"
      />
      <h1 className="text-2xl">Loading...</h1>
    </main>
  );
}
