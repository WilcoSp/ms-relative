import { type RelativeOptions } from "../common/common";
import { formatMap } from "../formatMap/formatMap";
import { msToMap, type msToMapOptions } from "../msToMap/msToMap";

/**
 * Options for `format`
 */
export type FormatOptions = msToMapOptions &
	RelativeOptions & {
		/**
		 * the locale you want to use
		 */
		locale?: string;
	};

/**
 * format time in ms to a string based on your options
 * @param time time is milliseconds
 * @param options options you want
 * @returns a formatted string based on your options
 *
 * @example ```ts
 * format(1080003000, { style: "long", locale:  "en-US"}) => "5 days 3 seconds"
 * ```
 * @example ```ts
 * format(489348005000, { style: "short", max: 2, locale: "en-US") => "6 yr. 10 wk."
 * ```
 */
export function format(time: number, options: FormatOptions = {}): string {
	const { max, locale } = options;
	const unitMap = msToMap(time, { max });

	// const rl = createRelativeTimeFormat(locale, options);

	// return formatParts(unitMap, rl).join(" ");

	return formatMap(unitMap, options);
}
