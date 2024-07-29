# @agaroot/eslint-config-definer

[![npm version](https://badge.fury.io/js/@agaroot%2Feslint-config-definer.svg)](https://www.npmjs.com/package/@agaroot/eslint-config-definer)
[![npm download](https://img.shields.io/npm/dm/@agaroot/eslint-config-definer.svg)](https://www.npmjs.com/package/@agaroot/eslint-config-definer)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/agaroot-technologies/eslint-config/blob/main/packages/definer/LICENSE)
[![Github](https://img.shields.io/github/followers/agaroot-technologies?label=Follow&logo=github&style=social)](https://github.com/orgs/agaroot-technologies/followers)

This is a ESLint config commonly inherited by AGAROOT products.

Use this setting to ensure consistent code writing and maintain high code quality.

## 🚀 Installation

```shell
npm install -D eslint @agaroot/eslint-config-common @agaroot/eslint-config-definer @agaroot/eslint-config-javascript

# If you are using TypeScript, install the following package.
npm install -D @agaroot/eslint-config-typescript
```

## 👏 Getting Started

Create a `eslint.config.js` file in the root directory of your project.

```js
import { common } from '@agaroot/eslint-config-common';
import { define } from '@agaroot/eslint-config-definer';
import { javascript } from '@agaroot/eslint-config-javascript';
import { typescript } from '@agaroot/eslint-config-typescript';

const config = define(
  common,
  javascript,
  // If you are using TypeScript, add the following line.
  typescript,
);

export default config({
  tsconfigPath: './tsconfig.json',
});
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/agaroot-technologies/eslint-config/issues) if you want to contribute.

## 📝 License

Copyright © 2023 [AGAROOT TECHNOLOGIES](https://tech.agaroot.co.jp/).

This project is [```MIT```](https://github.com/agaroot-technologies/eslint-config/blob/main/packages/definer/LICENSE) licensed.
