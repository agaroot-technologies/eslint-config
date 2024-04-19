import { common } from '@agaroot/eslint-config-common';
import { javascript } from '@agaroot/eslint-config-javascript';

import { typescript } from './dist/index.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...common(),
  ...javascript(),
  ...typescript({
    tsconfigPath: './tsconfig.json',
  }),
];

export default config;
