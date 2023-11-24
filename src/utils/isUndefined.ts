import { identifyType } from "../_common";

export function isUndefined(val: unknown): val is boolean {
  return identifyType(val) === "[object Undefined]";
}
