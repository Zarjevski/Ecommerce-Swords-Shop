/** @type {import('tailwindcss').Config} */
const defualtTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': '390px',
      ...defualtTheme.screens,
    }
  },
  plugins: [],
};
