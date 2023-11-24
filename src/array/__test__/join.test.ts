import { join } from "../join"; // Replace 'yourJoinFunctionFile' with the actual file name

describe("join function", () => {
  it("should join elements of an array with a separator", () => {
    // Test with an array of numbers and a separator
    const numbers = [1, 2, 3, 4, 5];
    const separator = "-";
    expect(join(numbers, separator)).toBe("1-2-3-4-5");

    // Test with an array of strings and a different separator
    const strings = ["apple", "orange", "banana"];
    const differentSeparator = ", ";
    expect(join(strings, differentSeparator)).toBe("apple, orange, banana");
  });

  it("should return default value if input is not an array", () => {
    // Test with a non-array input and a default value
    const nonArrayInput = "This is not an array";
    const separator = "-";
    const defaultValue = "Default Value";
    expect(join(nonArrayInput, separator, defaultValue)).toBe(defaultValue);

    // Test without providing a default value
    expect(join(nonArrayInput, separator)).toBe("");
  });

  it("should return default value if an error occurs during join", () => {
    // Test with an array and a separator causing an error
    const arrayWithError = [1, 2, 3];
    const separator = null; // Separator causing an error in the join operation
    const defaultValue = "Error occurred";
    expect(join(arrayWithError, separator as never, defaultValue)).toBe(
      defaultValue
    );
  });
});
