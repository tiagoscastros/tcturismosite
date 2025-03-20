/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#093e72',
          light: '#0a4a8a',
          dark: '#072e55',
        },
        secondary: {
          DEFAULT: '#f88625',
          light: '#f9a052',
          dark: '#e67615',
        },
      },
    },
  },
  plugins: [],
};