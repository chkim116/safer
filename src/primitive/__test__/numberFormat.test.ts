import { padRight } from "..";
import { numberFormat } from "../numberFormat";

describe("numberFormat", () => {
  it("should format a valid number with default options", () => {
    const formatted = numberFormat(1234567.89);
    expect(formatted).toEqual("1,234,567.89");
  });

  it("should format a valid number with custom options", () => {
    const formatted = numberFormat(1234567.89, "en-US", {
      style: "currency",
      currency: "USD",
    });
    expect(formatted).toEqual("$1,234,567.89");
  });

  it("should return the input if it is not a valid number", () => {
    const formatted = numberFormat("not a number");
    expect(formatted).toEqual("0");
  });

  it("should return korean won", () => {
    const formatted = padRight(numberFormat(1234125), "원");
    const formattedWithPrefixZero = padRight(numberFormat("01234125"), "원");
    expect(formatted).toEqual("1,234,125원");
    expect(formattedWithPrefixZero).toEqual("1,234,125원");
  });
});
