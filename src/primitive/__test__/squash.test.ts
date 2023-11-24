import { squash } from "../squash";

describe("squash", () => {
  it("should remove all spaces from the string when strict mode is false", () => {
    const result = squash("Hello World\ti am\nkim");
    expect(result).toBe("HelloWorldiamkim");
  });

  it("should remove only spaces from the string when strict mode is true", () => {
    const result = squash("Hello World\ti am\nkim", true);
    expect(result).toBe("HelloWorld\tiam\nkim");
  });

  it("should handle undefined input", () => {
    const result = squash(undefined);
    expect(result).toBe("");
  });

  it("should handle null input", () => {
    const result = squash(null);
    expect(result).toBe("");
  });

  it("should return the input value as is for non-string input", () => {
    const result = squash(123);
    expect(result).toBe("123");
  });

  it("should handle empty string input", () => {
    const result = squash("");
    expect(result).toBe("");
  });

  it("should remove only spaces when there are no other whitespace characters", () => {
    const result = squash("NoSpaces");
    expect(result).toBe("NoSpaces");
  });

  it("should handle special characters and symbols in the string", () => {
    const result = squash("Hello *&^%$#@! World");
    expect(result).toBe("Hello*&^%$#@!World");
  });

  it("should handle multiple spaces between words", () => {
    const result = squash("Hello    World");
    expect(result).toBe("HelloWorld");
  });

  it("should remove spaces along with other whitespace characters when strict mode is false", () => {
    const result = squash("Hello \t\r\nWorld");
    expect(result).toBe("HelloWorld");
  });
});
