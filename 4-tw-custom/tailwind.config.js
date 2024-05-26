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
       'tharlon' : ["TharLon"],
       'thu' : ["MM-Thu"],
       'mm-angoun' : ["MyanmarAngoun"],
      },
      colors : {
        black: {
          100: "#ccd3e4",
          200: "#99a7c9",
          300: "#667baf",
          400: "#334f94",
          500: "#002379",
          600: "#001c61",
          700: "#001549",
          800: "#000e30",
          900: "#000718"
      },
     "orange-second" : "#FF5F00",
      },
    },
  },
  plugins: [],
}



