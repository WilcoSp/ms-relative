/**
 * reduce a RelativeTimeFormat.format to the number and unit
 * @param from to reduce from
 * @param comparison to compare with (should be quarter or month as these aren't being used)
 * @returns string with number and unit (for example: `1 day` or `1d`)
 */
export function reducePartsOf3(from: Intl.RelativeTimeFormatPart[], comparison: Intl.RelativeTimeFormatPart[]) {
	return from.reduce((acc, value, index) => {
		if ("unit" in value || value.value != comparison[index].value) {
			acc.push(value.value);
		}

		return acc;
	}, [] as string[]);
}
