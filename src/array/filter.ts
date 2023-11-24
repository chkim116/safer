import {
  isArray,
  isBoolean,
  isFunction,
  isNullish,
  isNumber,
  isObject,
  isString,
} from "..";

type FilterCallbackType<T> = (value: T, index: number, array: T[]) => boolean;
type FilterType<T> =
  | "string"
  | "number"
  | "boolean"
  | "array"
  | "object"
  | "noNullish"
  | FilterCallbackType<T>;

const DIC = {
  string: (value: unknown) => isString(value),
  number: (value: unknown) => isNumber(value),
  boolean: (value: unknown) => isBoolean(value),
  object: (value: unknown) => isObject(value),
  array: (value: unknown) => isArray(value),
  noNullish: (value: unknown) => !isNullish(value),
  function: null, // This is a placeholder for the callback function.
};

/**
 * Filters an array based on the specified filter type or callback function.
 *
 * @param arr - The array to be filtered.
 * @param filterType - The type of filter or callback function used for filtering.
 * @param def - The default value returned if the array is not valid or empty (optional).
 * @returns An array filtered based on the specified criteria or the default value if not found.
 *
 * @remarks
 * - Supported filter types: "string", "number", "boolean", "object", "noNullish"
 * - If a callback function is provided, it filters based on the custom logic defined in the callback.
 * - If the array is not valid or empty, the default value (if provided) will be returned.
 * - The function supports filtering based on primitive types, objects, or custom validation logic.
 *
 * @example
 * ```ts
 * const arr = [1, 2, 3, 4, 5]; // number[]
 *
 * filter(arr, "number"); // [1, 2, 3, 4, 5] (same as original)
 * filter(arr, "string"); // [] (empty array)
 * filter(arr, "boolean"); // [] (empty array)
 * filter(arr, "object"); // [] (empty array)
 * filter(arr, "array"); // [] (empty array)
 * filter(arr, "noNullish"); // [1, 2, 3, 4, 5] (same as original)
 * filter(arr, (value) => value > 3); // [4, 5] (only values greater than 3)
 *
 * const arr2 =[null, undefined, 1, 2, 3, 4, 5]; // (number | null | undefined)[]
 *
 * filter(arr2, "number"); // [1, 2, 3, 4, 5] (same as original)
 * filter(arr2, "string"); // [] (empty array)
 * filter(arr2, "boolean"); // [] (empty array)
 * filter(arr2, "object"); // [] (empty array)
 * filter(arr2, "array"); // [] (empty array)
 * filter(arr2, "noNullish"); // [1, 2, 3, 4, 5] (same as original)
 * filter(arr2, (value) => value > 3); // [4, 5] (only values greater than 3)
 *
 * const arr3 = [1, 'string', true, {}, [], null, undefined]; // (number | string | boolean | object | null | undefined)[]
 *
 * filter(arr3, "number"); // [1] (only numbers)
 * filter(arr3, "string"); // ['string'] (only strings)
 * filter(arr3, "boolean"); // [true] (only booleans)
 * filter(arr3, "object"); // [{}] (only objects)
 * filter(arr3, "array"); // [[]] (only arrays)
 * filter(arr3, "noNullish"); // [1, 'string', true, {}, []]
 * filter(arr3, (value) => value > 1); // [true, {}, []] (only values greater than 1)
 * ```
 *
 */
export function filter<T>(
  arr: T[],
  filterType: "string",
  def?: string[]
): string[];
export function filter<T>(
  arr: T[],
  filterType: "number",
  def?: number[]
): number[];
export function filter<T>(
  arr: T[],
  filterType: "boolean",
  def?: boolean[]
): boolean[];
export function filter<T>(arr: T[], filterType: "noNullish", def?: T[]): T[];
export function filter<T>(arr: T[], filterType: "array", def?: T[]): T[];
export function filter<T>(
  arr: T[],
  filterType: "object",
  def?: T[]
): T extends object ? T[] : Record<string, any>[];
export function filter<T>(
  arr: T[],
  fn: FilterCallbackType<T>,
  def?: string[]
): T[];
export function filter<T>(
  arr: T[],
  filterType: FilterType<T>,
  def: T[] = []
): T[] {
  if (!isArray(arr)) {
    return def;
  }

  if (arr.length === 0) {
    return def;
  }

  const currentType = isFunction(filterType) ? "function" : filterType;

  const dispatch = DIC[currentType];

  try {
    if (dispatch && currentType !== "function") {
      return arr.filter((value) => dispatch(value));
    } else {
      return arr.filter(filterType as FilterCallbackType<T>);
    }
  } catch (err) {
    return def;
  }
}
