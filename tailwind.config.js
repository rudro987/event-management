/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors:{
        btnColor: "#F75B5F",
      }
    },
  },
  plugins: [require("daisyui")],
}

