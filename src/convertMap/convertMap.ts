import { reducePartsOf2, reducePartsOf3 } from "../reduce/reduce";
import { day, hour, minute, second, unitTypes, week, year, type UnitType } from "../units/units";

/**
 * A map to be used for createConvertMap
 */
//@ts-ignore
const convertMap: Record<UnitType, number> = {
	[unitTypes.year]: year,
	[unitTypes.week]: week,
	[unitTypes.day]: day,
	[unitTypes.hour]: hour,
	[unitTypes.minute]: minute,
	[unitTypes.second]: second,
};

/**
 * create a Map with unitType in the chosen locale and the ms in unit value
 * @param rl RelativeTimeFormat object
 * @returns a Map with unitType in the chosen locale and the ms in unit value
 */
export function createConvertMap(rl: Intl.RelativeTimeFormat): Map<string, number> {
	const quarterSingular = rl.formatToParts(1, "quarter");
	const quartersPlural = rl.formatToParts(2, "quarters");

	const map = new Map<string, number>();

	for (const [key, value] of Object.entries(convertMap)) {
		const singleParts = rl.formatToParts(1, key as UnitType);
		const pluralParts = rl.formatToParts(2, key as UnitType);

		const single = (singleParts.length == 3 ? reducePartsOf3 : reducePartsOf2)(singleParts, quarterSingular, false)[0].trim().replace(".", "");
		map.set(single, value);
		const plural = (pluralParts.length == 3 ? reducePartsOf3 : reducePartsOf2)(pluralParts, quartersPlural, false)[0].trim().replace(".", "");
		map.set(plural, value);
	}
	return map;
}
