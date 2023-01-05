module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', { 'code': 130 }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
