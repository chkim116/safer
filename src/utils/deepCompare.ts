/**
 * Deeply compares two values, checking equality of nested objects and arrays.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @param seen - (Internal) A set to keep track of seen objects during comparison to handle circular references.
 * @returns `true` if the values are deeply equal, `false` otherwise.
 */
export function deepCompare(a: any, b: any, seen = new Set()): boolean {
  // 타입이 다르면 값이 다르다고 판단
  if (typeof a !== typeof b) {
    return false;
  }

  // 객체 또는 배열인 경우 재귀적으로 값들을 비교
  if (
    typeof a === "object" &&
    a !== null &&
    typeof b === "object" &&
    b !== null
  ) {
    // 순환 참조를 다루기 위한 로직
    if (seen.has(a) || seen.has(b)) {
      return a === b;
    }
    seen.add(a);
    seen.add(b);

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // 키의 수가 다르면 값이 다르다고 판단
    if (keysA.length !== keysB.length) {
      seen.clear();
      return false;
    }

    // 모든 키에 대해 재귀적으로 값들을 비교
    for (const key of keysA) {
      if (!deepCompare(a[key], b[key], seen)) {
        seen.clear();
        return false;
      }
    }

    // 모든 키들이 일치하면 값이 같다고 판단
    seen.clear();
    return true;
  }

  // 객체 또는 배열이 아닌 경우 단순히 값 비교
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; // NaN은 자기 자신과 같다고 판단
  }
  return a === b;
}
