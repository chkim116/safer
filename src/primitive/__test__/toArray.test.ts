import { toArray } from "../toArray";

describe("toArray", () => {
  it("should return the input array if it is an array", () => {
    // Test with a valid array
    const arr = [1, 2, 3];
    expect(toArray(arr)).toBe(arr);
  });

  it("should convert object to array using Object.entries()", () => {
    // Test with an object
    const obj = { a: 1, b: 2, c: 3 };
    const expectedResult = [
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ];
    expect(toArray(obj)).toEqual(expectedResult);
  });

  it("should convert Map or Set to array using Array.from()", () => {
    // Test with a Map
    const map = new Map([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);

    const expectedMapResult = [
      ["key1", "value1"],
      ["key2", "value2"],
    ];
    expect(toArray(map)).toEqual(expectedMapResult);

    // Test with a Set
    const set = new Set(["a", "b", "c"]);
    const expectedSetResult = ["a", "b", "c"];
    expect(toArray(set)).toEqual(expectedSetResult);
  });

  it("should create an array from other values", () => {
    // Test with string, number, boolean, null, and undefined values
    expect(toArray("Hello")).toEqual(["Hello"]);
    expect(toArray(42)).toEqual([42]);
    expect(toArray(true)).toEqual([true]);
    expect(toArray(null)).toEqual([null]);
    expect(toArray(undefined)).toEqual([undefined]);
  });
});
