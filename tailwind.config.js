/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,tx,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'san-serif'],
        inter: ['Inter', 'san-serif'],
      },
    },
  },
  plugins: [],
};
