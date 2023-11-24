import { isObject, isString } from "..";

/**
 * Parses a JSON string into an object or returns a default object if parsing fails or the input is not a string.
 *
 * @param val - The value to be parsed (should be a string containing JSON data).
 * @param def - The default object returned if parsing fails or the input is not a string (optional).
 * @returns The parsed JSON object if successful, otherwise the default object.
 *
 * @remarks
 * - If `val` is a valid JSON string, it will be parsed into an object.
 * - If `val` is not a string or an error occurs during parsing, the function returns the default object `def`.
 *
 * @example
 * ```ts
 * parse('{"name":"John","age":23}'); // { name: "John", age: 23 }
 * parse('{"name":"John","age":23}', { name: "Jane", age: 21 }); // { name: "John", age: 23 }
 * parse(null); // {}
 * parse(null, { name: "Jane", age: 21 }); // { name: "Jane", age: 21 }
 * ```
 */
export function parse(val: unknown, def = {}) {
  const currentDef = isObject(def) ? def : {};

  try {
    if (!isString(val)) {
      return currentDef;
    }

    return JSON.parse(val);
  } catch (err) {
    return currentDef;
  }
}
