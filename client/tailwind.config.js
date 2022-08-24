/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'woodsmoke': {
          '50': '#f6f6f7',
          '100': '#e1e3e6',
          '200': '#c2c6cd',
          '300': '#9ba1ad',
          '400': '#767d8b',
          '500': '#5c6270',
          '600': '#484c59',
          '700': '#3c3f49',
          '800': '#33353c',
          '900': '#18191c',
          '925': '#060607',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },

      
      }
    },
  },
  plugins: [],
}
