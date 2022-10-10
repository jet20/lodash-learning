const _ = require('lodash');

test("first", () => {
    expect(_.first([3, 2, 1])).toBe(3);
});

test("head", () => {
    expect(_.head([3, 2, 1])).toBe(3);
});

test("last", () => {
    expect(_.last([3, 2, 1])).toBe(1);
});

test("nth", () => {
    expect(_.nth([3, 2, 1])).toBe(3);
    expect(_.nth([3, 2, 1], 1)).toBe(2);
    expect(_.nth([3, 2, 1], -1)).toBe(1);

    expect(_.nth([3, 2, 1], 5)).toBe(undefined);
});

test("indexOf", () => {
    expect(_.indexOf([1, 2, 1, 2], 2)).toBe(1);
    expect(_.indexOf([1, 2, 1, 2], 3)).toBe(-1);
    expect(_.indexOf([1, 2, 1, 2], 2, 2)).toBe(3);
    expect(_.indexOf([1, 2, 1, 2, 1, 2], 2, -1)).toBe(5);
});

test("lastIndexOf", () => {
    expect(_.lastIndexOf([1, 2, 1, 2], 2)).toBe(3);
    expect(_.lastIndexOf([1, 2, 1, 2, 1, 2], 2, 2)).toBe(1);
    expect(_.lastIndexOf([1, 2, 1, 2, 1, 2], 2, -1)).toBe(5);
});

describe("findIndex", () => {
    test("findIndex function", () => {
        const users = [
            {'user': 'barney', 'age': 36, 'active': true},
            {'user': 'fred', 'age': 40, 'active': false},
            {'user': 'pebbles', 'age': 1, 'active': true}
        ];

        expect(_.findIndex(users, o => o.age < 40)).toBe(0);
    });

    test("findIndex _.matches", () => {
        const users = [
            {'user': 'barney', 'age': 36, 'active': true},
            {'user': 'fred', 'age': 40, 'active': false},
            {'user': 'pebbles', 'age': 1, 'active': true}
        ];

        // The `_.matches` iteratee shorthand.
        expect(_.findIndex(users, {'age': 1, 'active': true})).toBe(2);
    });

    test("findIndex _.matchesProperty", () => {
        const users = [
            {'user': 'barney', 'age': 36, 'active': true},
            {'user': 'fred', 'age': 40, 'active': false},
            {'user': 'pebbles', 'age': 1, 'active': true}
        ];

        // The `_.matches` iteratee shorthand.
        expect(_.findIndex(users, ['active', false])).toBe(1);
    });


    test("findIndex _.property", () => {
        const users = [
            {'user': 'barney', 'age': 36, 'active': true},
            {'user': 'fred', 'age': 40, 'active': false},
            {'user': 'pebbles', 'age': 1, 'active': true}
        ];

        // The `_.matches` iteratee shorthand.
        expect(_.findIndex(users, 'active')).toBe(0);
    });

});
describe("findLastIndex", () => {

    test("findLastIndex function", () => {
        const users = [
            { 'user': 'barney',  'active': true },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': false }
        ];

        expect(_.findIndex(users, o => o.user == 'fred')).toBe(1);
    });

    test("findLastIndex _.matches", () => {
        const users = [
            { 'user': 'barney',  'active': true },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': false }
        ];

        expect(_.findLastIndex(users, { 'user': 'barney', 'active': true })).toBe(0);
    });

    test("findLastIndex _.matchesProperty", () => {
        const users = [
            { 'user': 'barney',  'active': true },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': false }
        ];

        expect(_.findLastIndex(users, ['active', false])).toBe(2);
    });

    test("findLastIndex _.property", () => {
        const users = [
            { 'user': 'barney',  'active': true },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': false }
        ];

        expect(_.findLastIndex(users, 'active')).toBe(0);
    });

});