/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#8D230F',
        forest: '#1E434C',
        rust: '#9B4F0F',
        gold: '#C99E10',
      },
    },
  },
  plugins: [],
}