import { describe, expect, it, suite } from "vitest";
import { formatObject } from "./formatObject";

describe("formatObject", () => {
	it("should give a time string back", () => {
		expect(
			formatObject({
				year: 2,
				month: 3,
				week: 1,
				day: 5,
				hour: 20,
				minute: 10,
				second: 4,
			})
		).toBe("2 years 3 months 1 week 5 days 20 hours 10 minutes 4 seconds");
	});
});
