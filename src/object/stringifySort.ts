import { isObject, toString } from "..";

/**
 * Converts a JavaScript object to a sorted JSON string or returns a default string if conversion fails or the input is not an object.
 *
 * @param params - The object to be converted to a JSON string and sorted by keys.
 * @param def - The default string returned if conversion fails or the input is not an object (optional).
 * @returns The sorted JSON string representing the object if successful, otherwise the default string.
 *
 * @remarks
 * - If `params` is a valid object, its keys will be sorted alphabetically, and the object will be converted to a JSON string.
 * - If `params` is not an object or an error occurs during conversion, the function returns the default string `def`.
 *
 * @example
 * ```ts
 * stringifySort({ name: "John", age: 23 }); // '{"age":23,"name":"John"}'
 *
 * stringifySort(null); // ""
 * stringifySort(null, "default"); // "default"
 * ```
 */
export function stringifySort(params: Record<string, any>, def = "") {
  const currentDef = toString(def);

  if (!isObject(params)) {
    return currentDef;
  }

  try {
    const sorted = Object.fromEntries(
      Object.entries(params).sort((a, b) => a[0].localeCompare(b[0]))
    );

    const result = JSON.stringify(sorted);

    return result;
  } catch (err) {
    return currentDef;
  }
}
