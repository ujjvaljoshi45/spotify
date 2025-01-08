/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
    "./components/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the components folder]
  ],
  theme: {
    colors: {
      main: "#1ED760",
      dark: "#121212",
      dark1: "#282828",
      dark2: "#777777",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        rmono: ["AvenirNextLTPro-Regular", "sans-serif"],
        rmonoBold: ["AvenirNextLTPro-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
