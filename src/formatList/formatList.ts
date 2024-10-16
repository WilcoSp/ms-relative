import { createRelativeTimeFormat } from "../common/common";
import { formatListMap } from "../formatListMap/formatListMap";
import { formatParts } from "../formatParts/formatParts";
import { msToMap, type msToMapOptions } from "../msToMap/msToMap";

/**
 * options for FormatList function
 */
export interface FormatListOptions extends msToMapOptions {
	/**
	 * the locale you want to use
	 */
	locale?: string;
	/**
	 * the style to use with Intl.relativeFormat
	 */
	relativeStyle?: Intl.RelativeTimeFormatStyle;
	/**
	 * the list style for Intl.ListFormat
	 */
	listStyle?: Intl.ListFormatStyle;
	/**
	 * the list style you want to use
	 * @default "conjunction"
	 */
	listType?: Intl.ListFormatType;
	/**
	 * how to match the given locale
	 */
	localeMatcher?: Intl.RelativeTimeFormatLocaleMatcher;
}

/**
 * format time in ms to string with Intl.listFormat
 * @param time time is milliseconds
 * @param options options you wants
 * @returns a formatted list string based on your options
 * @example ```ts
 * formatList(1080003000, { relativeStyle: "long", listStyle: "long", locale:  "en-US"}) => "5 days and 3 seconds"
 * ```
 * @example ```ts
 * formatList(489348005000, { relativeStyle: "short", listStyle: "short", listType: "unit", max: 2, locale: "en-US") => "6 yr., 10 wk."
 * ```
 */
export function formatList(time: number, options: FormatListOptions = {}): string {
	const { max } = options;
	const unitMap = msToMap(time, { max });

	return formatListMap(unitMap, options);
}
