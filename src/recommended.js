import eslint from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tsEslint from "typescript-eslint";

/**
 * Recommended ESLint configuration.
 */
export default defineConfig([
	/**
	 * Global (ignore).
	 */
	{
		ignores: [
			".github/",
			"bin/",
			"dist/",
			"node_modules/",
		],
	},

	/**
	 * Global (recommended).
	 */
	{
		extends: [eslint.configs.recommended],
	},

	/**
	 * TypeScript.
	 */
	{
		files: ["**/*.{ts,mts,cts,tsx}"],
		extends: [
			jsdoc.configs["flat/recommended-typescript"],
			tsEslint.configs.recommended,
		],
		rules: {
			"@typescript-eslint/explicit-member-accessibility": [
				"warn",
				{
					accessibility: "explicit",
					overrides: {
						constructors: "no-public",
					},
				},
			],
			"@typescript-eslint/member-ordering": [
				"warn",
				{
					default: {
						memberTypes: [
							"public-static-field",
							"public-abstract-field",
							"public-field",
							"protected-static-field",
							"protected-abstract-field",
							"protected-field",
							"private-static-field",
							"private-field",
							"public-constructor",
							"protected-constructor",
							"private-constructor",
							"signature",
							"call-signature",
							"public-static-get",
							"public-static-set",
							"public-abstract-get",
							"public-abstract-set",
							"public-get",
							"public-set",
							"protected-static-get",
							"protected-static-set",
							"protected-abstract-get",
							"protected-abstract-set",
							"protected-get",
							"protected-set",
							"private-static-get",
							"private-static-set",
							"private-get",
							"private-set",
							"public-static-method",
							"public-abstract-method",
							"public-method",
							"protected-static-method",
							"protected-abstract-method",
							"protected-method",
							"private-static-method",
							"private-method",
						],

						order: "alphabetically",
					},
				},
			],
			"@typescript-eslint/sort-type-constituents": "warn",
		},
	},

	/**
	 * JavaScript.
	 */
	{
		files: ["**/*.{js,mjs,cjs,jsx}"],
		extends: [
			jsdoc.configs["flat/recommended"],
		],
	},

	/**
	 * Global (overrides).
	 */
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			indent: [
				"warn",
				"tab",
				{
					ignoredNodes: ["TemplateLiteral *"],
					SwitchCase: 1,
				},
			],
			"jsdoc/check-tag-names": [
				"warn",
				{
					definedTags: ["csspart", "cssproperty", "jest-environment", "slot"],
				},
			],
			"jsdoc/no-undefined-types": "warn",
			"jsdoc/require-jsdoc": [
				"warn",
				{
					contexts: [
						"ClassDeclaration",
						"PropertyDefinition",
						"MethodDefinition",
						"TSEnumDeclaration",
						"TSEnumMember",
						"TSPropertySignature",
						"TSTypeAliasDeclaration",
					],
				},
			],
			"jsdoc/require-returns": [
				"warn",
				{
					checkGetters: false,
				},
			],
		},
	},

	/**
	 * Tests and mocks.
	 */
	{
		files: ["{src,tests}/**/__mocks__/*.ts", "{src,tests}/**/__tests__/*test.ts"],
		rules: {
			"jsdoc/require-jsdoc": [
				"warn",
				{
					contexts: ["MethodDefinition"],
				},
			],
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-require-imports": "off",
		},
	},
]);
