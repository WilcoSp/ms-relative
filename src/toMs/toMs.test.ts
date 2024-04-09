import { describe, it, expect } from "vitest";
import { toMs } from "./toMs";

describe("toMs", () => {
	it("ms only", () => {
		expect(
			toMs("15 20", {
				style: "narrow",
				// locale doesn't matter
			})
		).toBe(35);
	});
});
