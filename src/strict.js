import { defineConfig } from "eslint/config";

import recommendedConfig from "./recommended.js";

/**
 * Strict ESLint configuration.
 */
export default defineConfig([
	recommendedConfig,

	/**
	 * Main rules.
	 */
	{
		rules: {
			"@typescript-eslint/explicit-function-return-type": "warn",
		},
	},
]);
