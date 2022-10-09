const _ = require('lodash');

test("remove", () => {
    const array = [1, 2, 3, 4];
    const evens = _.remove(array, n => n % 2 == 0);

    expect(array).toEqual([1, 3]);
    expect(evens).toEqual([2, 4]);
});

test("pull", () => {
    const array = [1, 2, 3, 1, 2, 3];
    const result =_.pull(array, 2, 3);
    expect(array).toEqual([1, 1]);
    expect(result).toBe(array);
});

test("pullAll", () => {
    const array = [1, 2, 3, 1, 2, 3];
    const result =_.pullAll(array, [2, 3]);
    expect(array).toEqual([1, 1]);
    expect(result).toBe(array);
});

test("pullAt", () => {
    const array = [1, 2, 3, 1, 2, 3];
    const result =_.pullAt(array, 2, 3);
    expect(array).toEqual([1, 2, 2, 3]);
    expect(result).toEqual([3, 1]);
});

test("pullAllWith", () => {
    const array = [{'x': 1, 'y': 2}, {'x': 3, 'y': 4}, {'x': 5, 'y': 6}];
    const result = _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
    expect(array).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]);
    expect(result).toBe(array);
});

test("pullAllBy", () => {
    const array = [{'x': 1}, {'x': 2}, {'x': 3}, {'x': 1}];
    const result = _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
    expect(array).toEqual([{ 'x': 2 }]);
    expect(result).toBe(array);
});