import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import * as tseslint from '@typescript-eslint/eslint-plugin'
import * as tsParser from '@typescript-eslint/parser'
import jest from 'eslint-plugin-jest'

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['vite.config.ts', 'vite.config.d.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        React: 'readonly',
        process: 'readonly',
        console: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...tseslint.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['vite.config.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        process: 'readonly',
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.node.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.rules,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        console: 'readonly',
        process: 'readonly',
      },
    },
  },
  {
    files: ['src/App.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    plugins: { jest },
    rules: {
      'jest/expect-expect': 'warn',
      'jest/no-commented-out-tests': 'warn',
      'jest/no-conditional-expect': 'error',
      'jest/no-deprecated-functions': 'warn',
      'jest/no-disabled-tests': 'warn',
      'jest/no-done-callback': 'error',
      'jest/no-duplicate-hooks': 'error',
      'jest/no-export': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/no-interpolation-in-snapshots': 'error',
      'jest/no-restricted-matchers': 'off',
      'jest/no-standalone-expect': 'error',
      'jest/no-test-return-statement': 'error',
      'jest/prefer-called-with': 'warn',
      'jest/prefer-expect-assertions': 'off',
      'jest/prefer-hooks-in-order': 'warn',
      'jest/prefer-hooks-on-top': 'warn',
      'jest/prefer-spy-on': 'warn',
      'jest/prefer-strict-equal': 'warn',
      'jest/prefer-to-be': 'warn',
      'jest/prefer-to-contain': 'warn',
      'jest/prefer-to-have-length': 'warn',
      'jest/require-to-throw-message': 'warn',
      'jest/require-top-level-describe': 'off',
      'jest/valid-describe-callback': 'error',
      'jest/valid-expect': 'error',
      'jest/valid-expect-in-promise': 'error',
      'jest/valid-title': 'error',
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]
