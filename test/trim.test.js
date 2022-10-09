const _ = require('lodash');

test("trim", () => {
    expect(_.trim(" a bc  ")).toBe("a bc");
    expect(_.trim("__a bc _", "_")).toBe("a bc ");
    expect(_.trim("__a bc _", "_ ")).toBe("a bc");
});

test("trimStart", () => {
    expect(_.trimStart(" a bc  ")).toBe("a bc  ");
    expect(_.trimStart("__a bc _", "_")).toBe("a bc _");
    expect(_.trimStart("__a bc _", "_ ")).toBe("a bc _");
});

test("trimEnd", () => {
    expect(_.trimEnd(" a bc  ")).toBe(" a bc");
    expect(_.trimEnd("__a bc _", "_")).toBe("__a bc ");
    expect(_.trimEnd("__a bc _", "_ ")).toBe("__a bc");
});

test("truncate", () => {
    expect(_.truncate("123456789", {length: 8})).toBe("12345...");
    expect(_.truncate("123456789", {length: 8, omission: ".."})).toBe("123456..");
    expect(_.truncate("123 56789", {length: 8, separator: " ", omission: ".."})).toBe("123..");
});