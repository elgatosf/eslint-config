<div align="center">

# @elgato/eslint-config

[ESLint](https://https://eslint.org/) configuration used by Elgato projects.

[![@elgato/eslint-config npm package](https://img.shields.io/npm/v/%40elgato/eslint-config?logo=npm&logoColor=white)](https://www.npmjs.com/package/@elgato/eslint-config)
[![Join the Marketplace Makers Discord](https://img.shields.io/badge/Marketplace%20Makers-5662f6?labelColor=grey&logo=discord&logoColor=white)](https://discord.gg/GehBUcu627)
[![Elgato homepage](https://img.shields.io/badge/Elgato-3431cf?labelColor=grey&logo=elgato)](https://elgato.com)

</div>

## Installation

```
npm install @elgato/eslint-config --save-dev
```

## Usage

Create an `eslint.config.js` file at the root of your project.

```js
// eslint.config.js
import { config } from "@elgato/eslint-config";

export default config.recommended;
```

Then add a linting script to your `package.json` file.

```json
{
    "scripts": {
        "lint": "eslint --max-warnings 0"
    }
}
```

Finally, to test everything is working run `npm run lint`.

## Configuration

All configurations are tailored for TypeScript, with the `strict` configuration enforcing stricter types through explicit return types. Additionally, all configurations emphasize the importance of well-documented code ([jsdocs](https://jsdoc.app/)) and encourages structured code in the form of member ordering.

### Extends

- JSDoc recommended
- ESLint recommended
- TypeScript ESLint recommended

### Rules

| Rule                                       | Recommended  | Strict       | Notes                                                                 |
| ------------------------------------------ | ------------ | ------------ | --------------------------------------------------------------------- |
| Indent: Tabs                               | ⚠️&nbsp;Warn | ⚠️&nbsp;Warn |                                                                       |
| JSDoc: Check tag names                     | ⚠️&nbsp;Warn | ⚠️&nbsp;Warn | Additional tags: `csspart`, `cssproperty`, `jest-environment`, `slot` |
| JSDoc: No undefined types                  | ⚠️&nbsp;Warn | ⚠️&nbsp;Warn |                                                                       |
| JSDoc: Require JSDoc                       | ⚠️&nbsp;Warn | ⚠️&nbsp;Warn |                                                                       |
| JSDoc: Require Returns                     | ⚠️&nbsp;Warn | ⚠️&nbsp;Warn | Disabled for getters.                                                 |
| TypeScript: Explicit function return types | ✅ Off       | ⚠️&nbsp;Warn | Disabled for JavaScript, tests, and mock files.                       |
| TypeScript: Explicit member accessibility  | ⚠️&nbsp;Warn | ⚠️&nbsp;Warn | No `public` required `constructor`.                                   |
| TypeScript: Member ordering                | ⚠️&nbsp;Warn | ⚠️&nbsp;Warn | Grouped by type and then access, and ordered alphabetically.          |
| TypeScript: Sort type constituents         | ⚠️&nbsp;Warn | ⚠️&nbsp;Warn |                                                                       |

Additionally, the following rules are disabled for test and mock files:

- TypeScript: No explicit `any`
- TypeScript: No `require` imports

### Variants

- Mocks and tests

    - Allow `any` and `require`.
    - Do not require explicit return types.

### Ignored

- `.github/`
- `bin/`
- `dist/`
- `node_modules/`

## Member Ordering

Members of a class should be grouped by type and then by access, and ordered alphabetically. The ordering is as follows:

**Type Order**

- Fields
- Constructors
- Signatures / call signatures
- Properties (get / set)
- Methods

**Access Order**

- Public (static / abstract / regular)
- Protected (static / abstract / regular)
- Private (static / abstract / regular)

## Overrides

Configuration settings can be overriden using the `defineConfig` helper function from ESLint, extending `@elgato/eslint-config`, and then defining your preferred settings.

```js
// eslint.config.js
import { defineConfig } from "eslint/config";
import { config } from "@elgato/eslint-config";

export default defineConfig([
	{
		extends: [export default config.recommended],

		// Anything from here will override @elgato/eslint-config
		rules: {
			"no-unused-vars": "warn",
		},
	},
]);
```

[Learn more](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs) about overriding settings.
