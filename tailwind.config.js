/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto:["font-family: 'Roboto Condensed', sans-serif"],
        helveticaLight: ["helvetica-light"],
        helveticaBold: ["helvetica-bold"],
        helveticaRegular: ["helvetica-regular"],
        helveticaMedium: ["helvetica-medium"],
      },
    },
  },
  plugins: [],
};
