module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    'jsx-a11y/rule-name': 0,
    'prettier/prettier': 'error',
    indent: [2, 2, { SwitchCase: 1 }],
    'no-console': 0,
    'no-alert': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
