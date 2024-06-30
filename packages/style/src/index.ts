import { define } from '@agaroot/eslint-config-definer';

import { stylistic } from './configurators/stylistic';

export const style = define([
  stylistic,
]);
