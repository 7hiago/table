module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'react',
    'react-hooks',
  ],
  rules: {
    'no-useless-escape': 'off',
    'template-curly-spacing': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'camelcase': 'warn',
    'no-undef': 'warn',
    'no-useless-constructor': 'warn',
    'no-dupe-keys': 'warn',
    'no-param-reassign': 'warn',
    'no-lone-blocks': 'warn',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1, 2] }],
    'class-methods-use-this': 'warn',
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    'no-mixed-operators': ['error', {
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true,
    }],
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    }],
    'no-return-assign': ['error', 'except-parens'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    "react/destructuring-assignment": ['off', "always", { "ignoreClassFields": true }],
    "react/jsx-filename-extension": ['warn', { "extensions": [".js", ".jsx"] }],
  },
  globals: {
    history: true,
    location: true,
    WebSocket: true,
    FileReader: true,
    Image: true,
    window: 'readonly',
    document: 'readonly',
  },
};
