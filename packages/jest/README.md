# @agaroot/eslint-config-jest

[![npm version](https://badge.fury.io/js/@agaroot%2Feslint-config-jest.svg)](https://www.npmjs.com/package/@agaroot/eslint-config-jest)
[![npm download](https://img.shields.io/npm/dm/@agaroot/eslint-config-jest.svg)](https://www.npmjs.com/package/@agaroot/eslint-config-jest)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/agaroot-technologies/eslint-config/blob/main/packages/jest/LICENSE)
[![Github](https://img.shields.io/github/followers/agaroot-technologies?label=Follow&logo=github&style=social)](https://github.com/orgs/agaroot-technologies/followers)

This is a ESLint config commonly inherited by AGAROOT products.

Use this setting to ensure consistent code writing and maintain high code quality.

## 🚀 Installation

```shell
$ npm install -D @agaroot/eslint-config-jest

# Needs install peer dependencies
$ npm install -D eslint-plugin-jest
```

## 👏 Getting Started

Create a `.eslintrc.js` file in the root directory of your project, and add `@agaroot/eslint-config-jest` to the `extends` array.

The following is the recommended configuration when using TypeScript.

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@agaroot/eslint-config-common',
    '@agaroot/eslint-config-jest',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/agaroot-technologies/eslint-config/issues) if you want to contribute.

## 📝 License

Copyright © 2023 [AGAROOT TECHNOLOGIES](https://tech.agaroot.co.jp/).

This project is [```MIT```](https://github.com/agaroot-technologies/eslint-config/blob/main/packages/jest/LICENSE) licensed.
