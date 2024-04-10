import { createRelativeTimeFormat } from "../common/common";
import { createConvertMap } from "../convertMap/convertMap";

/**
 * check if a string value is a number
 * @param value a value to check
 */
function isNumber(value: string): value is `${number}` {
	// @ts-ignore, we use js casting to check if the value is only a number
	return value == parseFloat(value);
}

/**
 * check if a string value begins with a number
 * @param value value to check
 */
function hasNumber(value: string): value is `${number}${string}` {
	return /^\d/g.test(value);
}

export interface toMsOptions {
	locale?: string;
	style: Intl.RelativeTimeFormatStyle;
	localeMatcher?: Intl.RelativeTimeFormatLocaleMatcher;
}

/**
 * parse a string to ms
 * @param value a formatted string, for example `year 5 days 10minutes`
 * @param style the style you've formatted the value (required)
 * @param locale the locale used
 * @param localeMatcher how to match the locale (in general can be ignored)
 * @returns the time in ms based on the given value (if not valid, it'll give null)`
 * @example ```js
 * parseToMs("year 5 days 10 minutes", { locale: "en-US", style: "long" }) => 79_974_600_000
 * ```
 */
export function parseToMs(value: string, { locale, style, localeMatcher }: toMsOptions): number | null {
	value = value.trim().toLowerCase();
	if (isNumber(value)) {
		return parseFloat(value);
	}
	const rl = createRelativeTimeFormat(locale, {
		style,
		localeMatcher,
	});
	const convertMap = createConvertMap(rl);
	// splitting by every space
	const values = value.replaceAll(".", "").split(/ +/g);
	let ms = 0;
	ms: for (let entry: string | undefined; (entry = values.shift()); ) {
		entry = entry.trim();
		if (isNumber(entry)) {
			// just a number
			const nr = Math.abs(parseFloat(entry));
			const next = values.at(0);

			if (!next) {
				// current is ms and there is nothing more
				ms += nr;
				break ms;
			}

			if (hasNumber(next)) {
				// current is ms, next can be for example be "10hours"
				ms += nr;
				continue ms;
			}

			values.shift(); // removing unit from values;
			const time = convertMap.get(next);

			if (!time) {
				return null;
			}

			ms += time * nr;
			continue ms;
			// 	// here we will need to parse the unit
		}

		if (hasNumber(entry)) {
			const nr = Math.abs(parseFloat(entry));
			const unit = entry.substring(nr.toString().length);
			const time = convertMap.get(unit);
			if (!time) {
				return null;
			}
			ms += nr * time;
			continue ms;
		}
		// just the unit now
		const time = convertMap.get(entry);
		if (!time) {
			return null;
		}
		ms += time;

		// while ((let entry = values.shift())) {
	}
	return ms;
}
