import { ESLint } from "eslint";
import { join } from "path";
import { describe, expect, test } from "vitest";

import { recommendedRules } from "./recommended.test.js";

export const strictRules = recommendedRules
	.filter((r) => r.ruleId !== "@typescript-eslint/explicit-function-return-type")
	.concat({
		ruleId: "@typescript-eslint/explicit-function-return-type",
		messages: ["Missing return type on function."],
	});

describe("strict", () => {
	test.each(strictRules)("$ruleId", async ({ ruleId, messages }) => {
		// Arrange.
		const files = [join("./tests/rules/", `${ruleId}.ts`)];
		const eslint = new ESLint({
			overrideConfigFile: "src/strict.js",
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
