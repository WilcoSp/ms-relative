function isNumber(value: string) {
	// @ts-ignore, we use js casting
	return value == parseFloat(value);
}

function hasNumber(value: string) {
	return /^\d/g.test(value);
}

export interface toMsOptions {
	locale?: string;
	style: Intl.RelativeTimeFormatStyle;
}

export function toMs(value: string, { locale, style }: toMsOptions) {
	value = value.trim().toLowerCase();
	if (isNumber(value)) {
		return parseFloat(value);
	}
	// splitting by every space
	const values = value.split(/ +/g);
	let ms = 0;
	ms: for (let entry: string | undefined; (entry = values.shift()); ) {
		entry = entry.trim();
		if (isNumber(entry)) {
			const nr = Math.abs(parseFloat(entry));
			const next = values.shift();

			if (!next) {
				// current is ms and there is nothing more
				ms += nr;
				break;
			}

			if (hasNumber(next)) {
				// current is ms, next can be for example be "10hours" etc
				ms += nr;
				values.unshift(next);
				continue ms;
			}

			// here we will need to parse the unit
		}
	}

	return ms;

	// while ((let entry = values.shift())) {

	// }
}
