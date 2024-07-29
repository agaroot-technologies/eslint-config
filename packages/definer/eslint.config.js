import { define } from './dist/index.mjs';
import { common } from '../common/dist/index.mjs';
import { javascript } from '../javascript/dist/index.mjs';
import { style } from '../style/dist/index.mjs';
import { typescript } from '../typescript/dist/index.mjs';

const config = define([
  common,
  javascript,
  typescript,
  style,
]);

export default config({
  tsconfigPath: './tsconfig.json',
});
