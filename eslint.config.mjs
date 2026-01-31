import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  // Next.js Core Web Vitals
  ...nextVitals,

  // Next.js + TypeScript
  ...nextTs,

  // Disable ESLint rules that conflict with Prettier
  prettier,

  // Global ignores
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // Custom rules (опціонально, але раджу)
  {
    rules: {
      // Менше болю на старті
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // Читабельність
      "prefer-const": "warn",

      // React / Next
      "react/react-in-jsx-scope": "off", // Next.js сам імпортує React
    },
  },
]);

export default eslintConfig;
