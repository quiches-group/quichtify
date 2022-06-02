module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        16: '16px',
      },
      colors: {
        primary: '#40B883',
        secondary: '#35485F',
        text: '#2C3F50',
      },
    },
  },
  plugins: [require('./tw-plugins/animationsPlugin.js')],
  safelist: [
    {
      pattern: /w-(1|2|3|4|5|6|7|8|9|10|11)\/12/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /(justify|items)-(start|end|center|between|around|evenly|baseline|stretch)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /w-full/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /([wh])-0\.5/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
};
