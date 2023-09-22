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
      animation: {
        spin: "spin 2s ease-in-out infinite",
      },
      // animation: {
      //   ping: "ping 2s ease-in-out infinite",
      // },
      keyframes: {
        spin: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
    },
  },
  plugins: [],
};
