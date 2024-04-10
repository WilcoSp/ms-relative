/**
 * reduce a RelativeTimeFormat.format to the number and unit for a locale with 3 parts
 * @param from to reduce from
 * @param comparison to compare with (should be quarter or month as these aren't being used)
 * @returns string with number and unit (for example: `1 day` or `1d`)
 */
export function reducePartsOf3(from: Intl.RelativeTimeFormatPart[], comparison: Intl.RelativeTimeFormatPart[], includeValue: boolean = true): string[] {
	return from.reduce((acc, value, index) => {
		if ("unit" in value) {
			if (includeValue) {
				acc.push(value.value);
			}
			return acc;
		}
		if (value.value != comparison[index].value) {
			acc.push(value.value);
		}

		return acc;
	}, [] as string[]);
}

const space = " ";

/**
 * reduce a RelativeTimeFormat.format to the number and unit for a locale with 2 parts
 * @param from to reduce from
 * @param comparison to compare with (should be quarter or month as these aren't being used)
 * @returns string with number and unit (for example: `1 day` or `1d`)
 */
// js runtimes are kinda lazy in a good way with how they do month & 'over'/'ago' with the latter not changing
export function reducePartsOf2(from: Intl.RelativeTimeFormatPart[], comparison: Intl.RelativeTimeFormatPart[], includeValue: boolean = true): string[] {
	return from.reduce((acc, value, index) => {
		if ("unit" in value) {
			if (includeValue) {
				acc.push(value.value);
			}
			return acc;
		}
		if (value.value.trim().includes(space)) {
			// has spaces
			const split = value.value.split(space);
			const cSplit = comparison[index].value.split(space);

			acc.push(split.filter((v, i) => v !== cSplit[i] || v == space).join(""));
			return acc;
		}

		const split = new Set(value.value.split(""));
		const cSplit = comparison[index].value.split("");

		cSplit.forEach(v => {
			if (v == space) return;
			split.delete(v);
		});

		acc.push([...split].join(""));

		return acc;
	}, [] as string[]);
}
