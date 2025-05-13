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
	 * Default ignores.
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
	 * External library configurations.
	 */
	{
		extends: [
			jsdoc.configs["flat/recommended-typescript"],
			eslint.configs.recommended,
			tsEslint.configs.recommended,
		],
	},

	/**
	 * Main rules.
	 */
	{
		plugins: {
			jsdoc,
		},
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
					definedTags: ["jest-environment"],
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
			"@typescript-eslint/explicit-function-return-type": "warn",
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
	 * JavaScript-only rules.
	 */
	{
		files: ["**/*.{js,cjs,mjs}"],
		rules: {
			"@typescript-eslint/explicit-function-return-type": "off",
			"jsdoc/no-types": "off",
		},
	},

	/**
	 * Test and mock rules.
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
