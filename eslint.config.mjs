import globals from "globals";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
  },
  { languageOptions: { globals: globals.browser } },
  ...compat.extends("next"),
  ...compat.extends("plugin:tailwindcss/recommended"),
  ...tseslint.configs.recommended,
  {
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  eslintConfigPrettier,
  {
    ignore: ["./next/*", "./node_modules/*", "./dist/*"],
  },
];
