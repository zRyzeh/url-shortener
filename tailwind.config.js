const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': 'Roboto, Oxygen, Ubuntu, Cantarell, sans-serif, Inter, Avenir, Helvetica, Arial'
      },
      colors: {
        'primary': '#EBECF0',
        'secondary': '#fff',
        'tertiary': '#596A95',
        'primary-dark': '#13151A',
        'secondary-dark': '#1D1F26',
        'tertiary-dark': '#2B3040'
      },
      animation: {
        'neon-stroke': 'neon-stroke 15s linear infinite, fade-in-to-max 3s ease 1s forwards',
        'neon-stroke-reverse': 'neon-stroke-reverse 15s linear infinite, fade-in-to-max 3s ease 1s forwards',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fade-in 300ms ease',
        'grow': 'grow 1s ease-in-out',
        'background-spinner': 'grow 1s ease-in-out, spin 20s linear infinite 1s',
        'title': 'fade-in-to-max 3s ease 1s forwards',
        'url-form': 'fade-in-to-max 3s ease 1.5s forwards'
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
        },
        'fade-in': {
          from: {
            opacity: '0'
          }
        },
        'fade-in-to-max': {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        'grow': {
          from: {
            transform: 'scale(0)'
          },
          to: {
            transform: 'scale(1)'
          }
        }
      },
      dropShadow: {
        'neon': '0 0 4px #596A95',
      },
      transitionProperty: {
        'top': 'top'
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