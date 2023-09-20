/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
        helveticaLight: ["helvetica-light"],
        helveticaBold: ["helvetica-bold"],
        helveticaRegular: ["helvetica-regular"],
        helveticaMedium: ["helvetica-medium"],
      },
      container: {
        center: true,
        padding: "12px",
        screens: {
          xl: "1164px",
        },
      },
    },
  },
  plugins: [],
};
