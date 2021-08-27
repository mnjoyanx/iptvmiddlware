const colors = require("tailwindcss/colors");
module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    background: {
      blue: {
        primary: "#3f6ad8",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
    },
    colors: {
      //  transparent: 'transparent',
      // current: 'currentColor',
      black: colors.black,
      white: colors.white,
      // gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      green: colors.green,
      yellow: colors.amber,
      blue: {
        primary: "#3f6ad8",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
        light: "#DBEAFE",
        mid: "#93C5FD",
      },
      gray: {
        primary: "#495057",
        light: "#F3F4F6",
        mid: "#E5E7EB",
        secondary: "#9CA3AF",
        lightgray: "#D1D5DB",
        lightest: "#F9FAFB",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
