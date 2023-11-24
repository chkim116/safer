import { toLowerCase } from "../toLowerCase";

describe("toLowerCase", () => {
  it("should convert a string to lowercase", () => {
    const result = toLowerCase("Hello");
    expect(result).toBe("hello");
  });

  it("should handle a number without converting", () => {
    const result = toLowerCase(123);
    expect(result).toBe("123");
  });

  it("should handle an empty string without converting", () => {
    const result = toLowerCase("");
    expect(result).toBe("");
  });

  it("should convert a string to lowercase with specified locales", () => {
    const result = toLowerCase("HELLO", "tr-TR"); // Turkish locale as an example
    expect(result).toBe("hello");
  });

  it("should handle undefined without converting", () => {
    const result = toLowerCase(undefined);
    expect(result).toBe("");
  });
});
