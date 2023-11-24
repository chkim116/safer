import { isArray, isObject, toString } from "..";

/**
 * Converts the input value into an object representation based on its type.
 *
 * @param value - The value to be converted into an object.
 * @returns A Record<string, unknown> representation of the input value.
 *
 * @remarks
 * - If the input `value` is an object, it returns the same object.
 * - If the input `value` is an array, it creates an object using `Object.fromEntries()` from the array.
 * - For other types (string, number, boolean, nullish), it creates a Map and converts it into an object using `Object.fromEntries()`.
 *
 * @example
 * ```ts
 * toObject({ name: "John", age: 23 }); // { name: "John", age: 23 }
 * toObject(new Map([["name", "John"], ["age", 23]])); // { name: "John", age: 23 }
 * toObject([["name", "John"], ["age", 23]]); // { name: "John", age: 23 }
 *
 * toObject(1); // { "1": 1 }
 * toObject("John"); // { John: "John" }
 * toObject(null); // { '': null }
 * ```
 */
export function toObject(value: unknown): Record<string, any> {
  if (isObject(value)) {
    return value;
  }

  if (value instanceof Map) {
    try {
      return Object.fromEntries(value);
    } catch (err) {
      return {};
    }
  }

  if (value instanceof Set) {
    try {
      const entries = Array.from(value, (val) => [val, val]);
      return Object.fromEntries(entries);
    } catch (err) {
      return {};
    }
  }

  if (isArray(value)) {
    try {
      return Object.fromEntries(value);
    } catch (err) {
      return {};
    }
  }

  return { [toString(value)]: value };
}
