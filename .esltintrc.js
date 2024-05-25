module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error"
    }
};