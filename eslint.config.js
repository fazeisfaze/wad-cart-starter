export default [
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        test: "readonly",
        assert: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-constant-binary-expression": "off",
    },
  },
];