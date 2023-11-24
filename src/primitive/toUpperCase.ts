import { toString } from "./toString";

/**
 * Safely converts a value to uppercase.
 *
 * @param val - The value to be converted to uppercase.
 * @param locales - A string with a BCP 47 language tag, or an array of such strings. For the full specification, refer to [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase#locales).
 *
 * @returns The value converted to uppercase.
 *
 * @example
 * // Example 1: When the value is a string
 * const result1 = toUpperCase("hello");
 * // Result: "HELLO"
 *
 * // Example 2: When the value is a number
 * const result2 = toUpperCase(123);
 * // Result: "123"
 *
 * // Example 3: When the value is an empty string
 * const result3 = toUpperCase("");
 * // Result: ""
 */
export function toUpperCase(val: unknown, locales = "en-US") {
  const str = toString(val);

  return str.toLocaleUpperCase(locales);
}
