import { isBoolean, isNumber, isString } from "../utils";

/**
 * Safely converts a value to a string type.
 *
 * @param val - The value to be converted to a string.
 * @param def - The default value to be returned if the first argument is not of string type. Default is an empty string `""`.
 * @param allowEmpty - If set to `true` (default), the default value is returned when the first argument is an empty string.
 *
 * @remarks
 * - If the first argument is not of string type, always return the second argument.
 * - If the third argument is true, the second argument is returned if the value of the first argument is an empty string.
 *
 * @returns A string type value.
 *
 * @example
 * // Example 1: When the value is a string
 * const result1 = toString("Hello");
 * // Result: "Hello"
 *
 * // Example 2: When the value is a number
 * const result2 = toString(123);
 * // Result: "123"
 *
 * // Example 3: When the value is a boolean
 * const result2 = toString(true);
 * // Result: "true"
 *
 * // Example 4: When the value is a Object
 * const result2 = toString({});
 * // Result: ""
 *
 * // Example 5: When the value is an empty string and allowEmpty is false
 * const result3 = toString("", "Default", false);
 * // Result: "Default"
 */
export function toString(val: unknown, def = "", allowEmpty = true): string {
  let currentDef = isString(def) ? def : "";

  if (!isString(val)) {
    if (isNumber(val) || isBoolean(val)) {
      return String(val);
    }

    return currentDef;
  }

  if (!allowEmpty && val === "") {
    return currentDef;
  }

  return val;
}
