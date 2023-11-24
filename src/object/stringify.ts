import { isObject, toString } from "..";

/**
 * Converts a JavaScript object to a JSON string or returns a default string if conversion fails or the input is not an object.
 *
 * @param params - The object to be converted to a JSON string.
 * @param def - The default string returned if conversion fails or the input is not an object (optional).
 * @returns The JSON string representing the object if successful, otherwise the default string.
 *
 * @remarks
 * - If `params` is a valid object, it will be converted to a JSON string.
 * - If `params` is not an object or an error occurs during conversion, the function returns the default string `def`.
 *
 * @example
 * ```ts
 * stringify({ name: "John", age: 23 }); // '{"name":"John","age":23}'
 *
 * stringify(null); // ""
 * stringify(null, "default"); // "default"
 * ```
 */
export function stringify(params: Record<string, any>, def = "") {
  const currentDef = toString(def);

  if (!isObject(params)) {
    return currentDef;
  }

  try {
    const result = JSON.stringify(params);

    return result;
  } catch (err) {
    return currentDef;
  }
}
