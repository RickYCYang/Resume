const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      green: {
        100: "#50E6D8",
        200: "#46DCCE",
        300: "#3CD2C4",
        400: "#32C8BA",
        500: "#28BEB0",
        600: "#1EB4A6",
        700: "#14AA9C",
        800: "#0AA092",
        900: "#009688",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blue,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      Indigo: colors.Indigo,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
