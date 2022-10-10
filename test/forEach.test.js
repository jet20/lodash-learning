const _ = require('lodash');

test("forEach", () => {
    const mock = jest.fn();
    _.forEach([3, 2, 1], mock);
    expect(mock.mock.calls.map(e => e[0])).toEqual([3, 2, 1]);
});

test("each", () => {
    const mock = jest.fn();
    _.each([3, 2, 1], mock);

    expect(mock.mock.calls.map(e => e[0])).toEqual([3, 2, 1]);
    expect(mock.mock.calls.map(e => e[1])).toEqual([0, 1, 2]);
});

test("each", () => {
    const mock = jest.fn();
    _.each({a: 3, b: 2, c: 1}, mock);

    expect(mock.mock.calls.map(e => e[0])).toEqual([3, 2, 1]);
    expect(mock.mock.calls.map(e => e[1])).toEqual(["a", "b", "c"]);
});

test("forEachRight", () => {
    const mock = jest.fn();
    _.forEachRight([3, 2, 1], mock);
    expect(mock.mock.calls.map(e => e[0])).toEqual([1, 2, 3]);
});

test("eachRight", () => {
    const mock = jest.fn();
    _.eachRight([3, 2, 1], mock);
    expect(mock.mock.calls.map(e => e[0])).toEqual([1, 2, 3]);
});

test("size", () => {
    expect( _.size([3, 2, 1])).toBe(3);
});

test("every", () => {
    expect( _.every([3, 2, 1], e => e > 0)).toBe(true);
    expect( _.every([3, 2, 1], e => e > 1)).toBe(false);
});

test("some", () => {
    expect( _.some([3, 2, 1], e => e > 2)).toBe(true);
    expect( _.some([3, 2, 1], e => e < 0)).toBe(false);
});

test("includes", () => {
    expect( _.includes([3, 2, 1], 1)).toBe(true);
    expect( _.includes([3, 2, 1], 4)).toBe(false);
    expect( _.includes([3, 2, 1], 3)).toBe(true);
    expect( _.includes([3, 2, 1], 3, 1)).toBe(false);
});