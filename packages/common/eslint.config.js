import { javascript } from '@agaroot/eslint-config-javascript';

import { common } from './dist/index.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...common(),
  ...javascript(),
];

export default config;
