import { toObject } from "../toObject";

describe("toObject function", () => {
  it("should return the input object if it is an object", () => {
    // Test with a valid object
    const obj = { name: "John", age: 30 };
    expect(toObject(obj)).toBe(obj);
  });

  it("should convert array to object using Object.fromEntries()", () => {
    // Test with an array
    const arr = [
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ];
    const expectedResult = { a: 1, b: 2, c: 3 };
    expect(toObject(arr)).toEqual(expectedResult);
  });

  // more complex test with array
  it("should convert array to object using Object.fromEntries()", () => {
    // Test with an array
    const arr = [
      ["a", { name: "John", age: 30 }],
      ["b", { name: "Jane", age: 25 }],
      ["c", { name: "Jack", age: 20 }],
      [{}, { name: "Jack", age: 20 }],
      [[], { name: "Jack", age: 20 }],
    ];
    const expectedResult = {
      a: { name: "John", age: 30 },
      b: { name: "Jane", age: 25 },
      c: { name: "Jack", age: 20 },
      "[object Object]": { name: "Jack", age: 20 },
      "": { name: "Jack", age: 20 },
    };
    expect(toObject(arr)).toEqual(expectedResult);
  });

  it("should convert Map or Set to object using Object.fromEntries()", () => {
    // Test with a Map
    const map = new Map([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);
    const expectedMapResult = {
      key1: "value1",
      key2: "value2",
    };
    expect(toObject(map)).toEqual(expectedMapResult);

    // Test with a Set
    const set = new Set(["a", "b", "c"]);
    const expectedSetResult = {
      a: "a",
      b: "b",
      c: "c",
    };
    expect(toObject(set)).toEqual(expectedSetResult);
  });

  it("should create an object from string, number, boolean, and nullish values", () => {
    // Test with string, number, boolean, and nullish values
    expect(toObject("Hello")).toEqual({ Hello: "Hello" });
    expect(toObject(42)).toEqual({ "42": 42 });
    expect(toObject(true)).toEqual({ true: true });
    expect(toObject(null)).toEqual({ "": null });
    expect(toObject(undefined)).toEqual({ "": undefined });
  });
});
