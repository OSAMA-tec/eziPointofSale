/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants:{
    backgroundColor :['active' , 'responsive', 'hover', 'focus']
  },
  plugins: [],
}