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
      <div className="flex flex-col items-center justify-center w-2/3 gap-12">
        <h2 className="text-4xl leading-tight text-center">
          OffQuest Ventures builds, maintains and scales{' '}
          <span className="z-10 underline-effect">forward-thinking</span>{' '}
          FinTech products.
        </h2>
        <p className="text-lg leading-loose text-center">
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
          className="border border-blue-500 rounded-xl"
          blurDataURL="/ventures.png"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Ventures;
