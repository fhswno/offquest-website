// COMPONENTS
import Navbar from '../Navigation/Navbar';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/main-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-screen text-white"
    >
      <Navbar />

      <h1>OffQuest</h1>
    </section>
  );
};

export default Hero;
