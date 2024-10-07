/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      boxShadow : {
        "cars" : "0px 0px 20px rgba(0,0,0,0.2)",
        "cards" : "0px 0px 3px rgba(0,0,0,0.3)"
      },
      height : {
        "car" : "550px",
      }
    },
  },
  plugins: [],
}