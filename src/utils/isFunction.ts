import { identifyType } from "../_common";

export function isFunction(val: unknown): val is Function {
  return identifyType(val) === "[object Function]";
}
