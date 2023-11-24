import { toBoolean } from "../toBoolean";

describe("toBoolean: strict mode case", () => {
  it.each([
    {
      value: true,
      expected: true,
    },
    {
      value: false,
      expected: false,
    },
    {
      value: "true",
      expected: true,
    },
    {
      value: "false",
      expected: false,
    },
    {
      value: "123",
      expected: false,
    },
    {
      value: 123,
      expected: false,
    },
    {
      value: null,
      expected: false,
    },
    {
      value: undefined,
      expected: false,
    },
    {
      value: Symbol(),
      expected: false,
    },
    {
      value: () => {},
      expected: false,
    },
    {
      value: {},
      expected: false,
    },
    {
      value: [],
      expected: false,
    },
  ])("should return $expected when value is $value", ({ value, expected }) => {
    expect(toBoolean(value, true)).toBe(expected);
  });
});

describe("toBoolean: strict=false cases", () => {
  it.each([
    {
      value: true,
      expected: true,
    },
    {
      value: false,
      expected: false,
    },
    {
      value: "true",
      expected: true,
    },
    {
      value: "false",
      expected: false,
    },
    {
      value: "123",
      expected: true,
    },
    {
      value: 123,
      expected: true,
    },
    {
      value: null,
      expected: false,
    },
    {
      value: undefined,
      expected: false,
    },
    {
      value: Symbol(),
      expected: true,
    },
    {
      value: () => {},
      expected: true,
    },
    {
      value: {},
      expected: false,
    },
    {
      value: [],
      expected: false,
    },
  ])("should return $value when value is $expected", ({ value, expected }) => {
    expect(toBoolean(value)).toBe(expected);
  });

  it("should return true when value is Object and has properties", () => {
    // empty object will be false..
    expect(toBoolean({})).toBe(false);
    expect(toBoolean([])).toBe(false);
    // will be true..
    expect(toBoolean({ foo: "bar" })).toBe(true);
    expect(toBoolean([2])).toBe(true);
  });
});
