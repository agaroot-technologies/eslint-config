# @agaroot/eslint-config-jest-react

[![npm version](https://badge.fury.io/js/@agaroot%2Feslint-config-jest-react.svg)](https://www.npmjs.com/package/@agaroot/eslint-config-jest-react)
[![npm download](https://img.shields.io/npm/dm/@agaroot/eslint-config-jest-react.svg)](https://www.npmjs.com/package/@agaroot/eslint-config-jest-react)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/agaroot-technologies/eslint-config/blob/main/packages/jest-react/LICENSE)
[![Github](https://img.shields.io/github/followers/agaroot-technologies?label=Follow&logo=github&style=social)](https://github.com/orgs/agaroot-technologies/followers)

This is a ESLint config commonly inherited by AGAROOT products.

Use this setting to ensure consistent code writing and maintain high code quality.

## 🚀 Installation

```shell
# Install peer dependencies.
npm install -D eslint @agaroot/eslint-config-common @agaroot/eslint-config-definer @agaroot/eslint-config-javascript @agaroot/eslint-config-jest @agaroot/eslint-config-react

# Install this package.
npm install -D @agaroot/eslint-config-jest-react

# (Recommended) If you want to use the style guide, install the following package.
# However, this is not necessary if you are using Prettier.
npm install -D @agaroot/eslint-config-style

# (Optional) If you are using TypeScript, install the following package.
npm install -D @agaroot/eslint-config-typescript

# (Optional) If you are using Next.js, install the following package.
npm install -D @agaroot/eslint-config-next
```

## 👏 Getting Started

Create a `eslint.config.js` file in the root directory of your project.

```js
import { common } from '@agaroot/eslint-config-common';
import { define } from '@agaroot/eslint-config-definer';
import { javascript } from '@agaroot/eslint-config-javascript';
import { jest } from '@agaroot/eslint-config-jest';
import { jestReact } from '@agaroot/eslint-config-jest-react';
import { react } from '@agaroot/eslint-config-jest-react';
import { next } from '@agaroot/eslint-config-jest-next';
import { typescript } from '@agaroot/eslint-config-typescript';

const config = define([
  common,
  javascript,
  jest,
  jestReact,
  react,
  // If you are using TypeScript, add the following line.
  typescript,
  // If you are using Next.js, add the following line.
  next,
]);

export default config({
  // If you are using TypeScript, add the following line.
  tsconfigPath: './tsconfig.json',
});
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/agaroot-technologies/eslint-config/issues) if you want to contribute.

## 📝 License

Copyright © 2023 [AGAROOT TECHNOLOGIES](https://tech.agaroot.co.jp/).

This project is [```MIT```](https://github.com/agaroot-technologies/eslint-config/blob/main/packages/jest-react/LICENSE) licensed.
