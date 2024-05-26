/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
       'poppins' : [ "Poppins"],
       'roboto' : ["Roboto"],
       'roboto-padauk' : ["Roboto","Padauk"],
       'padauk' : ["Padauk"],
       'noto-mm' : ["Noto Sans Myanmar"],
      },
    },
  },
  plugins: [],
}

