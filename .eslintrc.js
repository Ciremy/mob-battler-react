module.exports = {
  ignorePatterns: ['dist', '.next', 'node_modules'],
  // extends: ['@onrewind/eslint-config/frontend'],
  globals: {
    FB: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
};
