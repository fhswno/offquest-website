// Dependencies & Core Components
import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";
import Head from "next/head";
import { CardData } from "@/data";

// import icon from react-icons
import { FaLinkedin, FaTwitter } from "react-icons/fa";

// Components
import GlowingEffect from "@/components/GlowingEffect";
import GradientText from "@/components/GradientText";
import Card from "@/components/Card";

// Styles
import "../../public/glowing-effect.css";
import "../app/globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export default function Home() {
  return (
    <div className={"min-h-screen bg-gray-100"}>
      <Head>
        <title>OffQuest</title>
      </Head>
      <header className="bg-neutral-900 drop-shadow-2xl py-6 px-4 sm:px-6 lg:px-8 z-10 shadow-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="OffQuest Logo"
              width={40}
              height={40}
              priority
              // add an animation so the logo gets bigger and glows
              className="hover:animate-pulse"
            />
            <h1
              className={`${sourceCodePro.className} text-xl font-semibold text-white ml-2`}
            >
              OffQuest
            </h1>
          </div>
          {/* Add more navigation items as needed */}
          <div className="flex flex-row items-center">
            <a href="https://www.linkedin.com/company/offquest" target="_blank">
              <FaLinkedin className="text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
            </a>
            <a href="https://twitter.com/offquesthq" target="_blank">
              <FaTwitter className="text-white text-2xl ml-4 hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
            </a>
          </div>
        </div>
      </header>
      <main className="py-20 flex flex-col items-center justify-center bg-black">
        <h2
          className={`${sourceCodePro.className} text-center text-5xl font-bold text-white mb-8`}
        >
          Welcome to{" "}
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
        <div className="w-full flex desktop:flex-row mobile:flex-col tablet:flex-row smallMobile:flex-col items-start desktop:h-96 mobile:h-fit tablet:h-fit smallMobile:h-fit desktop:p-20 tablet:p-20 mobile:p-14 smallMobile:p-10">
          <div className="flex flex-col desktop:w-1/2 h-full tablet:w-1/2 mobile:w-full desktop:mb-0 tablet:mb-0 mobile:mb-0 smallMobile:mb-20">
            <h2 className={`${sourceCodePro.className} text-4xl text-white`}>
              Follow us on our{" "}
              <GradientText
                text="quest to change the industry"
                size="text-4xl"
              ></GradientText>
            </h2>
            <p className={`${sourceCodePro.className} my-6 text-white`}>
              We are a team of innovators, on a quest to build leading tech
              products, which will dramatically change the way people interact
              with the world around them.
            </p>
            <p className={`${sourceCodePro.className} mb-6 text-white`}>
              Our goal is to solve real world problems, by creating
              beautifully-crafted products that are easy to use, great to look
              at, and most importantly, make a difference.
            </p>
          </div>
          <div className="desktop:w-1/2 mobile:w-full smallMobile:w-full tablet:w-1/2 flex flex-col items-center justify-center h-fit">
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
        <div className="mt-16 w-full flex desktop:flex-row mobile:flex-col smallMobile:flex-col tablet:flex-row items-start desktop:h-fit mobile:h-fit tablet:h-fit desktop:p-20 tablet:p-16 mobile:p-14 smallMobile:p-10">
          <div className="desktop:w-1/2 mobile:w-full smallMobile:w-full tablet:w-1/2 flex flex-col items-center justify-center h-full mobile:order-2 smallMobile:order-2 desktop:order-1 tablet:order-1">
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
          <div className="flex flex-col desktop:w-1/2 h-full  tablet:w-1/2 mobile:w-full mobile:order-1 smallMobile:order-1 desktop:order-1 tablet:order-1 ">
            <h2
              className={`${sourceCodePro.className} text-start text-4xl text-white`}
            >
              We are currently{" "}
              <GradientText
                text="building our first product"
                size="text-4xl"
              ></GradientText>
            </h2>
            <p className={`${sourceCodePro.className} my-6 text-white`}>
              This product will provide a game-changing solution to a problem
              everyone faces, and will be available to the public in the coming
              months.
            </p>
            <p className={`${sourceCodePro.className} mb-6 text-white`}>
              Our diverse team of developers, designers and experts are building
              a community-driven product, which will get people together, help
              them achieve their goals, and provide them with the tools they
              need to change the world.
            </p>
          </div>
        </div>
        <h2
          className={`${sourceCodePro.className} text-center text-5xl font-bold text-white mb-8 mt-20`}
        >
          <span className="hover:animate-pulse hover:cursor-pointer">
            <GradientText text="Our Values" size="text-5xl" />
          </span>
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-start w-full desktop:p-20 tablet:p-20 mobile:p-20 smallMobile:p-10">
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
        <h2
          className={`${sourceCodePro.className} text-center text-5xl font-bold text-white my-8 p-20`}
        >
          The Quest starts in{" "}
          <span className="hover:animate-pulse hover:cursor-pointer">
            <GradientText text="2023" size="text-5xl" />
          </span>
        </h2>
      </main>
      <footer className="bg-black py-6 px-4 sm:px-6 lg:px-8">
        <div
          className={`${sourceCodePro.className} text-center text-gray-600 text-sm`}
        >
          Built with ❤️ by OffQuest Team in London, using Next.js & Tailwind CSS
        </div>
        <div
          className={`${sourceCodePro.className} text-center text-gray-600 text-sm`}
        >
          &copy; {new Date().getFullYear()} OffQuest. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
