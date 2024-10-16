import { createRelativeTimeFormat, type RelativeOptions } from "../common/common";
import { formatParts } from "../formatParts/formatParts";
import type { UnitValueMap } from "../msToMap/msToMap";

/**
 * formats a map to a relative time string in the order of the map
 * @param unitMap a Map with the key as the units and the values the amount of each unit
 * @param options options you want for the formatting
 * @returns a formatted string based on the given map
 */
export function formatMap(unitMap: UnitValueMap, options: RelativeOptions & { locale?: string } = {}) {
	const { locale } = options;

	const rl = createRelativeTimeFormat(locale, options);

	return formatParts(unitMap, rl).join(" ");
}

// tests are covered by format
