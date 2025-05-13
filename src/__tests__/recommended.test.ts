import { ESLint } from "eslint";
import { join } from "path";
import { describe, expect, test } from "vitest";

describe("recommended", () => {
	test.each([
		{
			ruleId: "indent",
			messages: ["Expected indentation of 1 tab but found 4 spaces."],
		},
		{
			ruleId: "jsdoc/check-tag-names",
			messages: ['Invalid JSDoc tag name "custom".'],
		},
		{
			ruleId: "jsdoc/no-undefined-types",
			messages: ["The type 'world' is undefined."],
		},
		{
			ruleId: "jsdoc/require-jsdoc",
			messages: ["Missing JSDoc comment."],
		},
		{
			ruleId: "@typescript-eslint/explicit-function-return-type",
			messages: ["Missing return type on function."],
		},
		{
			ruleId: "@typescript-eslint/explicit-member-accessibility",
			messages: ["Missing accessibility modifier on method definition test."],
		},
		{
			ruleId: "@typescript-eslint/sort-type-constituents",
			messages: ["Union type Test constituents must be sorted."],
		},
	])("$ruleId", async ({ ruleId, messages }) => {
		// Arrange.
		const files = [join("./src/__tests__/recommended/", `${ruleId}.ts`)];
		const eslint = new ESLint({
			overrideConfigFile: "src/recommended.js",
		});

		// Act.
		const result = await eslint.lintFiles(files);

		// Assert.
		expect(result).toHaveLength(1);
		expect(result[0].messages).toHaveLength(messages.length);

		result[0].messages.forEach((message, i) => {
			expect(message.ruleId).toBe(ruleId);
			expect(message.message).toBe(messages[i]);
		});
	});
});
