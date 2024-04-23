// NEXT
import Image from 'next/image';
import Link from 'next/link';

// NAVIGATION
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full text-white bg-gray-900">
      <Navbar />
      <div className="flex flex-row items-center gap-4 h-[500px] tablet:h-[600px] pt-20">
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
      <section className="flex flex-col w-11/12 gap-8 pb-40 text-base tablet:text-lg">
        <p>
          <strong>Effective Date</strong>: 23 April 2024
        </p>
        <p>
          offquest.io{' '}
          <i>(hereinafter referred to as the &quot;Website&quot;) </i>is a
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
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          Information Collection
        </h2>
        <p>
          To allow Visitors to fully enjoy the services and features of the
          Website, the Company collects essential, non-sensitive information. It
          is recalled that by visiting on the Website, you expressly agree that
          this information be collected regardless of the country from which you
          are connecting. Furthermore, the fact that you provide basic data to
          the Company is a completely voluntary step on your part. You have the
          possibility to oppose this at any time, in accordance with the General
          Conditions of Use of the Website and this Privacy Policy, by letting
          us know directly, knowing that the withdrawal of your consent does not
          operate retroactively.
        </p>
        <p className="underline">
          This information is collected at different times and by various
          methods:
        </p>
        <h3 className="text-xl font-semibold tablet:text-2xl">
          Information Collected
        </h3>
        <p>
          Information provided during every visit: upon visiting the website, we
          collect the name of country from which you visited the Website, the
          device and operating system you used to visit the Website and the
          page(s) you have visited.
        </p>
        <p>
          We require visitors to provide this data is order to analyse and
          monitor web traffic, and be able to fix potential bugs or issues that
          may arise for specific visitors.
        </p>
        <p>
          All data collected is anonymised, and never include sensitive or
          personal data such as a person’s name, address, age, occupation,
          interests etc.
        </p>
        <h3 className="text-xl font-semibold tablet:text-2xl">
          Use of the Website
        </h3>
        <p>
          During your use of the Website, the Company's servers automatically
          record the information created and exchanged using our Services. For
          example, the Company is aware of all your session information{' '}
          <i>(which page you visited on the Website, what data was entered)</i>.
        </p>
        <h3 className="text-xl font-semibold tablet:text-2xl">
          Log files, Internet Protocol <i>(IP)</i> address, and Computer
          Information
        </h3>
        <p>
          When you connect to the Website, the Company receives the link from
          the site from which you arrived and the one to which you are going
          when you leave the Website.
        </p>
        <p>
          The Company also receives your internet protocol <i>(IP)</i> address
          or certain information regarding the operating system of your computer
          or its internet browser.
        </p>
        <h3 className="text-xl font-semibold tablet:text-2xl">Cookies</h3>
        <p>
          The Company does not use cookies and doesn’t store any visitor
          information.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          Retention of Collected Information
        </h2>
        <p>
          Once collected, this information is stored on the servers of the
          Company or any subcontractor of the Company for the purpose of
          processing them in connection with the use of the Services. They are
          kept for no more than thirty days.{' '}
        </p>
        <p>
          You always remain the owner of the information about you that you
          transmit to the Website. In this respect, you have, in accordance with
          Law No. 78-17 of January 6, 1978, as amended by Law No. 2004-801 of
          August 6, 2004 and EU Regulation 2016/679 of April 27, 2016, a right
          of access, rectification, limitation of processing and/or deletion of
          personal data concerning you, as well as the right to object to such
          processing and the right to data portability. To exercise your rights,
          please write to the following email address:{' '}
          <Link
            href="mailto:privacy@offquest.io?subject=About OffQuest's Privacy Policy&body=Hello,%0D%0A%0D%0AI have a question about OffQuest's Privacy Policy..."
            className="underline"
          >
            privacy@offquest.io
          </Link>{' '}
          or to the following postal address:{' '}
        </p>
        <p>
          <strong>OffQuest</strong> - 10 rue de Penthièvre, 75008 Paris
          (France).
        </p>
        <p> A response to your request will be sent to you within 30 days.</p>
        <p>
          You retain the right to lodge a complaint with the{' '}
          <Link
            href="https://www.cnil.fr/en"
            target="_blank"
            className="underline"
          >
            CNIL
          </Link>{' '}
          for infringement of your data protection rights.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          Use of Collected Information
        </h2>
        <p>
          The collected information is used to allow you to use the various
          services offered on the Website. By creating your account, you
          voluntarily and expressly agree to the General Terms and Conditions of
          Use of the Website and this Privacy Policy, which authorize the
          Company to process your data.
        </p>
        <p>
          Because the protection of your personal data is essential, the Company
          undertakes not to sell, rent or provide your personal information in
          any way, except as described in this Privacy Policy and the General
          Terms and Conditions of Use of the Website. However, in various
          situations, the Company may disclose or share your personal
          information with third parties, <u>including</u>:
        </p>
        <ul className="flex flex-col gap-4 pl-6">
          <li className="list-disc">
            <i>with your explicit or implicit consent;</i>
          </li>
          <li className="list-disc">
            <i>
              to comply with applicable law, regulations, court orders,
              judgments, or any other mandatory disclosure;
            </i>
          </li>
          <li className="list-disc">
            <i>
              to protect the rights, property, or safety of the Website, its
              members, or the public; or
            </i>
          </li>
          <li className="list-disc">
            <i>
              as part of the provision of the various services and features
              offered by the Website, but only when necessary for the
              performance of its operations and the provision of these services
              and features.
            </i>
          </li>
        </ul>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          Your Obligations
        </h2>
        <p>
          As a visitor of the Website, you are required to comply with, in
          addition to legal and regulatory obligations, the obligations arising
          from this Privacy Policy and the General Terms and Conditions of Use
          of the Website.
        </p>
        <p>
          The Company also calls for your responsibility as Visitors are solely
          responsible for the information and content, including information
          about race, ethnic origin, sexual orientation, political opinions,
          religious or philosophical beliefs, membership in a trade union, or
          any information relating to health, they communicate.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          Protection of Minors
        </h2>
        <p>
          To protect minors, the Visitor must be at least 18 years old and have
          full legal capacity.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">Security</h2>
        <p>
          To ensure the protection of your personal information, access to your
          account is protected by a password that you must keep confidential. In
          case of unauthorised use of your account or any breach of
          confidentiality and security of your means of identification, you must
          inform the Company immediately.
        </p>
        <p>
          The Company takes all reasonable measures to protect information
          against loss, misuse and unauthorised access, disclosure, alteration
          and destruction. Various physical and electronic procedures have been
          put in place to ensure the protection of your personal data.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          Modification of the Privacy Policy
        </h2>
        <p>
          The Company reserves the right to modify, supplement or replace the
          provisions of this Privacy Policy. In the event of a significant
          modification, the Company undertakes to display a notification of the
          modification of the Privacy Policy on the Website.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">Contact</h2>

        <p>
          For any questions, observations, suggestions, or complaints, please
          contact <strong>OffQuest</strong> by email -{' '}
          <Link
            href="mailto:privacy@offquest.io?subject=About OffQuest's Privacy Policy&body=Hello,%0D%0A%0D%0AI have a question about OffQuest's Privacy Policy..."
            className="underline"
          >
            privacy@offquest.io
          </Link>{' '}
          - or by post at the following address: 10 rue de Penthièvre, 75008
          Paris (France).
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default Page;
