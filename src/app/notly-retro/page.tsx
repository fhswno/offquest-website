const Page = () => {
  return (
    <main
      className="flex flex-col items-center justify-start h-screen gap-10 p-10 text-white"
      style={{
        backgroundImage: `url('/notly-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl">Hello, World!!! 🇮🇱</h1>
    </main>
  );
};

export default Page;
