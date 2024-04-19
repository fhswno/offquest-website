// NEXT
import Image from 'next/image';

// COMPONENTS
import Badge from '../Branding/Badge';

const Software = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-10 text-white bg-gray-900 py-28">
      <Badge text="Software" />
      <div className="flex flex-col items-center justify-center w-2/3 gap-12">
        <h2 className="text-4xl leading-tight text-center">
          OffQuest develops and distributes{' '}
          <span className="z-10 underline-effect">life-changing</span>{' '}
          open-source productivity software.
        </h2>
        <p className="text-lg leading-loose text-center">
          We believe that top-notch productivity should be made freely available
          and open-source so that everyone can benefit from it. From project
          management to personal finance, from knowledge bases to time tracking,
          our goal is to get wonderful tools in the hands of everyone, so they
          can do wonderful things.
        </p>
        <Image
          src="/software.png"
          alt="Software"
          width={800}
          height={800}
          priority
          className="border border-blue-500 rounded-xl"
          blurDataURL="/software.png"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Software;
