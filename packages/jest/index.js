/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: [
        '*.test.{js,jsx,ts,tsx}',
        '**/__tests__/**',
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
