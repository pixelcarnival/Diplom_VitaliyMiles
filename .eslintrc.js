module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],

    rules: {
        semi: 0,
        jsxBracketSameLine: 0,
        indent: ['off'],
        singleQuote: 0,
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never' }
        ],
        'multiline-ternary': ['off'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
    }
}
