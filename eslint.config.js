import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginReact from "@eslint/js";

export default tseslint.config(
  { 
    ignores: [
      "dist", 
      "node_modules", 
      "*.config.js", 
      "*.config.ts",
      "public",
      "coverage",
      ".next",
      "build"
    ] 
  },
  {
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": ["warn", { 
        argsIgnorePattern: "^_", 
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-const": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/require-await": "warn",
      
      // General JavaScript rules
      "prefer-const": "warn",
      "no-var": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "no-void": "error",
      "no-with": "error",
      
      // Code quality rules
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "brace-style": ["error", "1tbs"],
      "indent": ["error", 2, { SwitchCase: 1 }],
      "quotes": ["error", "single", { avoidEscape: true }],
      "semi": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      
      // Import rules
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "import/order": "off", // We'll use @typescript-eslint/ordered-imports instead
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  }
);
