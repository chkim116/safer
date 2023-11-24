import { identifyType } from "../_common";

export function isRegExp(val: unknown): val is RegExp {
  return identifyType(val) === "[object RegExp]";
}
