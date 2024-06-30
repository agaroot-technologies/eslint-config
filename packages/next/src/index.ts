import { define } from '@agaroot/eslint-config-definer';

import { nextConfigurator } from './configurators/next-configurator';

export const next = define([
  nextConfigurator,
]);
