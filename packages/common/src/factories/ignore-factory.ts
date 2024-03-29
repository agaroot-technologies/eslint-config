import type { Linter } from 'eslint';

export const ignoreFactory = (): Linter.FlatConfig[] => {
  return [
    {
      name: 'agaroot/common/ignore',
      ignores: [
        // Node modules
        '**/node_modules',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',

        // Test directories
        '**/coverage',
        '**/__snapshots__',

        // Build directories
        '**/dist',
        '**/.next',
        '**/.vercel',

        // Cache directories
        '**/.swc',
        '**/.turbo',
      ],
    },
  ];
};
