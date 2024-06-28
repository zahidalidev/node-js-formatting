import globals from 'globals';
import eslintRecommended from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 12,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
            },
        },
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            'prettier/prettier': ['error', prettierConfig],
            'no-undef': 'error',
            'no-console': 'off',
            'no-redeclare': 'error',
            'no-constant-condition': 'warn',
            eqeqeq: 'error',
            camelcase: ['error', { properties: 'always' }],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            indent: ['error', 4],
            'comma-dangle': ['error', 'always-multiline'],
            'arrow-parens': ['error', 'always'],
            curly: 'error',
            'quote-props': ['error', 'as-needed'],
            'object-curly-spacing': ['error', 'always'],
            'computed-property-spacing': ['error', 'always'],
            'eol-last': ['error', 'always'],
            'no-trailing-spaces': 'error',
            'space-before-function-paren': ['error', 'never'],
            'max-len': ['error', { code: 80 }],
            'id-match': [
                'error',
                '^[a-z]+([A-Z][a-z0-9]*)*$|^[A-Z][a-zA-Z0-9]*$',
                {
                    properties: true,
                    onlyDeclarations: true,
                },
            ],
            'new-cap': ['error', { newIsCap: true, capIsNew: false }],
        },
    },
];