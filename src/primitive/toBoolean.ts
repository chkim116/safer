import { isBoolean, isEmptyObject } from "../utils";

/**
 * Safely converts a value to a boolean type.
 *
 * @param val - The value to be converted to a boolean.
 * @param strict - If set to `true`, the function behaves strictly, recognizing only the boolean literals 'true' and 'false'.
 *
 * @remarks
 * - Returns `true` if the value is the string 'true', and `false` if the value is the string 'false'.
 * - Converts other truthy and falsy values to booleans if the second argument is `false` (default is `false`).
 * - If the second argument is `false`, the function always evaluates to `true`.
 *
 * @returns A boolean value.
 *
 * @example
 * // Example 1: When the value is the string 'true'
 * const result1 = toBoolean("true");
 * // Result: true
 *
 * // Example 2: When the value is the string 'false'
 * const result2 = toBoolean("false");
 * // Result: false
 *
 * // Example 3: When the value is a number
 * const result3 = toBoolean(123);
 * // Result: true
 *
 * // Example 4: When the value is an empty array
 * const result4 = toBoolean([]);
 * // Result: false
 *
 * // Example 5: When the value is an array
 * const result4 = toBoolean([1]);
 * // Result: true
 *
 * // Example 6: when the strict is true
 * const result6= toBoolean(123, true);
 * // Result: false
 * // because number is not a literal 'true' 'false' and is not a boolean type.
 */
export function toBoolean(val: unknown, strict = false): boolean {
  if (val === "true" || val === "false") {
    return val === "true";
  }

  if (isBoolean(val)) {
    return val;
  }

  if (strict) {
    return false;
  }

  if ((Array.isArray(val) && val.length <= 0) || isEmptyObject(val)) {
    return false;
  }

  return !!val;
}
