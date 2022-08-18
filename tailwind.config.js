/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0FA958",
        secondary: "#F9FFE7"
      }
    },
    fontFamily: {
      lato: ['Lato'],
    }
  },
  plugins: [],
})
