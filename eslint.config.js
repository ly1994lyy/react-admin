import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tslint from 'typescript-eslint'

export default tslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2],
      semi: ['error', 'never']
    }
  }
)
