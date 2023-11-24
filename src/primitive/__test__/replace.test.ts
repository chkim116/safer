import { replace } from "../replace";

describe("replace", () => {
  it("should replace a specific substring", () => {
    const result = replace("Hello, world!", "world", "universe");
    expect(result).toBe("Hello, universe!");
  });

  it("should replace occurrences using a regular expression", () => {
    const result = replace("abc123abc", /abc/g, "def");
    expect(result).toBe("def123def");
  });

  it("should handle undefined as an empty string", () => {
    const result = replace(undefined, "2", "4");
    expect(result).toBe("");
  });

  it("should handle null as an empty string", () => {
    const result = replace(null, "2", "4");
    expect(result).toBe("");
  });

  it("should handle a non-string input with replacement", () => {
    const result = replace(123, "2", "4");
    expect(result).toBe("143");
  });

  it("should replace occurrences case-insensitively", () => {
    const result = replace("abcABC", /abc/gi, "def");
    expect(result).toBe("defdef");
  });

  it("should handle an empty string without replacement", () => {
    const result = replace("", "2", "4");
    expect(result).toBe("");
  });

  it("should handle a string with multiple occurrences using a regular expression", () => {
    const result = replace("abc123abc456abc", /abc/g, "def");
    expect(result).toBe("def123def456def");
  });

  it("should handle a string with invalid regular expression characters without replacement", () => {
    const result = replace("abc123abc", "[", "!");
    expect(result).toBe("abc123abc");
  });

  it("should handle a string with invalid regular expression characters with replacement", () => {
    const result = replace("abc123abc", /[^\d]/g, "!");
    expect(result).toBe("!!!123!!!");
  });

  it("should handle a string with special characters", () => {
    const result = replace("Hello, world!", "o", "*");
    expect(result).toBe("Hell*, world!");
  });

  it("should handle a string with special characters using a regular expression", () => {
    const result = replace("Hello, world!", /[aeiou]/g, "*");
    expect(result).toBe("H*ll*, w*rld!");
  });
});
