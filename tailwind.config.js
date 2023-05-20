/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,css}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Russo One", "sans-serif"],
      },
      boxShadow: {
        retro: "3px 3px 0px 0px rgba(0,0,0)",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1280px" },
        // => @media (max-width: 1280px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        "min-md": { min: "768px" },
        "min-xl": { min: "1280px" },
      },
    },
  },
  plugins: [],
};
