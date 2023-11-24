import { toNumber } from "../toNumber";

describe("toNumber", () => {
  it("should convert a positive number to a number", () => {
    const result = toNumber(123);
    expect(result).toBe(123);
  });

  it("should convert a negative number to a number when allowNegative is true", () => {
    const result = toNumber(-456, undefined, true);
    expect(result).toBe(-456);
  });

  it("should convert a string representing a positive integer to a number", () => {
    const result = toNumber("789");
    expect(result).toBe(789);
  });

  it("should convert a string representing a negative integer to a number when allowNegative is true", () => {
    const result = toNumber("-101", undefined, true);
    expect(result).toBe(-101);
  });

  it("should convert a string representing a floating-point number to a number", () => {
    const result = toNumber("3.14");
    expect(result).toBe(3.14);
  });

  it("should return 0 for a non-numeric string", () => {
    const result = toNumber("abc");
    expect(result).toBe(0);
  });

  it("should handle NaN by using the default value", () => {
    const result = toNumber("xyz", 999);
    expect(result).toBe(999);
  });

  it("should use the default value when the value is undefined", () => {
    const result = toNumber(undefined, 789);
    expect(result).toBe(789);
  });

  it("should treat negative numbers as 0 when allowNegative is false", () => {
    const result = toNumber(-123, undefined, false);
    expect(result).toBe(0);
  });

  it("should handle an empty string as 0", () => {
    const result = toNumber("", 456);
    expect(result).toBe(0);
  });

  it("should handle a string with spaces as 0", () => {
    const result = toNumber("  ", 789);
    expect(result).toBe(0);
  });

  it("should handle a string with leading and trailing spaces", () => {
    const result = toNumber("  456  ");
    expect(result).toBe(456);
  });

  it("should handle a string with invalid characters and allowNegative is false", () => {
    const result = toNumber("12-34", undefined, false);
    expect(result).toBe(0);
  });

  it("should handle a string with invalid characters and allowNegative is true", () => {
    const result = toNumber("12-34", undefined, true);
    expect(result).toBe(0);
  });

  it("should handle a string with only a decimal point as 0", () => {
    const result = toNumber(".");
    expect(result).toBe(0);
  });

  it("should handle a string with only a negative sign as 0 when allowNegative is false", () => {
    const result = toNumber("-");
    expect(result).toBe(0);
  });

  it("should handle a string with only a negative sign as 0 when allowNegative is true", () => {
    const result = toNumber("-", undefined, true);
    expect(result).toBe(0);
  });
});
