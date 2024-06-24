import { define } from '@agaroot/eslint-config-definer';

import { ignoreConfigurator } from './configurators/ignore-configurator';
import { jsonConfigurator } from './configurators/json-configurator';
import { linterConfigurator } from './configurators/linter-configurator';

export const common = define([
  ignoreConfigurator,
  jsonConfigurator,
  linterConfigurator,
]);
