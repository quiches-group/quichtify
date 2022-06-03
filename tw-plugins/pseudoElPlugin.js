const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, variants }) => {
  addUtilities({
    '.content': {
      content: '\'\''
    },
    '.content-dash': {
      content: '\'-\''
    },
    '.content-asterisk': {
      content: '\'*\''
    },
    '.content-comma': {
      content: '\',\''
    },
    '.content-none': {
      content: 'none'
    }
  }, variants('mq', ['responsive']))
})
