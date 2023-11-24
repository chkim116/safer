import { toString } from "./toString";

/**
 * Safely adds the value of the second argument to the left of the value in the first argument.
 *
 * @param val - The value to which the leftPad value will be added.
 * @param leftPad - The value to be added to the left of the original value.
 * @param defValue - The default value to be used if the original value is undefined or null. Default is an empty string `""`.
 *
 * @returns The original value with the leftPad value added to its left.
 *
 * @example
 * // Example 1: When the value exists
 * const result1 = padLeft("Hello", "----");
 * // Result: "----Hello"
 *
 * // Example 2: When the value is undefined, using the default value
 * const result2 = padLeft(undefined, "----", "Default");
 * // Result: "----Default"
 *
 * // Example 3: When the value is null, with no default value
 * const result3 = padLeft(null, "----");
 * // Result: "----"
 *
 * // Example 4: When the value is a number
 * const result4 = padLeft(123, "----");
 * // Result: "----123"
 */
export function padLeft(val: unknown, leftPad: string, defValue = ""): string {
  const stringValue = toString(val, defValue);
  return `${leftPad}${stringValue}`;
}
