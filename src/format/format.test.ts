import { describe, expect, it, suite } from "vitest";
import { day, hour, minute, second, week, year } from "../units/units";
import { format } from "./format";

describe("format", () => {
	suite("en-US", () => {
		it("should give 5 days & 3 seconds", () => {
			expect(
				format(
					day * 5 + second * 3,
					{
						style: "long",
					},
					"en-US"
				)
			).toBe("5 days 3 seconds");
		});

		it("should give -3 hours 58 minutes in narrow form", () => {
			expect(
				format(
					-(3 * hour + 58 * minute),
					{
						style: "narrow",
					},
					"en-US"
				)
			).toBe("-3h 58m");
		});

		it("should give 6 years, 10 weeks but not 4 days", () => {
			expect(
				format(
					year * 6 + 10 * week + 4 * day,
					{
						style: "short",
						max: 2,
					},
					"en-US"
				)
			).toBe("6 yr. 10 wk.");
		});
	});
});
