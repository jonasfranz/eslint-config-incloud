import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-default-export': 'error',
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
};

export = config;