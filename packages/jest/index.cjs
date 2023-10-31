/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: [
        '*.test.{js,jsx,ts,tsx}',
        '**/__tests__/**/*.{js,jsx,ts,tsx}',
      ],
      env: {
        jest: true,
      },
      extends: [
        'plugin:jest/recommended',
      ],
    },
    {
      files: [
        '*.test.{ts,tsx}',
        '**/__tests__/**/*.{ts,tsx}',
      ],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
};
