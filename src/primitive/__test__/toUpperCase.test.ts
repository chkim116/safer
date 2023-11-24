import { toUpperCase } from "../toUpperCase";

describe("toUpperCase", () => {
  it("should convert a string to uppercase", () => {
    const result = toUpperCase("Hello");
    expect(result).toBe("HELLO");
  });

  it("should handle a number without converting", () => {
    const result = toUpperCase(123);
    expect(result).toBe("123");
  });

  it("should handle an empty string without converting", () => {
    const result = toUpperCase("");
    expect(result).toBe("");
  });

  it("should convert a string to uppercase with specified locales", () => {
    const result = toUpperCase("hello", "tr-TR"); // Turkish locale as an example
    expect(result).toBe("HELLO");
  });

  it("should handle undefined without converting", () => {
    const result = toUpperCase(undefined);
    expect(result).toBe("");
  });
});
