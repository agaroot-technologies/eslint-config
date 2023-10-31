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
  ],
};
