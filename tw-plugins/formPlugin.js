const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    [`
      input,
      [type="text"],
      [type="email"],
      [type="url"],
      [type="password"],
      [type="number"],
      [type="date"],
      [type="datetime-local"],
      [type="month"],
      [type="search"],
      [type="tel"],
      [type="time"],
      [type="week"],
      [multiple],
      textarea,
      select
    `]: {
      'margin-top': '10px',
      'padding-top': '7px',
      'padding-right': '15px',
      'padding-bottom': '7px',
      'padding-left': '15px',
      width: '100%',
      'font-weight': theme('fontWeight.extralight'),
      'border-radius': theme('borderRadius.md'),
      '&:focus': {
        'border-color': theme('colors.primary'),
        '--tw-ring-color': theme('colors.primary')
      }
    },
  });
});
