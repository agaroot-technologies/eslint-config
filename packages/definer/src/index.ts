/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Linter } from 'eslint';

type ExtractOptionType<T> = T extends Configurator<infer U> ? U : never;

type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

export type MergeOptionTypes<T extends any[]> = UnionToIntersection<ExtractOptionType<T[number]>>;

export type Configurator<T = void> =
  T extends void
    ? (() => Linter.FlatConfig[])
    : ((options: T) => Linter.FlatConfig[]);

export const define = <T extends Configurator<any>[]>(
  configurators: T,
): (options: MergeOptionTypes<T>) => Linter.FlatConfig[] => {
  return (options) => configurators.flatMap((configurator) => {
    if (typeof configurator === 'object') return configurator;
    return configurator(options);
  });
};
