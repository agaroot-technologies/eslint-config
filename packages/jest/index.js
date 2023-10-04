/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@agaroot/eslint-config-common',
  ],
  overrides: [
    {
      files: [
        '*.test.{js,jsx,ts,tsx}',
        '**/__tests__/**',
      ],
      env: {
        jest: true,
      },
      plugins: [
        'jest',
      ],
      extends: [
        'plugin:jest/recommended',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
      },
    },
  ],
};
