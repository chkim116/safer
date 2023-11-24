import { isArray, isNullish } from "..";

/**
 * Finds an element in an array at the specified index and returns it.
 *
 * @param array - The array to search.
 * @param index - The index to retrieve the element from.
 * @param def - The default value to return if the index is out of bounds or an error occurs.
 *
 * @remark
 * If the index is out of bounds or an error occurs, the default value is returned.
 *
 * @returns The element at the specified index or the default value.
 *
 * @example
 *
 * ```ts
 * const arr = [1, 2, 3, 4, 5]; // number[]
 *
 * findIndex(arr, 0); // 1
 * findIndex(arr, 1); // 2
 * findIndex(arr, 5); // undefined
 *
 * findIndex(arr, 0, 0); // 1
 * findIndex(arr, 1, 0); // 2
 * findIndex(arr, 5, 0); // 0
 * ```
 */
export function findIndex<T>(array: T[], index: number, def: T): T {
  if (!isArray(array)) {
    return def;
  }

  try {
    const result = array[index];

    return isNullish(result) ? def : result;
  } catch (error) {
    return def;
  }
}
