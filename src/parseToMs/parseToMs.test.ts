import { describe, it, expect, suite } from "vitest";
import { parseToMs } from "./parseToMs";
import { day, hour, minute, second, week, year } from "../units/units";

describe("parseToMs", () => {
	suite("en-US", () => {
		const locale = "en-US";
		// long
		it("ms only", () => {
			expect(
				parseToMs("15 20", {
					style: "narrow",
					locale,
				})
			).toBe(35);
		});

		it("5 days", () => {
			expect(
				parseToMs("5 days", {
					style: "long",
					locale,
				})
			).toBe(5 * day);
		});

		it("5 hours & 10 minutes", () => {
			expect(
				parseToMs("5hours 10 minutes", {
					style: "long",
					locale,
				})
			).toBe(5 * hour + 10 * minute);
		});

		it("1 year, 8 weeks, 5 seconds & 50ms", () => {
			expect(
				parseToMs("year 10weeks 5 second 50", {
					style: "long",
					locale,
				})
			).toBe(year + 10 * week + 5 * second + 50);
		});

		it("short 1 day, 45 minutes & 5 seconds", () => {
			expect(
				parseToMs("day 45min 5 sec", {
					locale,
					style: "short",
				})
			).toBe(day + 45 * minute + 5 * second);
		});

		it("narrow 1 year, 6 weeks & 4 hours", () => {
			expect(
				parseToMs("y 6w 6 h", {
					locale,
					style: "narrow",
				})
			).toBe(year + 6 * week + 6 * hour);
		});

		it("5ms", () => {
			expect(
				parseToMs("5", {
					style: "long",
				})
			).toBe(5);
		});

		it("mixing should give null", () => {
			const value = "5year 3d 1 sec";
			expect(
				parseToMs(value, {
					locale,
					style: "long",
				})
			).toBe(null);
		});

		it("should give null for banana", () => {
			expect(
				parseToMs("5 banana", {
					style: "long",
					locale,
				})
			).toBe(null);
		});

		it("should give null", () => {
			expect(
				parseToMs("k", {
					style: "short",
					locale,
				})
			).toBe(null);
		});
	});

	suite("Dutch", () => {
		const locale = "nl-NL";
		it("long 1 year, 4 weeks", () => {
			expect(
				parseToMs("jaar 4 weken", {
					locale,
					style: "long",
				})
			).toBe(year + 4 * week);
		});

		it("short 6 days 4 hours", () => {
			expect(
				parseToMs("6 dgn 4 uur", {
					locale,
					style: "short",
				})
			).toBe(6 * day + 4 * hour);
		});

		it("4 minutes 9 seconds 10 ms", () => {
			expect(
				parseToMs("4min 9sec 10", {
					locale,
					style: "narrow",
				})
			).toBe(4 * minute + 9 * second + 10);
		});
	});

	suite("Japanse", () => {
		const locale = "ja-JP";
		it("long 1 year, 4 weeks", () => {
			expect(
				parseToMs("年 4 週間", {
					locale,
					style: "long",
				})
			).toBe(year + 4 * week);
		});

		it("short 6 days 4 hours", () => {
			expect(
				parseToMs("6日 4 時間", {
					locale,
					style: "short",
				})
			).toBe(6 * day + 4 * hour);
		});

		it("4 minutes 9 seconds 10 ms", () => {
			expect(
				parseToMs("4分 9 秒 10", {
					locale,
					style: "narrow",
				})
			).toBe(4 * minute + 9 * second + 10);
		});
	});
});
