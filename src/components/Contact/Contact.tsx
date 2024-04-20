// COMPONENTS
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-10 text-white bg-gray-900 py-28">
      <div className="flex flex-col items-center justify-center w-full gap-12 tablet:w-2/3 laptop:w-1/2">
        <h2 className="text-4xl leading-tight text-center tablet:text-5xl laptop:text-6xl">
          {' '}
          <span className="z-10 underline-effect">Talk to us.</span>
        </h2>
        <p className="text-sm leading-loose text-center tablet:text-base laptop:text-lg">
          If you want to contribute to our open-source projects, discuss a
          partnership with one of our ventures, or simply say hi, we&apos;re
          here for you. Just drop your info and we&apos;ll get back to you.
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
