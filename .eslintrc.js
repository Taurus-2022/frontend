// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: ['airbnb', 'prettier'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': ['error'],
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
