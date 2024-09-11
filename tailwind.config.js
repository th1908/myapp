/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        angsana: ["Angsana New"],
        athiti: ["Athiti"],
        Chakra: ["Chakra"],
      }
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),],
}
