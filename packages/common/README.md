# @agaroot/eslint-config-common

[![npm version](https://badge.fury.io/js/@agaroot%2Feslint-config-common.svg)](https://www.npmjs.com/package/@agaroot/eslint-config-common)
[![npm download](https://img.shields.io/npm/dm/@agaroot/eslint-config-common.svg)](https://www.npmjs.com/package/@agaroot/eslint-config-common)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/agaroot-technologies/eslint-config/blob/main/packages/common/LICENSE)
[![Github](https://img.shields.io/github/followers/agaroot-technologies?label=Follow&logo=github&style=social)](https://github.com/orgs/agaroot-technologies/followers)

This is a ESLint config commonly inherited by AGAROOT products.

Use this setting to ensure consistent code writing and maintain high code quality.

## 🚀 Installation

```shell
$ npm install -D @agaroot/eslint-config-common

# Needs install peer dependencies
$ npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-unused-imports
```

## 👏 Getting Started

Create a `.eslintrc.js` file in the root directory of your project, and add `@agaroot/eslint-config-common` to the `extends` array.

```js
module.exports = {
  root: true,
  extends: [
    '@agaroot/eslint-config-common',
  ],
};
```

If you are using TypeScript, you need to add the parserOptions.

```js
module.exports = {
  root: true,
  extends: [
    '@agaroot/eslint-config-common',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/agaroot-technologies/eslint-config/issues) if you want to contribute.

## 📝 License

Copyright © 2023 [AGAROOT TECHNOLOGIES](https://tech.agaroot.co.jp/).

This project is [```MIT```](https://github.com/agaroot-technologies/eslint-config/blob/main/packages/common/LICENSE) licensed.
