import { identifyType } from "../_common";

export function isString(val: unknown): val is string {
  return identifyType(val) === "[object String]";
}
