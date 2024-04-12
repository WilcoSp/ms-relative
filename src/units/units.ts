/**
 * all unit types used by msToMap & msToObject
 */
export const unitTypes = {
	year: "year",
	week: "week",
	day: "day",
	hour: "hour",
	minute: "minute",
	second: "second",
} satisfies Partial<Record<Intl.RelativeTimeFormatUnitSingular, Intl.RelativeTimeFormatUnitSingular>>;

/**
 * used as keys for msToMap & msToObject
 */
export type UnitType = (typeof unitTypes)[keyof typeof unitTypes];

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
