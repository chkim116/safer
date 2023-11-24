import { toString } from "./toString";

/**
 * Adds the second argument value to the right of the first argument.
 *
 * @param value The initial value to which the right padding is applied
 * @param rightPad The value to insert on the right side
 * @param defValue Default value in case 'value' is null or undefined
 *
 * @returns A string resulting from adding 'rightPad' to the right of 'value'
 *
 * @example
 * // Example 1: When the value exists
 * const result1 = padRight("Hello", "----");
 * // Result: "Hello----"
 *
 * // Example 2: When the value is undefined, using the default value
 * const result2 = padRight(undefined, "----", "Default");
 * // Result: "Default----"
 *
 * // Example 3: When the value is null, with no default value
 * const result3 = padRight(null, "----");
 * // Result: "----"
 *
 * // Example 4: When the value is a number
 * const result4 = padRight(123, "----");
 * // Result: "123----"
 */
export function padRight(value: unknown, rightPad: string, defValue = "") {
  const str = toString(value, defValue);

  return `${str}${rightPad}`;
}
