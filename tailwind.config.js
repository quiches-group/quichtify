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
};
