'use client';

// REACT
import { useState } from 'react';

const ContactForm = () => {
  // States
  const [formDate, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: '',
    email: '',
    message: '',
  });

  // Event Handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formDate,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex flex-col items-center justify-center w-2/5 gap-4">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-1/2 p-2 text-white placeholder-gray-200 bg-gray-500 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-1/2 p-2 text-white placeholder-gray-200 bg-gray-500 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <textarea
          placeholder="Your Message..."
          className="w-1/2 p-2 text-white placeholder-gray-200 bg-gray-500 rounded-lg focus:outline-none"
          rows={4}
          onChange={handleChange}
        />
        <button className="px-6 py-3 font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
