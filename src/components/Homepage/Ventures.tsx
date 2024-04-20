// NEXT
import Image from 'next/image';

// COMPONENTS
import Badge from '../Branding/Badge';

const Ventures = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-10 px-10 text-white bg-gray-900 py-28"
      id="ventures"
    >
      <Badge text="Ventures" />
      <div className="flex flex-col items-center justify-center w-full gap-12 tablet:w-3/4 laptop:w-2/3">
        <h2 className="text-3xl leading-tight text-center laptop:text-4xl">
          OffQuest Ventures builds, maintains and scales{' '}
          <span className="z-10 underline-effect">forward-thinking</span>{' '}
          FinTech products.
        </h2>
        <p className="text-base leading-loose text-center laptop:text-lg">
          All of our products aim to make Financial Services more transparent,
          accessible and secure for everyone. We are firm believers that
          technology-enabled solutions can drive positive changes, and our
          ambition is to empower the next generation of merchants and consumers
          to make better financial decisions.
        </p>
        <Image
          src="/ventures.png"
          alt="Ventures"
          width={800}
          height={800}
          priority
          className="w-4/5 border border-blue-500 rounded-xl laptop:w-full desktop:w-2/3"
          blurDataURL="/ventures.png"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Ventures;
