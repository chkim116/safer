import { parse } from "../parse";

describe("parse", () => {
  it("should return default object for non-string inputs", () => {
    // Test with a number as input
    const numberInput = 123;
    const defaultValue = { key: "value" };
    expect(parse(numberInput, defaultValue)).toEqual(defaultValue);

    // Test with an array as input
    const arrayInput = [1, 2, 3];
    expect(parse(arrayInput)).toEqual({});

    // Test with null input
    const nullInput = null;
    const anotherDefaultValue = { default: "value" };
    expect(parse(nullInput, anotherDefaultValue)).toEqual(anotherDefaultValue);
  });

  it("should return default object for invalid JSON strings", () => {
    // Test with an invalid JSON string
    const invalidJSONString = '{ key: "value" }'; // Missing double quotes around keys
    const defaultValue = { error: "Invalid JSON" };
    expect(parse(invalidJSONString, defaultValue)).toEqual(defaultValue);

    // Test with a string that's not JSON
    const notJSONString = "This is not JSON";
    expect(parse(notJSONString)).toEqual({});
  });

  it("should return default object for JSON parsing errors", () => {
    // Test with a string that causes JSON parsing error
    const jsonStringWithError = '{"key": "value"';
    const defaultValue = { error: "Parsing error" };
    expect(parse(jsonStringWithError, defaultValue)).toEqual(defaultValue);
  });

  it("should return default object for non-string inputs", () => {
    // Test with a boolean as input
    const booleanInput = true;
    const defaultValue = { key: "value" };
    expect(parse(booleanInput, defaultValue)).toEqual(defaultValue);

    // Test with an object as input
    const objectInput = { key: "value" };
    expect(parse(objectInput)).toEqual({});

    // Test with undefined input
    const undefinedInput = undefined;
    const anotherDefaultValue = { default: "value" };
    expect(parse(undefinedInput, anotherDefaultValue)).toEqual(
      anotherDefaultValue
    );
  });

  it("should return default object for invalid JSON strings", () => {
    // Test with an empty string
    const emptyString = "";
    const defaultValue = { error: "Invalid JSON" };
    expect(parse(emptyString, defaultValue)).toEqual(defaultValue);

    // Test with a string that contains invalid characters
    const invalidCharacters = "abc123";
    expect(parse(invalidCharacters)).toEqual({});

    // Test with a string that contains a single quote
    const singleQuoteString = "{'key': 'value'}";
    expect(parse(singleQuoteString)).toEqual({});
  });

  it("should return default object for JSON parsing errors", () => {
    // Test with a string that is not valid JSON
    const notValidJSON = '{"key": "value"';
    const defaultValue = { error: "Parsing error" };
    expect(parse(notValidJSON, defaultValue)).toEqual(defaultValue);
  });

  it("should return parsed object for valid JSON strings", () => {
    // Test with a valid JSON string with nested objects
    const validJSONString = '{"key": "value", "nested": {"key2": "value2"}}';
    expect(parse(validJSONString)).toEqual({
      key: "value",
      nested: { key2: "value2" },
    });

    // Test with a valid JSON string with an array
    const validJSONStringWithArray = '{"key": "value", "array": [1, 2, 3]}';
    expect(parse(validJSONStringWithArray)).toEqual({
      key: "value",
      array: [1, 2, 3],
    });
  });

  it("should return parsed object for valid JSON strings", () => {
    // Test with a valid JSON string
    const validJSONString = '{"key": "value"}';
    expect(parse(validJSONString)).toEqual({ key: "value" });
  });
});
