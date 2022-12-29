/** @type {import('tailwindcss').Config} */
const defualtTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-grey': '#3F3735'
      },
    },
    screens: {
      'xs': '390px',
      ...defualtTheme.screens,
    }
  },
  plugins: [],
};
