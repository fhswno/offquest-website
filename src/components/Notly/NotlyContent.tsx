// NEXT
import Image from 'next/image';
import Link from 'next/link';

const NotlyContent = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-4 pt-10 text-white tablet:pt-0 tablet:p-10 ">
      <Image
        src="/notly-icon.png"
        alt="Notly Icon"
        width={300}
        height={300}
        priority
        className="w-16 shadow-2xl tablet:w-20 desktop:w-24 rounded-2xl shadow-gray-700"
        blurDataURL="/notly-icon.png"
        placeholder="blur"
      />
      <div className="flex flex-col items-center justify-center w-full gap-5 tablet:w-2/3 laptop:w-1/2 desktop:w-2/5">
        <h1 className="text-4xl font-medium leading-tight text-center desktop:text-5xl">
          Organise your life with Notly
        </h1>
        <p className="text-center">
          Get more done with custom features - set expiry dates, trigger
          accountability alerts, and more.
        </p>
        <Link
          href="/"
          className="px-6 py-2 transition-colors duration-1000 ease-in-out transform border rounded-lg shadow-2xl border-amber-700 bg-gradient-to-t from-amber-900 to-amber-700 shadow-amber-950 hover:from-amber-700 hover:to-amber-900"
        >
          Coming soon on Android
        </Link>
      </div>
    </section>
  );
};

export default NotlyContent;
