import { toString } from "./toString";

/**
 * Safely converts a value to lowercase.
 *
 * @param val - The value to be converted to lowercase.
 * @param locales - A string with a BCP 47 language tag, or an array of such strings. For the full specification, refer to [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase#locales).
 *
 * @returns The value converted to lowercase.
 *
 * @example
 * // Example 1: When the value is a string
 * const result1 = toLowerCase("Hello");
 * // Result: "hello"
 *
 * // Example 2: When the value is a number
 * const result2 = toLowerCase(123);
 * // Result: "123"
 *
 * // Example 3: When the value is an empty string
 * const result3 = toLowerCase("");
 * // Result: ""
 */
export function toLowerCase(val: unknown, locales = "en-US"): string {
  const str = toString(val);
  return str.toLocaleLowerCase(locales);
}
