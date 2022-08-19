/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },

      colors: {
        "gray-100": "#e1e1e6",
        "gray-600": "#202024",
        "gray-800": "#121214",
      },
    },
  },
  plugins: [],
};
