import { padLeft } from "../padLeft";

describe("padLeft", () => {
  it("should add left padding when the value exists", () => {
    const result = padLeft("Hello", "----");
    expect(result).toBe("----Hello");
  });

  it("should use the default value when the value is undefined", () => {
    const result = padLeft(undefined, "----", "Default");
    expect(result).toBe("----Default");
  });

  it("should return only the left padding when the value is null", () => {
    const result = padLeft(null, "----");
    expect(result).toBe("----");
  });

  it("should add left padding to a number", () => {
    const result = padLeft(123, "----");
    expect(result).toBe("----123");
  });

  it("should handle empty leftPad value", () => {
    const result = padLeft("Hello", "");
    expect(result).toBe("Hello");
  });

  it("should handle missing defValue", () => {
    const result = padLeft(undefined, "----");
    expect(result).toBe("----");
  });

  it("should add left padding to a boolean", () => {
    const resultTrue = padLeft(true, "----");
    const resultFalse = padLeft(false, "----");

    expect(resultTrue).toBe("----true");
    expect(resultFalse).toBe("----false");
  });
});
