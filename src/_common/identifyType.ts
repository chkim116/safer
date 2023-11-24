export function identifyType(val: unknown): string {
  return Object.prototype.toString.call(val);
}
