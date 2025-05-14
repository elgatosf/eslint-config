<div align="center">

# @elgato/eslint-config

[ESLint](https://https://eslint.org/.io/) configuration used by Elgato projects.

[![@elgato/eslint-config npm package](https://img.shields.io/npm/v/%40elgato/eslint-config?logo=npm&logoColor=white)](https://www.npmjs.com/package/@elgato/eslint-config)
[![Join the Marketplace Makers Discord](https://img.shields.io/badge/Marketplace%20Makers-5662f6?labelColor=grey&logo=discord&logoColor=white)](https://discord.gg/GehBUcu627)
[![Elgato homepage](https://img.shields.io/badge/Elgato-3431cf?labelColor=grey&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RWxnYXRvPC90aXRsZT48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJtMTMuODgxOCA4LjM5NjQuMDI2MS4wMTk2IDkuOTQ5NCA1LjcxNzJjLS40ODg0IDIuNzI5LTEuOTE5NiA1LjIyMjMtNC4wMzg0IDcuMDI1M0ExMS45MjYyIDExLjkyNjIgMCAwIDEgMTIuMDk3IDI0Yy0zLjE5MjUgMC02LjE5MzktMS4yNDc3LTguNDUyNy0zLjUxNDRDMS4zODY4IDE4LjIxODguMTQyNyAxNS4yMDQ0LjE0MjcgMTJjMC0zLjIwNDIgMS4yNDQtNi4yMTg3IDMuNTAxNS04LjQ4NTRDNS45MDE5IDEuMjQ4IDguOTAzMiAwIDEyLjA5NyAwYzIuNDM5NCAwIDQuNzg0Ny43MzMzIDYuNzgzIDIuMTE4NyAxLjk1MjYgMS4zNTQgMy40NDY2IDMuMjM1NyA0LjMyMjcgNS40NDIyLjExMTIuMjgyOS4yMTQ5LjU3MzYuMzA1MS44NjU3bC0yLjEyNTUgMS4yMzU5YTkuNDkyNCA5LjQ5MjQgMCAwIDAtLjI2MTktLjg2OTRjLTEuMzU0LTMuODMwMy00Ljk4MTMtNi40MDQ4LTkuMDIzNy02LjQwNDhDNi44MTcxIDIuMzg4MyAyLjUyMiA2LjcwMDUgMi41MjIgMTJjMCA1LjI5OTUgNC4yOTUgOS42MTE1IDkuNTc0OCA5LjYxMTUgMi4wNTIgMCA0LjAwODQtLjY0NDIgNS42NTk2LTEuODY0NyAxLjYxNzItMS4xOTU1IDIuODAzNi0yLjgzMzcgMy40MzA5LTQuNzM2NGwuMDA2NS0uMDQxOUw5LjU5MDYgOC4zMDQ4djcuMjI1Nmw0LjAwMDQtMi4zMTM4IDIuMDYgMS4xODExLTUuOTk2MiAzLjQ2ODgtMi4xMi0xLjIxMjZWNy4xOTQzbDIuMTE3NC0xLjIyNDUgNC4yMzA5IDIuNDI3OS0uMDAxMy0uMDAxMyIvPjwvc3ZnPg==)](https://elgato.com)

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

The `recommended` configuration is catered for TypeScript, and enforces stricter types through explicit return types and no `any`, amongst other rules. Additionally, the configuration emphasizes the importance of well-documented code ([jsdocs](https://jsdoc.app/)) and encourages structured code in the form of member ordering.

### Extends

- JSDoc recommended
- ESLint recommended
- TypeScript ESLint recommended

### Rules

| Rule                                       | Severity | Notes                                                         |
| ------------------------------------------ | -------- | ------------------------------------------------------------- |
| Indent: Tabs                               | ⚠️ Warn  |                                                               |
| JSDoc: Check tag names                     | ⚠️ Warn  |                                                               |
| JSDoc: No undefined types                  | ⚠️ Warn  |                                                               |
| JSDoc: Require JSDoc                       | ⚠️ Warn  |                                                               |
| TypeScript: Explicit function return types | ⚠️ Warn  | Disabled for JavaScript, tests, and mock files.               |
| TypeScript: Explicit member accessibility  | ⚠️ Warn  | No `public` required `constructor`.                           |
| TypeScript: Member ordering                | ⚠️ Warn  | Grouped by type and then access, and ordered alphabetically . |
| TypeScript: Sort type contituents          | ⚠️ Warn  |                                                               |

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

Members of a class should be grouped by type and then by access, and ordered alphabetically. The ordersing is as follows:

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
