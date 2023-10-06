/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: [
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'func-style': ['error', 'expression'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'ignoredNodes': [
        'TemplateLiteral *',
      ],
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxBOF': 0,
      'maxEOF': 0,
    }],
    'no-unused-vars': 'off',
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'yoda': 'off',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/newline-after-import': ['error', {
      'count': 1,
    }],
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', ['index', 'parent', 'sibling'], 'object', 'type'],
      'newlines-between': 'always',
      'pathGroupsExcludedImportTypes': ['builtin'],
      'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
    }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' },
    ],
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:import/typescript',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
      rules: {
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/consistent-type-imports': ['error', {
          'prefer': 'type-imports',
        }],
        '@typescript-eslint/indent': ['error', 2, {
          'SwitchCase': 1,
          'ignoredNodes': ['TemplateLiteral *', 'TSTypeParameterInstantiation'],
        }],
        '@typescript-eslint/member-delimiter-style': ['error', {
          'multiline': {
            'delimiter': 'semi',
            'requireLast': true,
          },
          'singleline': {
            'delimiter': 'semi',
            'requireLast': false,
          },
        }],
        '@typescript-eslint/no-misused-promises': ['error', {
          'checksVoidReturn': {
            'attributes': false,
          },
        }],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-before-function-paren': ['error', {
          'anonymous': 'always',
          'named': 'never',
          'asyncArrow': 'always',
        }],
        '@typescript-eslint/space-infix-ops': ['error', { 'int32Hint': false }],
      },
    },
    {
      files: [
        '*.test.{js,jsx,ts,tsx}',
        '**/__tests__/**',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
      },
    },
  ],
};
