/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Mochiy Pop One"],
    },
    colors: {
      'green': '#55e6a5',
      'white': '#ffffff',
      'black': '#000000'
    },
  },
  plugins: [],
}
