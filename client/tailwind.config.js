/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      cinzel: ["Cinzel", "serif"],
      tangerine: ["Tangerine", "cursive"],
      outfit: ['Outfit', 'sans-serif'],
      prata: ['Prata', 'serif'],
    },},
  },
  plugins: [],
}