import { type RelativeOptions, createRelativeTimeFormat } from "../common/common";
import { msToMap, type UnitValueMap, type msToMapOptions } from "../msToMap/msToMap";
import { reducePartsOf2, reducePartsOf3 } from "../reduce/reduce";
import type { UnitType } from "../units/units";

export type FormatOptions = msToMapOptions & RelativeOptions;

export function format(time: number, options: FormatOptions = {}, locale?: string) {
	const { max, localeMatcher, style } = options;
	const unitMap = msToMap(time, { max });

	const rltf = createRelativeTimeFormat(locale, options);

	return formatParts(unitMap, rltf).join(" ");
}

function formatParts(map: UnitValueMap, rltf: Intl.RelativeTimeFormat) {
	return [...map].map(([unitType, value], index, arr) => {
		const part = formatPart(Math.abs(value), unitType, rltf);
		if (value < 0 && index < 1) {
			return `-${part}`;
		}
		return part;
	});
}

function formatPart(value: number, unitType: UnitType, rltf: Intl.RelativeTimeFormat) {
	const parts = rltf.formatToParts(value, unitType);
	const comparison = rltf.formatToParts(value, "quarter");
	// parts only exist out of 3 or 2 parts, not more
	if (parts.length == 3) {
		return reducePartsOf3(parts, comparison).join("");
	}
	return reducePartsOf2(parts, comparison).join("");
}
