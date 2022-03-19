const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // gray: colors.blueGray,
      // teal: colors.teal,
      // orange: colors.orange,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        ...colors.gray,
        DEFAULT: '#A0AEC0',
      },
      yellow: {
        ...colors.yellow,
        DEFAULT: '#FFC107',
      },
      red: {
        ...colors.red,
        DEFAULT: '#D44936',
      },
      orange: {
        ...colors.orange,
        DEFAULT: '#F6993F',
      },
      green: {
        ...colors.green,
        DEFAULT: '#739E73',
      },
      blue: {
        ...colors.blue,
        DEFAULT: '#007BFF',
      },
      sky: {
        ...colors.sky,
        DEFAULT: '#87CEEB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
