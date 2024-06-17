import { define } from '@agaroot/eslint-config-definer';

import { a11yConfigurator } from './configurators/a11y-configurator';
import { languageConfigurator } from './configurators/language-configurator';
import { reactConfigurator } from './configurators/react-configurator';

export const react = define([
  a11yConfigurator,
  languageConfigurator,
  reactConfigurator,
]);
