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
          'bgImage' : "url('./public/Images/forest.jpg')",
          'LeoImage' : "url('../Images/Leo.jpg')",
          'BinaImage' : "url('../Images/Bina.jpg')",
          'SherImage' : "url('../Images/Sher.jpg')",
          'safari' : "url('../Images/safari1.jpg')",
          'Treehouse': "url('../Images/Treehouse1.jpg')",
          'Celebration' : "url('../Images/Celebration.jpg')",
          'Ceo' : "url('../Images/Ceo.jpg')",
          'sunset' : "url('../Images/sunset.jpg')",
          'coffee' : "url('../Images/coffee.jpg')",
          'light' : "url('../Images/lightw.jpg')",
          'lion' : "url('../Images/Lionw.jpg')",
          'glass' : "url('../Images/glassw.jpg')"

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
