import { defineConfig } from "eslint/config";

import { config } from "./src/index.js";

export default defineConfig([
	{
		ignores: ["tests/recommended/**/*.ts"],
		extends: config.recommended,
	},
]);
