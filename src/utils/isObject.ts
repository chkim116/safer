import { identifyType } from "../_common";

export function isObject(val: unknown): val is Record<string, any> {
  return identifyType(val) === "[object Object]";
}
