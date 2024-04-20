import { createRelativeTimeFormat } from "../common/common";
import { formatParts } from "../formatParts/formatparts";
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
 * format(1080003000, { relativeStyle: "long", listStyle: "long", locale:  "en-US"}) => "5 days and 3 seconds"
 * ```
 * @example ```ts
 * format(489348005000, { relativeStyle: "short", listStyle: "short", max: 2, locale: "en-US") => "6 yr., 10 wk."
 * ```
 */
export function formatList(time: number, options: FormatListOptions = {}): string {
	const { locale, max, localeMatcher, listType: type, listStyle, relativeStyle } = options;
	const unitMap = msToMap(time, { max });

	const rl = createRelativeTimeFormat(locale, { localeMatcher, style: relativeStyle });

	const lf = new Intl.ListFormat(locale, {
		localeMatcher,
		style: listStyle,
		type,
	});

	return lf.format(formatParts(unitMap, rl));
}
