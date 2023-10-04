/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@agaroot/eslint-config-jest',
  ],
  overrides: [
    {
      files: [
        '*.test.{js,jsx,ts,tsx}',
        '**/__tests__/**',
      ],
      extends: [
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
    },
  ],
};
