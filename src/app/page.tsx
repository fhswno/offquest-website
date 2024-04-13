// NEXT
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import type { Metadata } from 'next';

// HARD CODED DATA
import { CardData } from '@/data';

// ICONS
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

// COMPONENTS
import GlowingEffect from '@/components/GlowingEffect';
import GradientText from '@/components/GradientText';
import Card from '@/components/Card';
import XLogo from '@/components/XLogo';

// STYLES
import '../../public/glowing-effect.css';
import '../app/globals.css';

// FONTS
import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

// METADATA
export const metadata: Metadata = {
  title:
    'OffQuest - Making top technology open-source and freely available to everyone',
  description:
    'OffQuest is a software company that builds and maintains top-tier, mostly open-source software solutions that empowers individuals and transforms communities. Our mission is to make top technology open-source and freely available to everyone. Explore our website to learn more about our products, services, and the team behind them.',
};

export default function Home() {
  return (
    <div className={`min-h-screen bg-gray-100 ${workSans.className}`}>
      <Head>
        <title>OffQuest</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <header className="z-10 px-4 py-6 bg-gray-300 dark:bg-neutral-900 drop-shadow-2xl sm:px-6 lg:px-8 shadow-black dark:shadow-white">
        <div className="flex items-center justify-between">
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
          <div className="flex flex-row items-center">
            <Link href="https://x.com/offquesthq" target="_blank">
              <div className="w-6 h-6 ml-4 text-2xl text-white transition duration-500 ease-in-out transform hover:text-blue-500 hover:-translate-y-1 hover:scale-110 group">
                <XLogo color="text-white group-hover:text-[#26a7de]" />
              </div>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center py-20 bg-white dark:bg-black">
        <h2 className="mb-8 text-5xl font-bold text-center text-black dark:text-white">
          Welcome to{' '}
          <span className="hover:animate-pulse hover:cursor-pointer">
            <a
              href="https://twitter.com/search?q=%23offquest&src=hashtag_click"
              target="_blank"
            >
              <GradientText text="#OffQuest" size="text-5xl" />
            </a>
          </span>
        </h2>
        <div className="blur-lg">
          <GlowingEffect />
        </div>
        <div className="flex items-start w-full desktop:flex-row mobile:flex-col tablet:flex-row smallMobile:flex-col desktop:h-96 mobile:h-fit tablet:h-fit smallMobile:h-fit desktop:p-20 tablet:p-20 mobile:p-14 smallMobile:p-10">
          <div className="flex flex-col h-full desktop:w-1/2 tablet:w-1/2 mobile:w-full desktop:mb-0 tablet:mb-0 mobile:mb-0 smallMobile:mb-20">
            <h2 className="text-4xl text-black dark:text-white">
              Follow us on our{' '}
              <GradientText
                text="quest to change the industry"
                size="text-4xl"
              ></GradientText>
            </h2>
            <p className="my-6 text-black dark:text-white">
              We are a team of innovators, on a quest to build leading tech
              products, which will dramatically change the way people interact
              with the world around them.
            </p>
            <p className="mb-6 text-black dark:text-white">
              Our goal is to solve real world problems, by creating
              beautifully-crafted products that are easy to use, great to look
              at, and most importantly, make a difference.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center desktop:w-1/2 mobile:w-full smallMobile:w-full tablet:w-1/2 h-fit">
            <div className="blur-3xl">
              <Image
                src="/planet.svg"
                alt="OffQuest Logo"
                width={300}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex items-start w-full mt-16 desktop:flex-row mobile:flex-col smallMobile:flex-col tablet:flex-row desktop:h-fit mobile:h-fit tablet:h-fit desktop:p-20 tablet:p-16 mobile:p-14 smallMobile:p-10">
          <div className="flex flex-col items-center justify-center h-full desktop:w-1/2 mobile:w-full smallMobile:w-full tablet:w-1/2 mobile:order-2 smallMobile:order-2 desktop:order-1 tablet:order-1">
            <div className="blur-xl mobile:ml-10 tablet:ml-0 desktop:ml-0">
              <Image
                src="/test.svg"
                alt="test animation"
                width={300}
                height={300}
                className="w-full h-96 smallMobile:ml-10 mobile:ml-8 tablet:ml-0 desktop:ml-0"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col h-full desktop:w-1/2 tablet:w-1/2 mobile:w-full mobile:order-1 smallMobile:order-1 desktop:order-1 tablet:order-1 ">
            <h2 className="text-4xl text-black text-start dark:text-white">
              We are currently{' '}
              <GradientText
                text="building our first product"
                size="text-4xl"
              ></GradientText>
            </h2>
            <p className="my-6 text-black dark:text-white">
              This product will provide a game-changing solution to a problem
              everyone faces, and will be available to the public in the coming
              months.
            </p>
            <p className="mb-6 text-black dark:text-white">
              Our diverse team of developers, designers and experts are building
              a community-driven product, which will get people together, help
              them achieve their goals, and provide them with the tools they
              need to change the world.
            </p>
          </div>
        </div>
        <h2 className="mt-20 mb-8 text-5xl font-bold text-center text-black dark:text-white">
          <span className="hover:animate-pulse hover:cursor-pointer">
            <GradientText text="Our Values" size="text-5xl" />
          </span>
        </h2>
        <div className="flex flex-row flex-wrap items-start justify-center w-full desktop:p-20 tablet:p-20 mobile:p-20 smallMobile:p-10">
          {CardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
        <h2 className="p-20 my-8 text-5xl font-bold text-center text-black dark:text-white">
          The Quest starts in{' '}
          <span className="hover:animate-pulse hover:cursor-pointer">
            <GradientText text="Fall 2023" size="text-5xl" />
          </span>
        </h2>
      </main>
      <footer className="flex flex-col items-center justify-center px-4 py-6 bg-gray-300 dark:bg-black sm:px-6 lg:px-8">
        <p className="text-sm text-center text-gray-600">
          Built with ❤️ by OffQuest Team in London, using Next.js & Tailwind CSS
        </p>
        <p className="w-full my-4 text-sm text-center text-gray-600 tablet:w-1/2">
          &copy; {new Date().getFullYear()} - All rights reserved. OffQuest is a
          French Societe par Actions Simplifiee (SAS) registered in Paris,
          France under company number 952107431.
        </p>
        <Link
          href="https://sarsburydarwell.notion.site/Privacy-Policy-afa1856985e54b9899cc8776f79f31eb?pvs=4"
          passHref
          target="_blank"
          className="text-sm text-center text-gray-600 hover:text-purple-500"
        >
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}
