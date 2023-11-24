import { toString } from "../toString";

describe("toString: value case", () => {
  it.each([
    {
      value: "hello",
      expected: "hello",
    },
    {
      value: 123,
      expected: "123",
    },
    {
      value: true,
      expected: "true",
    },
    {
      value: null,
      expected: "",
    },
    {
      value: undefined,
      expected: "",
    },
    {
      value: [],
      expected: "",
    },
    {
      value: {},
      expected: "",
    },
    {
      value: Symbol(),
      expected: "",
    },
    {
      value: () => {},
      expected: "",
    },
  ])("should return $expected when value is $value", ({ value, expected }) => {
    expect(toString(value)).toBe(expected);
  });
});

describe("toString: default case", () => {
  it.each([
    {
      value: "",
      defaultValue: "hi",
      expected: "",
    },
    {
      value: 123,
      defaultValue: "",
      expected: "123",
    },
    {
      value: true,
      defaultValue: "",
      expected: "true",
    },
    {
      value: null,
      defaultValue: "hi",
      expected: "hi",
    },
    {
      value: undefined,
      defaultValue: "hi",
      expected: "hi",
    },
    {
      value: [],
      defaultValue: "hi",
      expected: "hi",
    },
    {
      value: {},
      defaultValue: "hi",
      expected: "hi",
    },
    {
      value: Symbol(),
      defaultValue: "hi",
      expected: "hi",
    },
    {
      value: () => {},
      defaultValue: "hi",
      expected: "hi",
    },
  ])(
    "should return $expected when value is $value and defaultValue is $defaultValue",
    ({ value, defaultValue, expected }) => {
      expect(toString(value, defaultValue)).toBe(expected);
    }
  );
});

describe("toString: default exception case", () => {
  it.each([
    {
      value: null,
      def: 0,
    },
    {
      value: null,
      def: NaN,
    },
    {
      value: null,
      def: {},
    },
    {
      value: null,
      def: [],
    },
    {
      value: null,
      def: null,
    },
    {
      value: null,
      def: undefined,
    },
    {
      value: null,
      def: () => ({}),
    },
    {
      value: null,
      def: Symbol(),
    },
    {
      value: null,
      def: true,
    },
  ])("should return empty string('') when def is $def", (value, def) => {
    expect(toString(value, def as never)).toBe("");
  });
});

describe("toString: allowEmpty=false case", () => {
  it("should return empty string('')", () => {
    expect(toString("", "default", false)).toBe("default");
    expect(toString("", "notAllowEmpty", false)).toBe("notAllowEmpty");
  });
});
