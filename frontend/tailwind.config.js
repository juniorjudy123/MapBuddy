/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.5': '0.5px',
      },
      colors: {
        tomato: '#ff6347',
        gold: '#FFD700'
      },
    },
  },
  plugins: [],
}