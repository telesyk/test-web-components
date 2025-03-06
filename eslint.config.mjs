import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
    rules: {
      camelcase: 0,
    },
  },
]
