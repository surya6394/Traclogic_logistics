/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cyan': colors.cyan,
        'teal': colors.teal,
        'white': colors.white,
        'black': colors.black,
        'teal1': "#1CB19C",
        'black1': "#1C2023",
        'pink1': "#ED1639"
      },

      backgroundImage: {
        "banner-img": "url('./images/bannerImg-01.jpeg')", 
        "journal-img": "url('./images/journal.png')"
      }
    },
  },
  plugins: [],
}

