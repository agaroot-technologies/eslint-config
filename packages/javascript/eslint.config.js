import { common } from '@agaroot/eslint-config-common';

import { javascript } from './dist/index.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...common(),
  ...javascript(),
];

export default config;
