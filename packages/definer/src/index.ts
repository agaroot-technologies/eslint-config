import type { Linter } from 'eslint';

export type Configurator<T = void> =
  T extends void
    ? (() => Linter.FlatConfig | Linter.FlatConfig[]) | Linter.FlatConfig | Linter.FlatConfig[]
    : ((options: T) => Linter.FlatConfig | Linter.FlatConfig[]) | Linter.FlatConfig | Linter.FlatConfig[];

export const define = <T>(configurators: Configurator<T>[]): (options: T) => Linter.FlatConfig[] => {
  return (options) => configurators.flatMap<Linter.FlatConfig>((configurator) => {
    if (typeof configurator === 'object') return configurator;
    return configurator(options);
  });
};
