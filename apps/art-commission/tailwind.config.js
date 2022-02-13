const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      '25v': '25vw',
      '50v': '50vw',
    },
    maxHeight: {
      '75': '75vh',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
