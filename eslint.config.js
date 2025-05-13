import { defineConfig } from "eslint/config";

import { config } from "./src/index.js";

export default defineConfig([
	{
		ignores: ["src/__tests__/recommended/**/*.ts"],
		extends: config.recommended,
	},
]);
