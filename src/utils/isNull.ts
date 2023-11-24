import { identifyType } from "../_common";

export function isNull(val: unknown): val is boolean {
  return identifyType(val) === "[object Null]";
}
