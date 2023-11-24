import { isArray, isString, toString } from "..";

/**
 * Joins elements of an array into a string using a specified separator.
 *
 * @param val - The value to be joined (should be an array).
 * @param separator - The string used to separate each element in the resulting string.
 * @param def - The default value returned if the provided value is not an array or if an error occurs during the join operation (optional).
 * @returns A string containing the elements of the array joined by the specified separator, or the default value if the input is not an array or an error occurs.
 *
 * @remarks
 * - If `val` is an array, the elements will be concatenated into a string using the specified `separator`.
 * - If `val` is not an array or an error occurs during the join operation, the function returns the default value `def`.
 * - The `separator` parameter specifies the character(s) used to separate each element in the resulting string.
 *
 * @example
 * ```ts
 * const arr = [1, 2, 3, 4, 5]; // number[]
 *
 * join(arr, ","); // "1,2,3,4,5"
 * join(arr, ", "); // "1, 2, 3, 4, 5"
 * join(arr, " | "); // "1 | 2 | 3 | 4 | 5"
 * join(arr, " | ", "default"); // "1 | 2 | 3 | 4 | 5"
 *
 * join(null, ", "); // "" first parameter should be an array
 *
 * join(arr, 1); // "" second parameter should be a string
 * join(arr, 1, "default"); // "default"
 * ```
 */
export function join(val: unknown, separator: string, def = ""): string {
  if (!isString(separator)) {
    return def;
  }

  if (isArray(val)) {
    try {
      return val.join(separator);
    } catch (err) {
      return toString(def);
    }
  }

  return toString(def);
}
