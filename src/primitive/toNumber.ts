/**
 * Safely converts a value to a number.
 *
 * @param val - The value to be converted to a number.
 * @param def - The default value to be used if the conversion fails. Default is 0.
 * @param allowNegative - If set to `true` (default), allows negative numbers; otherwise, negative numbers are treated as 0.
 *
 * @returns The value converted to a number.
 *
 * @example
 * // Example 1: When the value is a number
 * const result1 = toNumber(123);
 * // Result: 123
 *
 * // Example 2: When the value is a string representing a number
 * const result2 = toNumber("456");
 * // Result: 456
 *
 * // Example 3: When the value is a non-numeric string
 * const result3 = toNumber("abc");
 * // Result: 0
 *
 * // Example 4: When the value is undefined, using the default value
 * const result4 = toNumber(undefined, 789);
 * // Result: 789
 *
 * // Example 5: When negative numbers are not allowed
 * const result5 = toNumber(-123, undefined, false);
 * // Result: 0
 */
export function toNumber(val: unknown, def = 0, allowNegative = true): number {
  const num = Number(val);

  if (isNaN(num)) {
    return def;
  }

  if (!allowNegative && num < 0) {
    return 0;
  }

  return num;
}
