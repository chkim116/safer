import { isRegExp, isString } from "../utils";

/**
 * Creates an array of values by splitting the input value using the specified separator.
 *
 * @param value The input value to be split into an array.
 * @param separator The separator used to split the input value.
 * @param def The default value to be returned if the input value is invalid. Defaults to an empty array ([]).
 *
 * @remark
 * If the input value is invalid (null, undefined, or not a string), it returns the default value as is.
 * If an error occurs during splitting, it returns the default value as is.
 *
 * @returns An array of values resulting from splitting the input value by the specified separator,
 *          or the default value as is if it's invalid or an error occurs during splitting.
 *
 * @example
 * // Example 1: When the value exists
 * const result1 = splitBy("apple,banana,orange", ",");
 * // Result: ["apple", "banana", "orange"]
 *
 * // Example 2: When the value is undefined, using the default value
 * const result2 = splitBy(undefined, ",");
 * // Result: []
 *
 * // Example 3: When the value is null, with no default value
 * const result3 = splitBy(null, ",");
 * // Result: []
 *
 * // Example 4: When the value is a number
 * const result4 = splitBy(123, ",");
 * // Result: []
 *
 * // Example 5: When an invalid separator is used
 * const result5 = splitBy("apple,banana,orange", "[");
 * // Result: ["apple,banana,orange"]
 */
export function split(
  value: unknown,
  separator: string | RegExp,
  def: string[] = []
) {
  // Check if the value is falsy or not a string
  if (!value || !isString(value)) {
    return def;
  }

  // check if the separator is not a string or regexp
  if (!isString(separator) && !isRegExp(separator)) {
    return def;
  }

  try {
    // Attempt to split the string using the specified separator
    return value.split(separator);
  } catch (err) {
    // Return the default value in case of an error
    return def;
  }
}
