import { padRight } from "../padRight";

describe("padRight", () => {
  it("should add right padding when the value exists", () => {
    const result = padRight("Hello", "----");
    expect(result).toBe("Hello----");
  });

  it("should use the default value when the value is undefined", () => {
    const result = padRight(undefined, "----", "Default");
    expect(result).toBe("Default----");
  });

  it("should return only the right padding when the value is null", () => {
    const result = padRight(null, "----");
    expect(result).toBe("----");
  });

  it("should add right padding to a number", () => {
    const result = padRight(123, "----");
    expect(result).toBe("123----");
  });

  it("should handle empty rightPad value", () => {
    const result = padRight("Hello", "");
    expect(result).toBe("Hello");
  });

  it("should handle missing defValue", () => {
    const result = padRight(undefined, "----");
    expect(result).toBe("----");
  });

  it("should add right padding to a boolean", () => {
    const resultTrue = padRight(true, "----");
    const resultFalse = padRight(false, "----");

    expect(resultTrue).toBe("true----");
    expect(resultFalse).toBe("false----");
  });
});
