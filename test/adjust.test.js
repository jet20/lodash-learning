const _ = require('lodash');


describe("fill", () => {

    test("fill all", () => {
        const array = Array(3);
        expect(_.fill(array, 1)).toEqual([1, 1, 1]);
    });

    test("fill 到末尾", () => {
        const array = Array(3);
        expect(_.fill(array, 1, 1)).toEqual([undefined, 1, 1]);
    });

    test("fill 一部分", () => {
        const array = Array(3);
        expect(_.fill(array, 1, 1, 2)).toEqual([undefined, 1, undefined]);
    });
});

describe("flatten", () => {
    test("flatten 打平一层", () => {
        expect(_.flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
    });

    test("flatten 打平所有层", () => {
        expect(_.flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    });

    test("flatten 打平指定层", () => {
        expect(_.flattenDepth([1, [2, [3, [4]], 5]], 2)).toEqual([1, 2, 3, [4], 5]);
    });
});

describe("zip", () => {
    test("zip", () => {
        expect(_.zip(['fred', 'barney'], [30, 40], [true, false]))
            .toEqual([['fred', 30, true], ['barney', 40, false]]);
    });

    test("zipObject", () => {
        expect(_.zipObject(['fred', 'barney'], [30, 40]))
            .toEqual({fred: 30, 'barney': 40});
    });

    test("zipObjectDeep", () => {
        const expected = {
            a: {
                b: [
                    {c: 1},
                    {d: 2}
                ]
            }
        };
        expect(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])).toEqual(expected);
    });

    test("zipWith", () => {
        const result =_.zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
        expect(result).toEqual([111, 222]);
    });

    test("unzip", () => {
        const people = [['fred', 30, true], ['barney', 40, false]];
        expect(_.unzip(people)).toEqual([['fred', 'barney'], [30, 40], [true, false]]);
    });

    test("unzipWith", () => {
        const people = [[1, 10, 100], [2, 20, 200]];
        expect(_.unzipWith(people, _.add)).toEqual([3, 30, 300]);
    });
});

test("fromPairs", () => {
    expect(_.fromPairs([['fred', 30], ['barney', 40]])).toEqual({ 'fred': 30, 'barney': 40 });
})