/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      // Add custom theme configurations here
      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'monospace'],
      },
      screens: {
        mobile: '320px',
        tablet: '640px',
        laptop: '1076px',
        desktop: '1480px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
