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

export const second = /* @__PURE__ */ 1000,
	minute = /* @__PURE__ */ second * 60,
	hour = /* @__PURE__ */ minute * 60,
	day = /* @__PURE__ */ hour * 60,
	week = /* @__PURE__ */ day * 7,
	year = /* @__PURE__ */ day * 365.25;
