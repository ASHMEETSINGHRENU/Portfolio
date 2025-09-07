/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        sourcesans: ["Source Sans Pro", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};