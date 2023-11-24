import { identifyType } from "../_common";

export function isNumber(val: unknown): val is number {
  return identifyType(val) === "[object Number]";
}
