'use client';

// REACT
import { useState } from 'react';

// TOAST
import toast from 'react-hot-toast';

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

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make sure Email Format is valid
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formDate.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Make sure all fields are filled (trim) - give an error message with the missing field
    const missingFields = Object.entries(formDate).filter(
      ([key, value]) => !value.trim(),
    );
    if (missingFields.length) {
      toast.error(
        `Please fill in the following fields: ${missingFields
          .map(([key]) => key)
          .join(', ')}`,
      );
      return;
    }

    // Trim all fields then send to the Contact API endpoint
    const promise = new Promise((resolve, reject) => {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          Object.fromEntries(
            Object.entries(formDate).map(([key, value]) => [key, value.trim()]),
          ),
        ),
      })
        .then((res) => {
          if (res.ok) {
            resolve(res);
          } else {
            reject(res);
          }
          // Clear the form
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        })
        .catch((err) => {
          reject(err);
        });
    });

    // Display toast message based on the response
    toast.promise(promise, {
      loading: 'Sending...',
      success: 'Message Sent!',
      error: 'An error occurred. Please try again later.',
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
