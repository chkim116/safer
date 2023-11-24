import { split } from "../split";

describe("split", () => {
  it("should return an empty array if the value is null", () => {
    const result = split(null, ",");
    expect(result).toEqual([]);
  });

  it("should return an empty array if the value is undefined", () => {
    const result = split(undefined, ",");
    expect(result).toEqual([]);
  });

  it("should return an empty array if the value is not a string", () => {
    const result = split(123, ",");
    expect(result).toEqual([]);
  });

  it("should split a string using a comma separator", () => {
    const result = split("apple,banana,orange", ",");
    expect(result).toEqual(["apple", "banana", "orange"]);
  });

  it("should split a string using a regex separator", () => {
    const result = split("apple banana orange", /\s+/);
    expect(result).toEqual(["apple", "banana", "orange"]);
  });

  it("should handle an empty string value", () => {
    const result = split("", ",");
    expect(result).toEqual([]);
  });

  it("should handle a string with no separator", () => {
    const result = split("hello", ",");
    expect(result).toEqual(["hello"]);
  });

  it("should handle special characters in the separator", () => {
    const result = split("apple@banana@orange", "@");
    expect(result).toEqual(["apple", "banana", "orange"]);
  });

  it("should return the entered value as is for an invalid separator", () => {
    const result = split("apple,banana,orange", "[");
    expect(result).toEqual(["apple,banana,orange"]);
  });

  it("should return the default value if an error occurs during splitting", () => {
    const result = split("apple,banana,orange", null as never);
    expect(result).toEqual([]);
  });
});
