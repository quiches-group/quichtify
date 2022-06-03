module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#40B883',
        secondary: '#35485F',
        text: '#2C3F50',
      },
      screens: {
        // Generic
        // TODO: refactor it with function and create declination with landscape
        'mobile-xs-only': {
          raw: '(max-width: 19.938em)', // 0 to 319px
        },
        mobile: '20em', // 320px
        'mobile-only': {
          raw: '(min-width: 20em) and (max-width: 22.438em)', // 320px to 359px
        },
        'mobile-xl': '22.5em', // 360px
        'mobile-xl-only': {
          raw: '(min-width: 22.5em) and (max-width: 37.438em)', // 360px to 599px
        },
        'tablet-sm': '37.5em', // 600px
        'tablet-sm-only': {
          raw: '(min-width: 37.5em) and (max-width: 59.938em)', // 600px to 959px
        },
        'under-tablet-only': {
          // < 960px
          raw: '(max-width: 60em)',
        },
        tablet: '60em', // 960px
        'tablet-only': {
          raw: '(min-width: 60em) and (max-width: 74.938em)', // 960px to 1199px
        },
        'laptop-sm': '75em', // 1200px
        'laptop-sm-only': {
          raw: '(min-width: 75em) and (max-width: 89.938em)', // 1200px to 1439px
        },
        laptop: '90em', // 1440px
        'laptop-only': {
          raw: '(min-width: 90em) and (max-width: 119.938em)', // 1440px to 1919px
        },
        desktop: '120em', // 1920px
        'desktop-only': {
          raw: '(min-width: 120em) and (max-width: 159.938em)', // 1920px to 2559px
        },
        'desktop-xl': '160em', // 2560px
        'desktop-xl-only': {
          raw: '(min-width: 160em)', // 2560px to ∞
        },
      },
      spacing: {
        3.75: '0.938rem',
      },
      colors: {
        primary: '#40B883',
        secondary: '#35485F',
        text: '#2C3F50',
      },
    },
  },
  plugins: [require('./tw-plugins/animationsPlugin.js'), require('./tw-plugins/formPlugin.js'), require('./tw-plugins/pseudoElPlugin'), require('./tw-plugins/textPlugin')],
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
