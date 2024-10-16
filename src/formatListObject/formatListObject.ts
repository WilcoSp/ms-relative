import type { FormatListOptions } from "../formatList/formatList";
import { formatListMap } from "../formatListMap/formatListMap";
import { objectToUnitMap } from "../ObjectToUnitMap/OtUm";
import type { UnitType } from "../units/units";

/**
 * formats an object to string with Intl.listFormat
 * @param obj an object with the key as the units and the values the amount of each unit
 * @param options options you want for the formatting
 * @returns a formatted string based on the given map
 */
export function formatListObject(obj: Partial<Record<UnitType, number>>, options: Omit<FormatListOptions, "max">): string {
	return formatListMap(objectToUnitMap(obj), options);
}
