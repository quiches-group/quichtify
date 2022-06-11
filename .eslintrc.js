module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/require-default-prop': 'off',
  },
};
