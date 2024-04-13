// COMPONENTS
import Wordmark from '../Branding/Wordmark';
import Social from '../Branding/Social';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full p-4">
      <div className="flex flex-col items-start justify-between gap-4 px-6 py-4 duration-300 ease-in-out transform bg-white bg-opacity-50 border border-blue-300 cursor-pointer rounded-xl backdrop-blur-2xl group dark:bg-gray-600 dark:bg-opacity-50 dark:border-blue-600">
        <div className="flex flex-row items-center justify-between w-full">
          <Wordmark />
          <Social />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
