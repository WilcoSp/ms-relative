import type { RelativeOptions } from "../common/common";
import { formatMap } from "../formatMap/formatMap";
import type { UnitValueMap } from "../msToMap/msToMap";
import type { UnitType } from "../units/units";

/**
 * formats an object to a relative time string
 * @param obj an object with the key as the units and the values the amount of each unit
 * @param options options you want for the formatting
 * @returns a formatted string based on the given map
 */
export function formatObject(obj: Partial<Record<UnitType, number>>, options: RelativeOptions & { locale?: string } = {}): string {
	const map: UnitValueMap = new Map();

	if (obj.year) {
		map.set("year", obj.year);
	}
	if (obj.month) {
		map.set("month", obj.month);
	}
	if (obj.week) {
		map.set("week", obj.week);
	}
	if (obj.day) {
		map.set("day", obj.day);
	}
	if (obj.hour) {
		map.set("hour", obj.hour);
	}
	if (obj.minute) {
		map.set("minute", obj.minute);
	}
	if (obj.second) {
		map.set("second", obj.second);
	}
	return formatMap(map, options);
}
