// NEXT
import Image from 'next/image';

// COMPONENTS
import NotlyNavbar from '@/components/Notly/NotlyNavbar';
import Link from 'next/link';

const Page = () => {
  return (
    <main className="from-[#8e572f] to-[#8B4513] bg-gradient-to-t flex flex-col items-center justify-start h-full text-white p-10">
      <NotlyNavbar isPrivacy={true} />

      <div className="flex flex-row items-center gap-4 h-96">
        <Image
          src="/notly-icon.png"
          alt="Notly Icon"
          width={300}
          height={300}
          priority
          className="w-16 border border-[#B98662] shadow-2xl hover:animate-pulse rounded-2xl shadow-gray-500"
          blurDataURL="/notly-icon.png"
          placeholder="blur"
        />
        <h1 className="text-6xl">Privacy</h1>
      </div>
      <section className="flex flex-col w-full gap-8 pb-40 text-base tablet:text-lg tablet:w-11/12">
        <p>
          <strong>Effective Date</strong>: 23 April 2024
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">Introduction</h2>
        <p>
          Notly is committed to maintaining the privacy of its users. This
          Privacy Policy details our practices regarding the non-collection of
          information through the Notly app, ensuring our users understand our
          strict privacy standards.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          1. Information We Do Not Collect
        </h2>
        <h3 className="text-xl font-semibold tablet:text-2xl">
          a. Personal and Sensitive Information
        </h3>
        <p>
          We do not collect any personal or sensitive information. Notly is
          designed to function without the need for user registration, and all
          data input remains local on the user’s device.
        </p>
        <h3 className="text-xl font-semibold tablet:text-2xl">
          b. Usage and Device Information
        </h3>
        <p>
          We do not collect or monitor any usage data, device information, or
          diagnostic data. Notly operates independently without transmitting
          data externally.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          2. Third-Party Disclosure
        </h2>
        <p>
          There are no third-party affiliations or data sharing arrangements in
          place, as Notly does not collect, store, or process any user data.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          3. Data Security
        </h2>
        <p>
          Data security is managed by the user. We encourage users to implement
          appropriate security measures on their devices, as all data created or
          stored within Notly remains under the user&apos;s control. Notly is
          not responsible for the security of the device or any data breaches
          resulting from unauthorized access to the user&apos;s device.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          4. User Rights and Controls
        </h2>
        <p>
          As no data is collected by Notly, users maintain full control over
          their data, including the creation, modification, and deletion of any
          content within the app. There is no mechanism to export, access, or
          modify data externally.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          5. Data Retention
        </h2>
        <p>
          Notly does not store or retain any data; hence, there is no data
          retention policy applicable.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          6. Children’s Privacy
        </h2>
        <p>
          Notly does not knowingly engage in any data collection from children
          under the age of 13, complying with COPPA. As no data is collected,
          there is no risk of breaching this regulation.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          7. Compliance with Laws and Regulations
        </h2>
        <p>
          Notly complies with all applicable laws and regulations regarding data
          privacy and protection. Should any law enforcement or regulatory body
          request data, we would be unable to supply this data as none is
          collected.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          8. International Data Transfer
        </h2>
        <p>
          Notly does not transfer data internationally as it does not collect
          data from its users.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          9. Changes to This Privacy Policy
        </h2>
        <p>
          We reserve the right to modify this Privacy Policy at any time. All
          changes will be effective immediately upon posting and we will notify
          you via the app. Users are encouraged to periodically review this
          policy for any updates.
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          10. Contact Us
        </h2>
        <p>
          For any concerns, questions, or clarifications regarding our privacy
          practices, please contact us using the information below:
        </p>
        <p>
          <strong>OffQuest SAS</strong> registered in Paris, France with Company
          Number{' '}
          <Link
            href="https://annuaire-entreprises.data.gouv.fr/entreprise/952107431?redirected=1"
            target="_blank"
            className="underline"
          >
            952 107 431
          </Link>
        </p>
        <p>
          <strong>Email</strong>:{' '}
          <Link
            href="mailto:notly@offquest.io?subject=About Notly&body=Hello,%0D%0A%0D%0AI have a question about Notly..."
            className="underline"
          >
            notly@offquest.io
          </Link>
        </p>
        <p>
          <strong>Address</strong>: 10 rue de Penthièvre - 75008 Paris (France)
        </p>
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          11. Effective Legal Recourse
        </h2>
        <p>
          Users have the right to effective legal recourse in the event of any
          disputes arising from the terms of this policy. Dispute resolution
          mechanisms are detailed on OffQuest&apos;s{' '}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </main>
  );
};

export default Page;
