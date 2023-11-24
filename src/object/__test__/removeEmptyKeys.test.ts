import { removeEmptyKeys } from "..";

describe("removeEmptyKeys", () => {
  it("should remove keys with empty values", () => {
    const given = {
      key1: "lookpin",
      key2: undefined,
      key3: {},
      key4: [],
      key5: null,
      key6: 0,
      key7: "",
      key8: 1,
    };
    const result = removeEmptyKeys(given);

    expect(result).toEqual({ key1: "lookpin", key8: 1 });
  });

  it("should not remove keys specified in the keysToKeep array", () => {
    const given = {
      key1: "lookpin",
      key2: undefined,
      key3: {},
      key4: [],
      key5: null,
      key6: 0,
      key7: "",
    };
    const keysToKeep = ["key5", "key6", "key7"];

    const result = removeEmptyKeys(given, keysToKeep);

    expect(result).toEqual({ key1: "lookpin", key5: null, key6: 0, key7: "" });
  });

  it("should handle nested objects and keep specified keys", () => {
    const given = {
      key1: "lookpin",
      key2: {
        lookpin: {
          forever: null,
          level13: {
            forever: null,
            hiver: null,
          },
        },
      },
      key3: {
        depth1: {},
      },
      hiver: {
        forever: null,
      },
    };
    const keysToKeep = [
      "key1",
      "key2.lookpin.forever",
      "key2.lookpin.level13.forever",
      "key3",
    ];

    const result = removeEmptyKeys(given, keysToKeep);

    expect(result).toEqual({
      key1: "lookpin",
      key2: {
        lookpin: {
          forever: null,
          level13: {
            forever: null,
          },
        },
      },
      key3: {},
    });
  });
});
