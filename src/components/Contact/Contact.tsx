// COMPONENTS
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-10 text-white bg-gray-900 py-28">
      <div className="flex flex-col items-center justify-center w-1/2 gap-12">
        <h2 className="text-6xl leading-tight text-center">
          {' '}
          <span className="z-10 underline-effect">Talk to us.</span>
        </h2>
        <p className="text-lg leading-loose text-center">
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
