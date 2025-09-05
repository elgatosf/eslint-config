/**
 * Mock class.
 */
export class Company {
	/**
	 * Getter.
	 */
	public get name(): string {
		// Do not require return tag.
		return "Elgato";
	}

	/**
	 * Function.
	 */
	public getName(): string {
		// Require return tag.
		return this.name;
	}
}
