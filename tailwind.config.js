const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
          extraDark: '#410FE7'
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        white:{
          white: '#fff',
        },
      
        height : {
          'height' : '100vh',
        },
  
        },
        backgroundImage : {
          'bgImage' : "url('../images/forest.jpg')",
          'LeoImage' : "url('../images/Leo.jpg')",
          'BinaImage' : "url('../images/Bina.jpg')",
          'SherImage' : "url('../images/Sher.jpg')",
          'safari' : "url('../images/safari1.jpg')",
          'Treehouse': "url('../images/Treehouse1.jpg')",
          'Celebration' : "url('../images/Celebration.jpg')",
          'Ceo' : "url('../images/Ceo.jpg')",
          'sunset' : "url('../images/sunset.jpg')",
          'coffee' : "url('../images/coffee.jpg')",
          'light' : "url('../images/lightw.jpg')",
          'lion' : "url('../images/Lionw.jpg')",
          'glass' : "url('../images/glassw.jpg')"

        },
        fontFamily : {
          'Raleway' : ['Raleway'],
          'Poiret' :['Poiret One'],
          'PlayFair' : ['Playfair Display'],
          'PlayFair-Bold' : ['Playfair Display']
        }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active', 'group-hover'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
