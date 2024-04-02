/**
 * create an RelativeTimeFormat object
 * @param locale the wanted locale
 * @param options the style and in which way you want the locale to match (defaults are set by runtime), numeric with will always be set to "always"
 * @returns a new RelativeTimeFormat object
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
 */
export function createRelativeTimeFormat(locale?: string, options?: Pick<Intl.RelativeTimeFormatOptions, "style" | "localeMatcher">) {
	return new Intl.RelativeTimeFormat(locale, {
		numeric: "always",
		...options,
	});
}
