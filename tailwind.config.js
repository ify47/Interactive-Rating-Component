/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "450px" },
    },
    extend: {
      fontFamily: {
        Overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
