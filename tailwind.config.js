/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#EBECF0',
        'secondary': '#fff',
        'tertiary': '#596A95',
        'primary-dark': '#13151A',
        'secondary-dark': '#1D1F26',
        'tertiary-dark': '#2B3040'
      },
      animation: {
        'neon-stroke': 'neon-stroke 15s linear infinite',
        'neon-stroke-reverse': 'neon-stroke-reverse 15s linear infinite',
        'spin-slow': 'spin 20s linear infinite'
      },
      keyframes: {
        'neon-stroke': {
          to: {
            strokeDashoffset: '0'
          }
        },
        'neon-stroke-reverse': {
          from: {
            strokeDashoffset: '0'
          }
        }
      },
      dropShadow: {
        'neon': '0 0 4px #596A95',
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.stroke-dasharray-1000': {
          'stroke-dasharray': '1000',
        },
        '.stroke-dashoffset-2000': {
          'stroke-dashoffset': '2000',
        },
      });
    },
  ]
}