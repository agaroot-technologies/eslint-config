import { common } from './dist/index.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...common(),
];

export default config;
