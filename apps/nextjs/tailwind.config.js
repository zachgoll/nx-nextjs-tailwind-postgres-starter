const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  presets: [require('../../tailwind.config.js')],
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
