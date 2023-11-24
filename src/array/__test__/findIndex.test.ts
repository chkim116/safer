import { findIndex } from "../findIndex";

describe("findIndex function", () => {
  it("should return the element at the specified index when the index is within bounds", () => {
    const array = [1, 2, 3, 4, 5];
    expect(findIndex(array, 2, 0)).toBe(3);
  });

  it("should return the default value when the index is out of bounds", () => {
    const array = [1, 2, 3, 4, 5];
    expect(findIndex(array, 10, 0)).toBe(0);
  });

  it("should return the default value when the index is negative", () => {
    const array = [1, 2, 3, 4, 5];
    expect(findIndex(array, -1, 0)).toBe(0);
  });

  it("should return the default value when the index is NaN", () => {
    const array = [1, 2, 3, 4, 5];
    expect(findIndex(array, NaN, 0)).toBe(0);
  });

  it("should return the default value when the array is empty", () => {
    const array: number[] = [];
    expect(findIndex(array, 0, 42)).toBe(42);
  });

  it("should return the default object when the index is out of bounds", () => {
    const array = [{ name: "John" }, { name: "Jane" }];
    const defaultValue = { name: "Default" };
    expect(findIndex(array, 10, defaultValue)).toEqual(defaultValue);
  });

  it("should return the default string when the index is negative", () => {
    const array = ["apple", "banana", "cherry"];
    expect(findIndex(array, -1, "default")).toBe("default");
  });

  it("should return the default value when the element at the specified index is null", () => {
    const array = [null, "a", "b"];
    expect(findIndex(array, 0, "default")).toBe("default");
  });

  it("should return the default value when the element at the specified index is undefined", () => {
    const array = [undefined, "a", "b"];
    expect(findIndex(array, 0, "default")).toBe("default");
  });

  it("should return the default value when the array is a Map", () => {
    const array = new Map([
      [1, "a"],
      [2, "b"],
    ]);
    expect(findIndex(array as never, 0, "default")).toBe("default");
  });

  it("should return the default value when the array is a Set", () => {
    const array = new Set(["a", "b", "c"]);
    expect(findIndex(array as never, 0, "default")).toBe("default");
  });
});
