import { unitTypes, day, hour, minute, second, week, year, type UnitType } from "../units/units";

/**
 * return type for getBiggestValueAndType
 */
export interface ValueAndType {
	/**
	 * the unit type of the value
	 */
	type: UnitType;
	/**
	 * the amount of the specific unit type
	 */
	value: number;
	/**
	 * time left over after subtracting the unit type * amount from the given time
	 */
	leftOverTime: number;
}

/**
 * get the biggest value & unit type that can be extracted from the given time in milliseconds
 * @param time time in milliseconds
 * @returns an object containing the type, value & leftOverTime
 */
export function getBiggestValueAndType(time: number): ValueAndType {
	switch (true) {
		case time > year: {
			return createValueAndType(time, year, unitTypes.year);
		}
		case time > week: {
			return createValueAndType(time, week, unitTypes.week);
		}
		case time > day: {
			return createValueAndType(time, day, unitTypes.day);
		}
		case time > hour: {
			return createValueAndType(time, hour, unitTypes.hour);
		}
		case time > minute: {
			return createValueAndType(time, minute, unitTypes.minute);
		}
		case time > second: {
			return createValueAndType(time, second, unitTypes.second);
		}
		default: {
			return {
				leftOverTime: 0,
				value: time / second,
				type: unitTypes.second,
			};
		}
	}
}

/**
 * creates the object that returns the value, type & leftOverTime
 * @param time time in milleseconds
 * @param unitValue the amount of milliseconds the given unit contains
 * @param type the type of unit
 * @returns an object containing the type, value & leftOverTime
 */
function createValueAndType(time: number, unitValue: number, type: UnitType): ValueAndType {
	const value = Math.floor(time / unitValue);
	const leftOverTime = time - unitValue * value;

	return {
		leftOverTime,
		value,
		type,
	};
}
