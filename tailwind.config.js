/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Russo One", "sans-serif"],
      },
      boxShadow: {
        retro: "3px 3px 0px 0px rgba(0,0,0)",
      },
    },
  },
  plugins: [],
};
