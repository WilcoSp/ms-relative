import { expect, it, describe } from "vitest";
import { createRelativeTimeFormat } from "../common/common";
import { createConvertMap } from "./convertMap";
import { day, hour, minute, second, week, year, type UnitType } from "../units/units";

describe("convertMap", () => {
	it("should give long single & plural", () => {
		const rl = createRelativeTimeFormat("en-us", {
			style: "long",
		});

		expect(createConvertMap(rl)).toEqual(
			new Map<string, number>([
				["years", year],
				["year", year],
				["weeks", week],
				["week", week],
				["day", day],
				["days", day],
				["hours", hour],
				["hour", hour],
				["minutes", minute],
				["minute", minute],
				["seconds", second],
				["second", second],
			])
		);
	});

	// short
	it("should give short single & plural", () => {
		const rl = createRelativeTimeFormat("en-US", {
			style: "short",
		});
		expect(createConvertMap(rl)).toEqual(
			new Map<string, number>([
				["yr", year],
				["wk", week],
				["day", day],
				["days", day],
				["hr", hour],
				["min", minute],
				["sec", second],
			])
		);
	});

	// narrow
	it("should give narrow ", () => {
		const rl = createRelativeTimeFormat("en-US", {
			style: "narrow",
		});
		expect(createConvertMap(rl)).toEqual(
			new Map<string, number>([
				["y", year],
				["w", week],
				["d", day],
				["h", hour],
				["m", minute],
				["s", second],
			])
		);
	});
});
