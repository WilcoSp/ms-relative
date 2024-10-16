/**
 * all unit types used by msToMap & msToObject

 */
export const unitTypes: Record<UnitType, UnitType> = {
	year: "year",
	week: "week",
	day: "day",
	hour: "hour",
	minute: "minute",
	second: "second",
	month: "month",
} satisfies Record<UnitType, UnitType>;

/**
 * used as keys for msToMap & msToObject
 */
export type UnitType = Exclude<Intl.RelativeTimeFormatUnitSingular, "quarter">; //(typeof unitTypes)[keyof typeof unitTypes];

/**
 * amount of ms in a second
 */
export const second = /* @__PURE__ */ 1000;
/**
 * amount of ms in a minute
 */
export const minute = /* @__PURE__ */ second * 60;
/**
 * amount of ms in an hour
 */
export const hour = /* @__PURE__ */ minute * 60;
/**
 * amount of ms in a day
 */
export const day = /* @__PURE__ */ hour * 60;
/**
 * amount of ms in a week
 */
export const week = /* @__PURE__ */ day * 7;
/**
 * amount of ms in a year
 */
export const year = /* @__PURE__ */ day * 365.25;
