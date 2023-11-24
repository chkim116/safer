import { isArray, isObject } from "..";

/**
 * Converts the input value into an array representation based on its type.
 *
 * @param value - The value to be converted into an array.
 * @returns An array representation of the input value.
 *
 * @remarks
 * - If the input `value` is already an array, it returns the same array.
 * - If the input `value` is an object, it converts it to an array using `Object.entries()`.
 * - If the input `value` is a Map or Set, it converts it to an array using `Array.from()`.
 * - For other types, it creates an array containing the input value as its single element.
 *
 * @example
 * ```ts
 * toArray([1, 2, 3]); // [1, 2, 3]
 * toArray({ name: "John", age: 23 }); // [["name", "John"], ["age", 23]]
 * toArray(new Map([["name", "John"], ["age", 23]])); // [["name", "John"], ["age", 23]]
 *
 * toArray(1); // [1]
 * toArray("John"); // ["John"]
 * toArray(null); // [null]
 * ```
 */
export function toArray(value: unknown): any[] {
  if (isArray(value)) {
    return value;
  }

  if (isObject(value)) {
    try {
      return Object.entries(value);
    } catch (err) {
      return [];
    }
  }

  if (value instanceof Map || value instanceof Set) {
    try {
      return Array.from(value);
    } catch (err) {
      return [];
    }
  }

  return [value];
}
