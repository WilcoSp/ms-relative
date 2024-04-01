import { describe, it, expect } from "vitest";
import { msToMap, msToObject } from "./msToMap.js";
import { type UnitType, year, week, hour, day, minute, second } from "../units/units.js";

describe("msToMap", () => {
	it("should give 5 weeks only", () => {
		const testMap = new Map<UnitType, number>([["week", 5]]);
		expect(msToMap(week * 5)).toEqual(testMap);
	});
	it("should give 6 years and 4 minutes", () => {
		const testMap = new Map<UnitType, number>([
			["year", 6],
			["minute", 4],
		]);
		expect(msToMap(year * 6 + minute * 4)).toEqual(testMap);
	});
});

describe("msToObject", () => {
	it("should give 5 days & 9 hours but not the seconds", () => {
		const testObject = {
			day: 5,
			hour: 9,
		} satisfies Partial<Record<UnitType, number>>;
		expect(msToObject(day * 5 + hour * 9 + second * 10, { max: 2 })).toEqual(testObject);
	});
	it("should give -0.217 seconds", () => {
		const testObject = {
			second: -0.217,
		} satisfies Partial<Record<UnitType, number>>;
		expect(msToObject(-217)).toEqual(testObject);
	});
});
