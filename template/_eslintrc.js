module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['jest'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
  env: {
    'jest/globals': true,
  },
};
