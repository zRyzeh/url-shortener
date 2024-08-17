/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#13151A',
        secondary: '#1D1F26'
      },
      boxShadow: {
        'white': '0 0px 1px #fff',
      },
      animation: {
        button: 'button .5s ease-out forwards'
      },
      keyframes: {
        button: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      }
    },
    plugins: []
  }
}