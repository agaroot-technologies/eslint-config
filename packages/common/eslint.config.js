import { javascript } from '@agaroot/eslint-config-javascript';
import { typescript } from '@agaroot/eslint-config-typescript';

import { common } from './dist/index.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...common(),
  ...javascript(),
  ...typescript({
    tsconfigPath: './tsconfig.json',
  }),
];

export default config;
