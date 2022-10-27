/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7FFFE",
        secondary: "#414263",
        rear: "#FFC800",
      },
    },
  },
  plugins: [],
}
