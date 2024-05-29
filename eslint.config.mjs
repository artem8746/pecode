import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    env: {
      es2021: true,
      node: true,
    },
    rules: {
      'no-console': 'error',
    },
  },
];
