import { it, describe, expect } from "vitest";
import { reducePartsOf3, reducePartsOf2 } from "./reduce";
import { createRelativeTimeFormat } from "../index";

describe("reducePartsOf3", () => {
	it("to be [2,d]", () => {
		const rl = createRelativeTimeFormat("en", { style: "narrow" });

		const quarter = rl.formatToParts(2, "quarter");
		const day = rl.formatToParts(2, "day");

		const r = reducePartsOf3(day, quarter);

		expect(r).toEqual(["2", "d"]);
	});
});

describe("reducePartsOf2", () => {
	it("to be 2 d but in korean", () => {
		const rl = createRelativeTimeFormat("ko-KR", { style: "long" });

		const quarter = rl.formatToParts(2, "quarter");
		const day = rl.formatToParts(2, "day");

		const r = reducePartsOf2(day, quarter);

		expect(r).toEqual(["2", "일"]);
	});

	it("Japanse", () => {
		const rl = createRelativeTimeFormat("ja-JP", { style: "long" });

		const quarter = rl.formatToParts(2, "quarter");
		const second = rl.formatToParts(2, "second");
		const minute = rl.formatToParts(2, "minute");
		const hour = rl.formatToParts(2, "hour");
		const day = rl.formatToParts(2, "day");
		const week = rl.formatToParts(2, "week");
		const year = rl.formatToParts(2, "year");

		expect(reducePartsOf2(second, quarter)).toEqual(["2", " 秒"]);
		expect(reducePartsOf2(minute, quarter)).toEqual(["2", " 分"]);
		expect(reducePartsOf2(hour, quarter)).toEqual(["2", " 時間"]);
		expect(reducePartsOf2(day, quarter)).toEqual(["2", " 日"]);
		expect(reducePartsOf2(week, quarter)).toEqual(["2", " 週間"]);
		expect(reducePartsOf2(year, quarter)).toEqual(["2", " 年"]);
	});

	it("main Chinese", () => {
		const rl = createRelativeTimeFormat("zh-CH", { style: "long" });

		const quarter = rl.formatToParts(2, "quarter");
		const second = rl.formatToParts(2, "second");
		const minute = rl.formatToParts(2, "minute");
		const hour = rl.formatToParts(2, "hour");
		const day = rl.formatToParts(2, "day");
		const week = rl.formatToParts(2, "week");
		const year = rl.formatToParts(2, "year");

		expect(reducePartsOf2(second, quarter)).toEqual(["2", "秒钟"]);
		expect(reducePartsOf2(minute, quarter)).toEqual(["2", "分钟"]);
		expect(reducePartsOf2(hour, quarter)).toEqual(["2", "小时"]);
		expect(reducePartsOf2(day, quarter)).toEqual(["2", "天"]);
		expect(reducePartsOf2(week, quarter)).toEqual(["2", "周"]);
		expect(reducePartsOf2(year, quarter)).toEqual(["2", "年"]);
	});

	it("Hong Kong Chinese", () => {
		const rl = createRelativeTimeFormat("zh-HK", { style: "long" });

		const quarter = rl.formatToParts(2, "quarter");
		const second = rl.formatToParts(2, "second");
		const minute = rl.formatToParts(2, "minute");
		const hour = rl.formatToParts(2, "hour");
		const day = rl.formatToParts(2, "day");
		const week = rl.formatToParts(2, "week");
		const year = rl.formatToParts(2, "year");

		expect(reducePartsOf2(second, quarter)).toEqual(["2", " 秒"]);
		expect(reducePartsOf2(minute, quarter)).toEqual(["2", " 分鐘"]);
		expect(reducePartsOf2(hour, quarter)).toEqual(["2", " 小時"]);
		expect(reducePartsOf2(day, quarter)).toEqual(["2", " 日"]);
		expect(reducePartsOf2(week, quarter)).toEqual(["2", " 星期"]);
		expect(reducePartsOf2(year, quarter)).toEqual(["2", " 年"]);
	});
});
