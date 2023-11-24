import { deepCompare, isArray, isNullish, isObject } from "..";

/**
 * Checks if a value is included in an array or a single value.
 *
 * @param val - The value to be checked.
 * @param keywords - An array or a single value for validation.
 * @returns `true` if the value is included, otherwise `false`.
 *
 * @example
 * includes([1, 2, 3], 2); // true
 * includes([1, 2, 3], 4); // false
 *
 * includes([1, 2, 3], 2); // true
 * includes([1, 2, 3], 4); // false
 *
 * includes({ name: "John", age: 23 }, { name: "John", age: 23 }); // true
 * includes({ name: "John", age: 23 }, { name: "John", age: 24 }); // false
 *
 * includes([1, 2, 3], [1, 2, 3]); // true
 * includes([1, 2, 3], [1, 2, 3, [4]]); // false
 * includes([1, 2, 3, [4]], [1, 2, 3, [4]]); // true
 *
 */
export function includes<T>(keywords: T, val: unknown): val is T;
export function includes<T>(keywords: T[], val: unknown): val is T;
export function includes<T>(keywords: T | T[], val: unknown): val is T {
  if (isNullish(val)) {
    return false;
  }

  let validate: Set<T> = new Set();

  if (isArray(keywords)) {
    keywords.map((value) => {
      validate.add(value);
    });
  } else {
    validate.add(keywords);
  }

  try {
    return [...validate].some((value) => {
      if (isObject(value) || isArray(value)) {
        return deepCompare(value, val);
      }

      return value === val;
    });
  } catch (err) {
    return false;
  }
}
