/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      // Add custom theme configurations here
      fontFamily: {
        "source-code-pro": ["Source Code Pro", "monospace"],
      },
      screens: {
        smallMobile: "320px",

        mobile: "550px",

        tablet: "840px",

        desktop: "1076px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
