const defaults = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    ...defaults,
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaults.fontFamily.sans],
        display: ['Montserrat', ...defaults.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
