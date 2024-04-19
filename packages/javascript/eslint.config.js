import { common } from '@agaroot/eslint-config-common';
import { typescript } from '@agaroot/eslint-config-typescript';

import { javascript } from './dist/index.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...common(),
  ...javascript(),
  ...typescript({
    tsconfigPath: './tsconfig.json',
  }),
];

export default config;
