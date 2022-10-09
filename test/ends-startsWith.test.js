const _ = require('lodash');

test("检测字符串尾部", () => {
    expect(_.endsWith("friend", "end")).toBe(true);
    expect(_.endsWith("friend", "nd")).toBe(true);
    expect(_.endsWith("friend", "ie", 4)).toBe(true);

    expect(_.endsWith("friend", "nd2")).toBe(false);
    expect(_.endsWith("friend", "ie")).toBe(false);
});

test("检测字符串首部", () => {
    expect(_.startsWith("friend", "fr")).toBe(true);
    expect(_.startsWith("friend", "fri")).toBe(true);
    expect(_.startsWith("friend", "ri", 1)).toBe(true);

    expect(_.startsWith("friend", "g")).toBe(false);
});