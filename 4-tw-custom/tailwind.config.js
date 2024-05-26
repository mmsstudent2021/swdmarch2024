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
       "mm-ny" : ["mm-nayone"]
      },
      
      colors : {
        "brown-2" : "#A91D3A"
      }


    },
  },
  plugins: [],
}



