module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
