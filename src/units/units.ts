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
export const second = /* @__PURE__ */ 1000,
	/**
	 * amount of ms in a minute
	 */
	minute = /* @__PURE__ */ second * 60,
	/**
	 * amount of ms in an hour
	 */
	hour = /* @__PURE__ */ minute * 60,
	/**
	 * amount of ms in a day
	 */
	day = /* @__PURE__ */ hour * 60,
	/**
	 * amount of ms in a week
	 */
	week = /* @__PURE__ */ day * 7,
	/**
	 * amount of ms in a year
	 */
	year = /* @__PURE__ */ day * 365.25;
