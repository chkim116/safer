import { includes } from "../includes";

describe("includes", () => {
  it("should return true if the value is included in the array", () => {
    expect(includes(["123", 123], 123)).toBe(true);
    expect(includes([true, false], true)).toBe(true);
    expect(includes([1, 2, 3], 2)).toBe(true);
  });

  it("should return true if the value is the single value", () => {
    expect(includes(123, 123)).toBe(true);
    expect(
      includes(
        [
          { name: "john", age: 23 },
          { name: "alex", age: 24 },
        ],
        { age: 24, name: "alex" }
      )
    ).toBe(true);
    expect(
      includes(
        [
          [1, 2, 3],
          [4, 5, 6, [4]],
        ],
        [4, 5, 6, [4]]
      )
    ).toBe(true);
    expect(includes(true, true)).toBe(true);
    expect(includes("abc", "abc")).toBe(true);
  });

  it("should return false if the value is not included in the array", () => {
    expect(includes(["123", "456"], 789)).toBe(false);
    expect(includes([true, false], null)).toBe(false);
    expect(includes([1, 2, 3], 4)).toBe(false);
  });

  it("should return false if the value is not the single value", () => {
    expect(includes(123, 456)).toBe(false);
    expect(includes(true, false)).toBe(false);
    expect(includes("abc", "xyz")).toBe(false);
  });

  it("should return false for undefined or null value", () => {
    expect(includes(["123", 123], undefined)).toBe(false);
    expect(includes(null, null)).toBe(false);
    expect(includes(undefined, "test")).toBe(false);
  });
});
