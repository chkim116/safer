import { toNumber, toString } from ".";

/**
 * Safely formats a number using the Intl.NumberFormat API.
 *
 * @param val - The value to be formatted.
 * @param locales - A string with a BCP 47 language tag, or an array of such strings.
 * @param options - An options object that defines the formatting options.
 * @returns The formatted number as a string, or the input value if formatting fails.
 *
 * @example
 * // Example 1: When the value is a number
 * const result1 = numberFormat(123456.789);
 * // Result: "123,456.789"
 *
 * // Example 2: When the value is a string
 * const result2 = numberFormat("123456.789");
 * // Result: "123,456.789"
 *
 * // Example 3: When the value is a string representing a number
 * const result3 = numberFormat("123456.789");
 * // Result: "123,456.789"
 */
export function numberFormat(
  val: unknown,
  locales?: Intl.LocalesArgument,
  options?: Intl.NumberFormatOptions
): string {
  const num = toNumber(val, 0);

  try {
    return num.toLocaleString(locales, options);
  } catch (err) {
    return toString(num, "0");
  }
}
