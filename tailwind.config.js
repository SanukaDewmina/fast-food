/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        underline: '#E12C43',     // For underline price and notification
        offer: '#E12C43',         // For offers and other stuff
        subtitle: '#979797',      // For subtitles
        mainblack: '#111111',     // Main black color
        secondblack: '#222222',   // Second main black color
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],  // Jost font family
      }
    },
  },
  plugins: [],
}
