import type { RelativeOptions } from "../common/common";
import { formatMap } from "../formatMap/formatMap";
import { objectToUnitMap } from "../ObjectToUnitMap/OtUm";
import type { UnitType } from "../units/units";

/**
 * formats an object to a relative time string
 * @param obj an object with the key as the units and the values the amount of each unit
 * @param options options you want for the formatting
 * @returns a formatted string based on the given map
 */
export function formatObject(obj: Partial<Record<UnitType, number>>, options: RelativeOptions & { locale?: string } = {}): string {
	return formatMap(objectToUnitMap(obj), options);
}
