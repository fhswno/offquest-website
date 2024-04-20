// FONT
import { Gupter } from 'next/font/google';
const gupter = Gupter({
  subsets: ['latin'],
  weight: '700',
});

const Page = () => {
  return (
    <main className={`${gupter.className} p-4`}>
      <h1 className="text-4xl">Hello, World!!! 🇮🇱</h1>
    </main>
  );
};

export default Page;
