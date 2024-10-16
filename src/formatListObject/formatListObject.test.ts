import { describe, expect, it } from "vitest";
import { formatListObject } from "./formatListObject";

describe("formatObject", () => {
	it("should give a time string back", () => {
		expect(
			formatListObject(
				{
					year: 2,
					month: 3,
					week: 1,
					day: 5,
					hour: 20,
					minute: 10,
					second: 4,
				},
				{
					listType: "conjunction",
					locale: "en-uk",
				}
			)
		).toBe("2 years, 3 months, 1 week, 5 days, 20 hours, 10 minutes and 4 seconds");
	});
});
