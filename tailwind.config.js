/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

