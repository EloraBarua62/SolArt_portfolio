/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   saira: ["Saira SemiCondensed"],
      // },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1000px",
        lg: "1080px",
        xl: "1300px",
      },
    },
  },
  plugins: [],
}
