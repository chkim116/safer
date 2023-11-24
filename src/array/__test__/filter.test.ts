import { filter } from "../filter";

describe("filter function", () => {
  it("should return an empty array if input array is empty", () => {
    const emptyArray: any[] = [];

    expect(filter(emptyArray, "string")).toEqual([]);
    expect(filter(emptyArray, "number")).toEqual([]);
    expect(filter(emptyArray, "boolean")).toEqual([]);
    expect(filter(emptyArray, "object")).toEqual([]);
    expect(filter(emptyArray, "array")).toEqual([]);
    expect(filter(emptyArray, "noNullish")).toEqual([]);

    expect(filter(emptyArray, (value) => value > 5)).toEqual([]);
  });

  it("should return default value if array is not valid or empty", () => {
    const invalidArray = null;
    const defaultValue = [1, 2, 3];

    expect(filter(invalidArray as any, "number", defaultValue)).toEqual(
      defaultValue
    );

    expect(filter(invalidArray as any, "string")).toEqual([]);
  });

  it("should filter arrays based on various filter types", () => {
    const inputArray = [
      1,
      "hello",
      null,
      true,
      { name: "John" },
      false,
      { age: 25 },
      [1, 2, 3, 4],
    ];

    expect(filter(inputArray, "string")).toEqual(["hello"]);
    expect(filter(inputArray, "number")).toEqual([1]);
    expect(filter(inputArray, "boolean")).toEqual([true, false]);
    expect(filter(inputArray, "object")).toEqual([
      { name: "John" },
      { age: 25 },
    ]);
    expect(filter(inputArray, "array")).toEqual([[1, 2, 3, 4]]);
    expect(filter(inputArray, "noNullish")).toEqual([
      1,
      "hello",
      true,
      { name: "John" },
      false,
      { age: 25 },
      [1, 2, 3, 4],
    ]);
  });

  it("should filter arrays using custom callback functions", () => {
    const inputArray = [1, 2, 3, 4, 5];

    expect(filter(inputArray, (value) => value > 3)).toEqual([4, 5]);
    expect(filter(inputArray, (value) => value % 2 === 0)).toEqual([2, 4]);
  });
});
