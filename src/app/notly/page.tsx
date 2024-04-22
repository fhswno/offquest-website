// NEXT
import Head from 'next/head';

// COMPONENTS
import NotlyNavbar from '@/components/Notly/NotlyNavbar';
import NotlyContent from '@/components/Notly/NotlyContent';

const Page = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/notly-background.png" as="image" />
      </Head>
      <main
        className="flex flex-col items-center justify-start h-screen gap-10 p-4 text-white tablet:p-10"
        style={{
          backgroundImage: `url('/notly-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <NotlyNavbar />
        <NotlyContent />
      </main>
    </>
  );
};

export default Page;
