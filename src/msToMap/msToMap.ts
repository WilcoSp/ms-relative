import type { UnitType } from "../units/units";
import { getBiggestValueAndType } from "../getValueAndType/getValueAndType";

/**
 * Options for msToMap & functions it's being used by
 */
export interface msToMapOptions {
	/**
	 * max amount of units to display
	 */
	max?: number;
}

/**
 * a Map from msToMap that has the units as keys and the amount of time as values
 */
export type UnitValueMap = Map<UnitType, number>;

/**
 * make a map from the time given in ms seconds
 * @param time time in ms seconds
 * @param options.max max amount of values that should be saved in the map
 * @returns an map with the key being the unitTypes and the value the amount of it gotten from the time
 */
export function msToMap(time: number, options: msToMapOptions = {}): UnitValueMap {
	let { max = 7 } = options;
	const negative = time < 0;
	time = Math.abs(time);
	const map = new Map<UnitType, number>();
	do {
		const r = getBiggestValueAndType(time);
		time = r.leftOverTime;
		if (r.value > 0) {
			map.set(r.type, negative ? -r.value : r.value);
		}
		max--;
	} while (time > 999 && max > 0);

	return map;
}

/**
 * make an object from the time given in ms seconds
 * @param time  time in ms seconds
 * @param options.max max amount of values that should be saved in the object
 * @returns an object with the key being the unitTypes and the value the amount of it gotten from the time
 */
export function msToObject(time: number, options: msToMapOptions = {}): Partial<Record<UnitType, number>> {
	return Object.fromEntries(msToMap(time, options));
}
