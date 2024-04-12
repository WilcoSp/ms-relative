/**
 * `Style` & `LocaleMatcher` from Intl.RelativeTimeFormatOptions
 *
 * [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#options)
 */
export type RelativeOptions = Pick<Intl.RelativeTimeFormatOptions, "style" | "localeMatcher">;

/**
 * create an RelativeTimeFormat object
 * @param locale the wanted locale
 * @param options the style and in which way you want the locale to match (defaults are set by runtime), numeric with will always be set to "always"
 * @returns a new RelativeTimeFormat object
 * @link [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)
 */
export function createRelativeTimeFormat(locale?: string, options?: RelativeOptions): Intl.RelativeTimeFormat {
	return new Intl.RelativeTimeFormat(locale, {
		numeric: "always",
		...options,
	});
}
