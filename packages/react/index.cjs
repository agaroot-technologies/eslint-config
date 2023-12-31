/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/function-component-definition': ['error', {
      'namedComponents': 'arrow-function',
      'unnamedComponents': 'arrow-function',
    }],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-curly-spacing': ['error', {
      'when': 'never',
      'attributes': true,
      'children': true,
    }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': ['error', {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on',
      'checkLocalVariables': false,
      'checkInlineFunction': false,
    }],
    'react/jsx-newline': ['error', {
      'prevent': true,
    }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-props': ['error', {
      'callbacksLast': false,
      'shorthandFirst': false,
      'shorthandLast': true,
      'multiline': 'ignore',
      'ignoreCase': true,
      'noSortAlphabetically': true,
      'reservedFirst': true,
      'locale': 'auto',
    }],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    }],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line',
    }],
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
  },
};
