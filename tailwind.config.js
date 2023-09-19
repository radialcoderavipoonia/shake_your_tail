/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto:["'Roboto Condensed', sans-serif"],
        helveticaLight: ["helvetica-light"],
        helveticaBold: ["helvetica-bold"],
        helveticaRegular: ["helvetica-regular"],
        helveticaMedium: ["helvetica-medium"],
      },
    },
  },
  plugins: [],
};
