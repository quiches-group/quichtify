const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme }) => {
  addUtilities({
    '.text-container': {
      'margin-right': 'auto',
      'margin-left': 'auto',
      'padding-right': '0.9375rem', // 30px
      'padding-left': '0.9375rem', // 30px
      'width': '100%',
      'max-width': '360px',
      [`@media (min-width: ${theme('screens.tablet')})`]: {
        'max-width': '600px',
      },
      [`@media (min-width: ${theme('screens.tablet')})`]: {
        'max-width': '600px',
      },
      [`@media (min-width: ${theme('screens.desktop')})`]: {
        'max-width': '760px',
      },
      [`@media (min-width: ${theme('screens.desktop-xl')})`]: {
        'max-width': '960px',
      },
    },
    '.text-h1': {
      'font-weight': theme('fontWeight.bold'),
      'font-size': theme('fontSize.3xl'),
      'line-height': theme('lineHeight.9'),
      'text-align': 'center',
      'letter-spacing': theme('letterSpacing.wider'),
      [`@media (min-width: ${theme('screens.tablet')})`]: {
        'font-size': theme('fontSize.6xl'),
        'line-height': theme('lineHeight.17'),
      }
    },
    '.text-h1--hp': {
      'font-weight': theme('fontWeight.black'),
      'font-size': theme('fontSize.3xl'),
      'line-height': theme('lineHeight.9'),
      'text-align': 'center',
      'letter-spacing': theme('letterSpacing.wider'),
      [`@media (orientation: landscape) and (max-height: 360px) and (max-width: 640px)`]: { // Fix Nexus 5 in landscape
        'font-size': theme('fontSize.2xl'),
        'line-height': theme('lineHeight.8'),
      },
      [`@media (min-width: ${theme('screens.laptop')})`]: {
        'font-size': theme('fontSize.4,5xl'),
        'line-height': theme('lineHeight.13'),
        'text-shadow': '1px 0 0 currentColor',
      },
      [`@media (min-width: ${theme('screens.desktop')})`]: {
        'font-size': theme('fontSize.5xl'),
        'line-height': theme('lineHeight.17'),
      },
      [`@media (min-width: ${theme('screens.desktop-xl')})`]: {
        'font-size': theme('fontSize.5,2xl'),
      }
    },
    '.text-h1--hp-wrap-fix': {
      'display': 'block',
      [`@media (min-width: 47.75em)`]: {
        'display': 'inline',
      }
    },
    '.text-h2': {
      'font-weight': theme('fontWeight.bold'),
      'font-size': theme('fontSize.2xl'),
      'line-height': theme('lineHeight.9'),
      'letter-spacing': theme('letterSpacing.wider'),
      [`@media (min-width: ${theme('screens.tablet')})`]: {
        'font-size': theme('fontSize.4,5xl'),
        'line-height': theme('lineHeight.15,5'),
      }
    },
    '.text-h3': {
      'font-size': theme('fontSize.xl'),
      'line-height': theme('lineHeight.7'),
      'letter-spacing': theme('letterSpacing.wider'),
      [`@media (min-width: ${theme('screens.tablet')})`]: {
        'font-size': theme('fontSize.2,5xl'),
        'line-height': theme('lineHeight.13'),
      }
    },
    '.text-h4': {
      'font-weight': theme('fontWeight.bold'),
      'font-size': theme('fontSize.lg'),
      'line-height': theme('lineHeight.9'),
      'letter-spacing': theme('letterSpacing.wider'),
      [`@media (min-width: ${theme('screens.tablet')})`]: {
        'font-weight': theme('fontWeight.normal'),
        'font-size': theme('fontSize.xl'),
        'line-height': theme('lineHeight.10'),
      }
    },
    '.text-small': {
      'font-size': theme('fontSize.sm'),
      [`@media (min-width: ${theme('screens.desktop-xl')})`]: {
        'font-size': theme('fontSize.base'),
      }
    },
    '.text-quote': {
      'font-weight': theme('fontWeight.extralight'),
      'font-size': theme('fontSize.lg'),
      'line-height': theme('lineHeight.8'),
      [`@media (min-width: ${theme('screens.tablet')})`]: {
        'font-size': theme('fontSize.2,7xl'),
        'line-height': theme('lineHeight.10'),
      }
    },
    '.text-high': {
      'font-size': theme('fontSize.4,5xl'),
      'line-height': theme('lineHeight.13'),
      [`@media (min-width: ${theme('screens.tablet')})`]: {
        'line-height': theme('lineHeight.15'),
      }
    },
    '.text-tight': {
      'font-size': theme('fontSize.sm'),
      'line-height': theme('lineHeight.4'),
      [`@media (min-width: ${theme('screens.tablet')})`]: {
        'font-size': theme('fontSize.base'),
        'line-height': theme('lineHeight.6'),
      }
    },
  })
})
