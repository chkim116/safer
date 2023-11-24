import { identifyType } from "../_common";

export function isBoolean(val: unknown): val is boolean {
  return identifyType(val) === "[object Boolean]";
}
