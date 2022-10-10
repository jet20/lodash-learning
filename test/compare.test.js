const _ = require('lodash');

test("gt", () => {
    expect(_.gt(3, 1)).toBe(true);
    expect(_.gt(3, 3)).toBe(false);
    expect(_.gt(1, 3)).toBe(false);
});

test("gte", () => {
    expect(_.gte(3, 1)).toBe(true);
    expect(_.gte(3, 3)).toBe(true);
    expect(_.gt(1, 3)).toBe(false);
});
test("lt", () => {
    expect(_.lt(3, 1)).toBe(false);
    expect(_.lt(3, 3)).toBe(false);
    expect(_.lt(1, 3)).toBe(true);
});

test("lte", () => {
    expect(_.lte(3, 1)).toBe(false);
    expect(_.lte(3, 3)).toBe(true);
    expect(_.lt(1, 3)).toBe(true);
});