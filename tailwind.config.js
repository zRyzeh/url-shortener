/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#EBECF0',
        'secondary': '#fff',
        'primary-dark': '#13151A',
        'secondary-dark': '#1D1F26',
      }
    },
    plugins: []
  }
}