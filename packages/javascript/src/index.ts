import { define } from '@agaroot/eslint-config-definer';

import { globalsConfigurator } from './configurators/globals-configurator';
import { importConfigurator } from './configurators/import-configurator';
import { javascriptConfigurator } from './configurators/javascript-configurator';

export const javascript = define([
  globalsConfigurator,
  importConfigurator,
  javascriptConfigurator,
]);
