// COMPONENTS
import NotlyNavbar from '@/components/Notly/NotlyNavbar';

const Page = () => {
  return (
    <main className="from-[#B98662] to-[#8B4513] bg-gradient-to-t flex flex-col items-center justify-start h-screen text-white p-10">
      <NotlyNavbar isPrivacy={true} />
      <h1>Privacy</h1>
    </main>
  );
};

export default Page;
