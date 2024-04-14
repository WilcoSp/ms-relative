import { describe, expect, it, suite } from "vitest";
import { day, hour, minute, second, week, year } from "../units/units";
import { format } from "./format";

describe("format", () => {
	suite("en-US", () => {
		const locale = "en-US";
		it("should give 5 days & 3 seconds", () => {
			expect(
				format(day * 5 + second * 3, {
					style: "long",
					locale,
				})
			).toBe("5 days 3 seconds");
		});

		it("should give -3 hours 58 minutes in narrow form", () => {
			expect(
				format(-(3 * hour + 58 * minute), {
					style: "narrow",
					locale,
				})
			).toBe("-3h 58m");
		});

		it("should give 6 years, 10 weeks but not 4 days", () => {
			expect(
				format(year * 6 + 10 * week + 4 * day, {
					style: "short",
					max: 2,
					locale,
				})
			).toBe("6 yr. 10 wk.");
		});
	});

	suite("main Chinese", () => {
		const locale = "zh-CH";
		it("should give 5 days & 3 seconds", () => {
			expect(
				format(day * 5 + second * 3, {
					style: "long",
					locale,
				})
			).toBe("5天 3秒钟");
		});

		it("should give -3 hours 58 minutes in narrow form", () => {
			expect(
				format(-(3 * hour + 58 * minute), {
					style: "narrow",
					locale,
				})
			).toBe("-3小时 58分钟");
		});

		it("should give 6 years, 10 weeks but not 4 days", () => {
			expect(
				format(year * 6 + 10 * week + 4 * day, {
					style: "short",
					max: 2,
					locale,
				})
			).toBe("6年 10周");
		});
	});

	suite("Hong Kong Chinese", () => {
		const locale = "zh-HK";
		it("should give 5 days & 3 seconds", () => {
			expect(
				format(day * 5 + second * 3, {
					style: "long",
					locale,
				})
			).toBe("5 日 3 秒");
		});

		it("should give -3 hours 58 minutes in narrow form", () => {
			expect(
				format(-(3 * hour + 58 * minute), {
					style: "narrow",
					locale,
				})
			).toBe("-3小時後 58分後");
		});

		it("should give 6 years, 10 weeks but not 4 days", () => {
			expect(
				format(year * 6 + 10 * week + 4 * day, {
					style: "short",
					max: 2,
					locale,
				})
			).toBe("6 年 10 星期");
		});
	});
});
