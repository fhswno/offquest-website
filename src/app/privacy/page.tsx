// NEXT
import Image from 'next/image';
import Link from 'next/link';

// NAVIGATION
import Navbar from '@/components/Navigation/Navbar';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full text-white bg-gray-900">
      <Navbar />
      <div className="flex flex-row items-center gap-4 h-[600px]">
        <Image
          src="/logo.png"
          alt="OffQuest Logo"
          width={300}
          height={300}
          priority
          className="w-16"
          blurDataURL="/logo.png"
          placeholder="blur"
        />
        <h1 className="text-6xl">Privacy</h1>
      </div>
      <section className="flex flex-col w-full gap-8 pb-40 text-base tablet:text-lg tablet:w-11/12">
        <p>
          <strong>Effective Date</strong>: 23 April 2024
        </p>
        <p>
          offquest.io <i>(hereinafter referred to as the "Website") </i>is a
          website operated by OffQuest, a Simplified Joint-Stock Company with a
          share capital of 500 euros and registered office at 10 rue de
          Penthièvre, 75008 Paris (France), registered with the Paris Trade and
          Companies Register under the identification number{' '}
          <Link
            href="https://annuaire-entreprises.data.gouv.fr/entreprise/952107431?redirected=1"
            target="_blank"
            className="underline"
          >
            952 107 431
          </Link>{' '}
          <i>(the "Company")</i>.
        </p>
        <p>
          Website visitors <i>(the "Visitor(s)")</i> have access to visionary
          statements and elementary information about the Company.
        </p>
        <p>
          Visiting the website involves the collection of basic, non-sensitive
          information, such as the Operating System and device used to visit the
          website, and the country from which you accessed the website.
          Protecting your data is an absolute priority for the Company, which
          has adopted the following Privacy Policy to preserve visitors’ trust.
        </p>
        <p>
          All of this information is processed in accordance with this Privacy
          Policy and is subject to our Terms of Use.
        </p>
      </section>
    </main>
  );
};

export default Page;
