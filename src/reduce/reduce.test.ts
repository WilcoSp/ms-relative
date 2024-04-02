import { it, describe, expect } from "vitest";
import { reducePartsOf3 } from "./reduce";

describe("reducePartsOf3", () => {
	it("to be 2d", () => {
		const rl = new Intl.RelativeTimeFormat("en", { numeric: "always", style: "narrow" });

		const quarter = rl.formatToParts(2, "quarter");
		const day = rl.formatToParts(2, "day");

		const r = reducePartsOf3(day, quarter);

		expect(r).toEqual(["2", "d"]);
	});
});
