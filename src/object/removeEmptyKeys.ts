import { stringify } from ".";
import { isArray, isEmptyObject, isObject } from "..";
import { parse } from "../primitive/parse";

/**
 * Removes empty keys from an object.
 *
 * @remark
 * - Empty keys are keys with null, undefined, empty string, empty array, or empty object values.
 * - If `keysToKeep` is provided, it will not remove empty keys that match the provided keys.
 *
 * @param obj - The object to remove empty keys from.
 * @param keysToKeep - The keys to keep even if they are empty (optional).
 * @returns A new object with empty keys removed.
 *
 * @example
 * ```ts
 * const obj = {
 *  name: "John",
 *  age: 23,
 *  address: {
 *  street: "123 Main St.",
 *  city: "New York",
 *  state: "NY",
 *  zip: "",
 *  },
 * };
 *
 * removeEmptyKeys(obj);
 * // {
 * //   name: "John",
 * //   age: 23,
 * //   address: {
 *  //    street: "123 Main St.",
 * //     city: "New York",
 * //     state: "NY",
 * //   },
 * // }
 *
 * removeEmptyKeys(obj, ["address.zip"]);
 * // {
 * //   name: "John",
 * //   age: 23,
 * //   address: {
 * //     street: "123 Main St.",
 * //     city: "New York",
 * //     state: "NY",
 * //     zip: "",
 * //   },
 * // }
 * ```
 */
export function removeEmptyKeys<T extends Record<string, any>>(
  obj: T,
  keysToKeep: string[] = []
): T {
  const deepCopyObj: T = parse(stringify(obj));

  const recursive = (currentObj: T, parentKey = "") => {
    const keys = Object.keys(currentObj);

    keys.forEach((key) => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (
        !keysToKeep.includes(fullKey) &&
        (currentObj[key] === null ||
          currentObj[key] === "" ||
          currentObj[key] === 0 ||
          currentObj[key] === undefined ||
          isEmptyObject(currentObj[key]) ||
          (isArray(currentObj[key]) && currentObj[key].length === 0))
      ) {
        delete currentObj[key];
      }

      if (isObject(currentObj[key])) {
        recursive(currentObj[key], fullKey);

        if (
          Object.keys(currentObj[key]).length === 0 &&
          !keysToKeep.includes(fullKey)
        ) {
          delete currentObj[key];
        }
      }
    });
  };

  recursive(deepCopyObj);
  return deepCopyObj;
}
