import { defineConfig } from "eslint/config";

import recommendedConfig from "./recommended.js";

/**
 * Strict ESLint configuration.
 */
export default defineConfig([
	recommendedConfig,

	/**
	 * TypeScript.
	 */
	{
		files: ["**/*.{ts,mts,cts,tsx}"],
		rules: {
			"@typescript-eslint/explicit-function-return-type": "warn",
		},
	},
]);
