import { stringifySort } from "../stringifySort";

describe("stringifySort function", () => {
  it("should stringify and sort object keys to JSON string", () => {
    // Test with a valid object
    const obj = { name: "John", age: 30, city: "New York" };
    const expectedResult = '{"age":30,"city":"New York","name":"John"}';
    expect(stringifySort(obj)).toBe(expectedResult);

    // Test with an empty object
    const emptyObj = {};
    expect(stringifySort(emptyObj)).toBe("{}");
  });

  it("should return default string for non-object inputs", () => {
    // Test with a string as input
    const stringInput = "This is a string";
    const defaultValue = "Default String";
    expect(stringifySort(stringInput as never, defaultValue)).toBe(
      defaultValue
    );

    // Test with null input
    const nullInput = null;
    expect(stringifySort(nullInput as never)).toBe("");
  });

  it("should return default string for errors during conversion", () => {
    // Test with an object that causes stringify error
    const objWithError = { circularRef: {} };
    (objWithError.circularRef as any).objRef = objWithError;
    const defaultValue = "Conversion Error";
    expect(stringifySort(objWithError, defaultValue)).toBe(defaultValue);
  });
});
