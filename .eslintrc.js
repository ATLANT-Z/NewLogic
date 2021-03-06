module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-undef': 'off',
        "vue/no-unused-components": ["warn"],
        "no-unused-vars": "off",
        '@typescript-eslint/no-empty-function': ["warn"],
        "@typescript-eslint/no-unused-vars": ["warn"],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "@typescript-eslint/no-inferrable-types": "off", // Closed type inference
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-explicit-any': 0,
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/ban-types": "warn"
    }
}
