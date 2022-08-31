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
      'bismark': {
        '50': '#f5f7fa',
        '100': '#ebeef3',
        '200': '#d2dae5',
        '300': '#aab9cf',
        '400': '#7c94b4',
        '500': '#5c779b',
        '600': '#4b6287',
        '700': '#3b4c69',
        '800': '#344258',
        '900': '#2f394b',
      },
      'ebony-clay': {
        '50': '#f5f7fa',
        '100': '#ebeef3',
        '200': '#d2dae5',
        '300': '#abbbce',
        '400': '#7d96b3',
        '500': '#5d7a9a',
        '600': '#496180',
        '700': '#3c4e68',
        '800': '#344358',
        '900': '#293341',
    },
    
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },

      
      }
    },
  },
  plugins: [],
}
