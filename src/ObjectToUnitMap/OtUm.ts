import type { UnitValueMap } from "../msToMap/msToMap";
import type { UnitType } from "../units/units";

/**
 * transforms a object to a map
 * @param obj a object with the keys being units and values the duration
 * @returns a unit map
 */
export function objectToUnitMap(obj: Partial<Record<UnitType, number>>) {
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
	return map;
}
