import { createRelativeTimeFormat } from "../common/common";
import type { FormatListOptions } from "../formatList/formatList";
import { formatParts } from "../formatParts/formatParts";
import type { UnitValueMap } from "../msToMap/msToMap";

/**
 * format a map to string with Intl.listFormat
 * @param unitMap a Map with the key as the units and the values the amount of each unit
 * @param options options you wants
 * @returns a formatted list string based on the given map
 */
export function formatListMap(unitMap: UnitValueMap, options: Omit<FormatListOptions, "max">): string {
	const { locale, localeMatcher, listType: type, listStyle, relativeStyle } = options;

	const rl = createRelativeTimeFormat(locale, { localeMatcher, style: relativeStyle });

	const lf = new Intl.ListFormat(locale, {
		localeMatcher,
		style: listStyle,
		type,
	});

	return lf.format(formatParts(unitMap, rl));
}

// tests is via formatList
