import { isNull } from "./isNull";
import { isUndefined } from "./isUndefined";

export function isNullish(val: unknown): val is boolean {
  return isNull(val) || isUndefined(val);
}
