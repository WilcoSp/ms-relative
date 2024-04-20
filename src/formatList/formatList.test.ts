import { describe, expect, it, suite } from "vitest";
import { day, hour, minute, second, week, year } from "../units/units";
import { formatList } from "./formatList";

describe("format", () => {
	suite("en-US", () => {
		const locale = "en-US";
		it("should give 5 days and 3 seconds", () => {
			expect(
				formatList(day * 5 + second * 3, {
					relativeStyle: "long",
					listStyle: "long",
					locale,
				})
			).toBe("5 days and 3 seconds");
		});

		it("should give -3 hours 58 minutes in narrow form", () => {
			expect(
				formatList(-(3 * hour + 58 * minute), {
					relativeStyle: "narrow",
					listStyle: "narrow",

					locale,
				})
			).toBe("-3h, 58m");
		});

		it("should give 6 years, 10 weeks but not 4 days", () => {
			expect(
				formatList(year * 6 + 10 * week + 4 * day, {
					relativeStyle: "short",
					listStyle: "short",
					listType: "unit",
					max: 2,
					locale,
				})
			).toBe("6 yr., 10 wk.");
		});
	});

	suite("main Chinese", () => {
		const locale = "zh-CH";
		it("should give 5 days & 3 seconds", () => {
			expect(
				formatList(day * 5 + second * 3, {
					relativeStyle: "long",
					listStyle: "long",
					locale,
				})
			).toBe("5天和3秒钟");
		});

		it("should give -3 hours 58 minutes in narrow form", () => {
			expect(
				formatList(-(3 * hour + 58 * minute), {
					relativeStyle: "narrow",
					listStyle: "narrow",
					locale,
				})
			).toBe("-3小时、58分钟");
		});

		it("should give 6 years, 10 weeks but not 4 days", () => {
			expect(
				formatList(year * 6 + 10 * week + 4 * day, {
					relativeStyle: "short",
					listStyle: "short",
					max: 2,
					locale,
				})
			).toBe("6年和10周");
		});
	});

	suite("Hong Kong Chinese", () => {
		const locale = "zh-HK";
		it("should give 5 days & 3 seconds", () => {
			expect(
				formatList(day * 5 + second * 3, {
					relativeStyle: "long",
					listStyle: "long",
					locale,
				})
			).toBe("5 日及3 秒");
		});

		it("should give -3 hours 58 minutes in narrow form", () => {
			expect(
				formatList(-(3 * hour + 58 * minute), {
					relativeStyle: "narrow",
					listStyle: "narrow",
					locale,
				})
			).toBe("-3小時後及58分後");
		});

		it("should give 6 years, 10 weeks but not 4 days", () => {
			expect(
				formatList(year * 6 + 10 * week + 4 * day, {
					relativeStyle: "short",
					listStyle: "short",
					max: 2,
					locale,
				})
			).toBe("6 年及10 星期");
		});
	});
});
