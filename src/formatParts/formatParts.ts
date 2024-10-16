import type { UnitValueMap } from "../msToMap/msToMap";
import { reducePartsOf2, reducePartsOf3 } from "../reduce/reduce";
import type { UnitType } from "../units/units";

/**
 * format all values & units into relative format parts
 * @param map map with value & unitTypes
 * @param rltf Intl.RelativeTimeFormat
 * @returns parts as a string[]
 */
export function formatParts(map: UnitValueMap, rltf: Intl.RelativeTimeFormat): string[] {
	return [...map].map(([unitType, value], index) => {
		const part = formatPart(Math.abs(value), unitType, rltf);
		if (value < 0 && index < 1) {
			return `-${part}`;
		}
		return part;
	});
}

/**
 * format a single value & unit type to a formatted part
 * @param value the value of the part
 * @param unitType the unit type this part is for
 * @param rltf Intl.RelativeTimeFormat
 * @returns a single part as a string
 */
export function formatPart(value: number, unitType: UnitType, rltf: Intl.RelativeTimeFormat): string {
	const parts = rltf.formatToParts(value, unitType);
	const comparison = rltf.formatToParts(value, "quarter");
	// parts only exist out of 3 or 2 parts, not more
	if (parts.length == 3) {
		return reducePartsOf3(parts, comparison).join("");
	}
	return reducePartsOf2(parts, comparison).join("");
}
