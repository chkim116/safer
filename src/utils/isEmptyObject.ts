import { isObject } from "./isObject";

export function isEmptyObject(val: unknown): val is Record<string, any> {
  try {
    return (
      Boolean(val) &&
      isObject(val) &&
      Object.keys(val).length === 0 &&
      val.constructor === Object
    );
  } catch (error) {
    return false;
  }
}
