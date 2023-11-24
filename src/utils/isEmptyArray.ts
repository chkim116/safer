import { isArray } from ".";

export function isEmptyArray (val : unknown) {
  return isArray(val) && val.length === 0
}