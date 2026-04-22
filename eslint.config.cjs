const js = require('@eslint/js')
const globals = require('globals')
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')

module.exports = [
	js.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				project: './tsconfig.json'
			},
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es2021
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			'no-undef': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-explicit-any': [
				'warn',
				{
					ignoreRestArgs: true
				}
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					caughtErrors: 'none'
				}
			],
			'@typescript-eslint/no-inferrable-types': ['warn'],
			'@typescript-eslint/no-redundant-type-constituents': ['warn'],
			'@typescript-eslint/no-unnecessary-type-assertion': ['warn'],
			'no-restricted-syntax': [
				'warn',
				{
					selector: 'TSEnumDeclaration',
					message: "Don't declare enums, use literals instead"
				}
			]
		}
	}
]
