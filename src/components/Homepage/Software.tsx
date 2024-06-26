// NEXT
import Image from 'next/image';
import Link from 'next/link';

// COMPONENTS
import Badge from '../Branding/Badge';

// ENUMS
import { ShadowColor } from '../../../enums/branding-enums';

const Software = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-10 text-white bg-gray-900 py-28">
      <Badge text="Software" shadowColor={ShadowColor.GREEN} />
      <div className="flex flex-col items-center justify-center w-full gap-12 tablet:w-3/4 laptop:w-2/3">
        <h2 className="text-3xl leading-tight text-center laptop:text-4xl">
          OffQuest develops and distributes{' '}
          <span
            className="z-10 underline-effect"
            style={
              {
                '--underline-color': '#41B06E',
              } as React.CSSProperties
            }
          >
            life-changing
          </span>{' '}
          open-source productivity software.
        </h2>
        <p className="text-base leading-loose text-center laptop:text-lg">
          We believe that top-notch productivity should be made freely available
          and open-source so that everyone can benefit from it. From project
          management to personal finance, from knowledge bases to time tracking,
          our goal is to get wonderful tools in the hands of everyone, so they
          can do wonderful things.
        </p>
        <Link
          className="px-6 py-3 mt-4 font-medium text-white transition duration-500 ease-in-out transform bg-green-600 rounded-lg hover:bg-green-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
          href="/notly"
        >
          Explore Notly <span>🚀</span>
        </Link>
        <Image
          src="/software.png"
          alt="Software"
          width={800}
          height={800}
          priority
          className="w-4/5 border border-green-500 rounded-xl laptop:w-full desktop:w-2/3"
          blurDataURL="/software.png"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Software;
