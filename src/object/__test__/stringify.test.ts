import { stringify } from "../stringify";

describe("stringify", () => {
  it("should return an empty string object when params is an empty object", () => {
    const params = {};
    const result = stringify(params);
    expect(result).toBe("{}");
  });

  it("should return a string representation of the params object", () => {
    const params = { name: "John", age: 30 };
    const result = stringify(params);
    expect(result).toBe('{"name":"John","age":30}');
  });

  it("should handle nested objects correctly", () => {
    const params = {
      name: "John",
      address: { city: "New York", country: "USA" },
    };
    const result = stringify(params);
    expect(result).toBe(
      '{"name":"John","address":{"city":"New York","country":"USA"}}'
    );
  });

  it("should handle arrays correctly", () => {
    const params = { numbers: [1, 2, 3] };
    const result = stringify(params);
    expect(result).toBe('{"numbers":[1,2,3]}');
  });

  it("should handle special characters correctly", () => {
    const params = { message: 'Hello, "World"!' };
    const result = stringify(params);
    expect(result).toBe('{"message":"Hello, \\"World\\"!"}');
  });

  it("should handle undefined and null values correctly", () => {
    const params = { name: undefined, age: null };
    const result = stringify(params);
    expect(result).toBe('{"age":null}');
  });

  it("should use the default value when params is not an object", () => {
    const params = "invalid";
    const def = "default";
    const result = stringify(params as never, def);
    expect(result).toBe(def);
  });
});
