// NEXT
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

// HARD CODED DATA
import { CardData } from '@/data';

// COMPONENTS
import GlowingEffect from '@/components/GlowingEffect';
import GradientText from '@/components/GradientText';
import Card from '@/components/Card';
import Hero from '@/components/Homepage/Hero';

// NAVIGATION
import Navbar from '@/components/Navigation/Navbar';

// STYLES
import '../../public/glowing-effect.css';
import Ventures from '@/components/Homepage/Ventures';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Ventures />
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
          Built with ❤️ in London, using Next.js & Tailwind CSS
        </p>
        <p className="w-full my-4 text-sm text-center text-gray-600 tablet:w-1/2">
          &copy; {new Date().getFullYear()} - All rights reserved. OffQuest is a
          Simplified Joint Stock Company (SAS) registered in Paris, France under
          company number 952107431.
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
