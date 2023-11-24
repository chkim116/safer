import { toString } from "./toString";
/**
 * Safely finds occurrences of a specified value in the given string and replaces them with another value.
 *
 * @param val - The input string in which to search for occurrences. Internally, it is always processed using `safeString` and is guaranteed to be of string type.
 * @param search - The value to search for. This can be either a string or a regular expression.
 * @param replace - The value to replace the occurrences found. This value is used to replace the matched part of the string.
 *
 * @remarks
 * - This function is not equivalent to `replaceAll`. To use `replaceAll`, consider using a regular expression.
 *
 * @returns The string with replaced occurrences.
 *
 * @example
 * // Example 1: Replace a specific substring
 * const result1 = replace("Hello, world!", "world", "universe");
 * // Result: "Hello, universe!"
 *
 * // Example 2: Replace using a regular expression
 * const result2 = replace("abc123abc", /abc/g, "def");
 * // Result: "def123def"
 *
 * // Example 3: When the input is not a string
 * const result3 = replace(123, "2", "4");
 * // Result: "143" (replace occurrences of "2" with "4")
 */
export function replace(
  val: unknown,
  search: string | RegExp,
  replace: string
): string {
  const str = toString(val);
  return str.replace(search, replace);
}
