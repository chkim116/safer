import { replace } from "./replace";
import { toString } from "./toString";

/**
 * Remove all spaces from the input value.
 *
 * @param val The input value to be processed.
 * @param strict When activated (true), only spaces(`/ /`) are removed. Defaults to false.
 * @returns A string with spaces removed according to the strict parameter. If the input is not a string, it returns an empty string.
 *
 * @example
 * // Example 1: Removing all spaces from a string
 * const result1 = squash("Hello World");
 * // Result: "HelloWorld"
 *
 * // Example 2: Removing only spaces when strict mode is true
 * const result2 = squash("Hello World", true);
 * // Result: "HelloWorld"
 *
 * // Example 3: Handling undefined input
 * const result3 = squash(undefined);
 * // Result: ""
 *
 * // Example 4: Handling null input
 * const result4 = squash(null);
 * // Result: ""
 *
 * // Example 5: Handling non-string input
 * const result5 = squash(123);
 * // Result: "123"
 */
export function squash(val: unknown, strict = false) {
  const str = toString(val);

  let reg = /\s/g;

  if (strict) {
    reg = / /g;
  }

  return replace(str, reg, "");
}
