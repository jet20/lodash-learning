const _ = require('lodash');

test("difference", () => {
    const array = [3, 2, 1];
    const result = _.difference(array, [4, 2]);

    expect(array).toEqual([3, 2, 1]);
    expect(result).toEqual([3, 1]);
});

test("differenceBy", () => {
    expect(_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor))
        .toEqual([3.1, 1.3]);

    expect(_.differenceBy([{'x': 2}, {'x': 1}], [{'x': 1}], 'x'))
        .toEqual([{'x': 2}]);
});

test("differenceWith", () => {
    const objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];

    expect(_.differenceWith(objects, [{'x': 1, 'y': 2}], _.isEqual))
        .toEqual([{'x': 2, 'y': 1}]);
});

test("drop", () => {
    const array = [1, 2, 3];
    expect(_.drop(array)).toEqual([2, 3]);
    expect(array).toEqual([1, 2, 3]);

    expect(_.drop(array, 2)).toEqual([3]);
    expect(_.drop(array, 5)).toEqual([]);
    expect(_.drop(array, 0)).toEqual([1, 2, 3]);
});

test("dropRight", () => {
    const array = [1, 2, 3];
    expect(_.dropRight(array)).toEqual([1, 2]);
    expect(_.dropRight(array, 2)).toEqual([1]);
    expect(_.dropRight(array, 5)).toEqual([]);
    expect(_.dropRight(array, 0)).toEqual([1, 2, 3]);
});

describe("dropWhile", () => {
    test("dropWhile function", () => {
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ];

        expect(_.dropWhile(users, o => !o.active)).toEqual([
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ]);
    });

    test("dropWhile matches", () => {
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ];

        expect(_.dropWhile(users, {'user': 'barney', 'active': false})).toEqual([
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ]);
    });


    test("dropWhile matchesProperty", () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ];
        expect(_.dropWhile(users, ['active', true])).toEqual([
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ]);
    });

    test("dropWhile property", () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ];
        expect(_.dropWhile(users, 'active')).toEqual([
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ]);
    });
});

describe("dropRightWhile", () => {
    test("dropRightWhile function", () => {
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ];

        expect(_.dropRightWhile(users, o => !o.active)).toEqual([
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
        ]);
    });

    test("dropRightWhile matches", () => {
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ];

        expect(_.dropRightWhile(users, {'user': 'tom', 'active': false})).toEqual([
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
        ]);
    });


    test("dropRightWhile matchesProperty", () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ];
        expect(_.dropRightWhile(users, ['active', true])).toEqual([
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
        ]);
    });

    test("dropWhile property", () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ];
        expect(_.dropRightWhile(users, 'active')).toEqual([
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
        ]);
    });
});


test("take", () => {
    const array = [1, 2, 3];
    expect(_.take(array)).toEqual([1]);
    expect(array).toEqual([1, 2, 3]);

    expect(_.take(array, 2)).toEqual([1, 2]);
    expect(_.take(array, 5)).toEqual([1, 2, 3]);
    expect(_.take(array, 0)).toEqual([]);
});

test("takeRight", () => {
    const array = [1, 2, 3];
    expect(_.takeRight(array)).toEqual([3]);
    expect(_.takeRight(array, 2)).toEqual([2, 3]);
    expect(_.takeRight(array, 5)).toEqual([1, 2, 3]);
    expect(_.takeRight(array, 0)).toEqual([]);
});


describe("takeWhile", () => {
    test("takeWhile function", () => {
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ];

        expect(_.takeWhile(users, o => !o.active)).toEqual([
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
        ]);
    });

    test("takeWhile matches", () => {
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ];

        expect(_.takeWhile(users, {'user': 'barney', 'active': false})).toEqual([
            {'user': 'barney', 'active': false}
        ]);
    });


    test("takeWhile matchesProperty", () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ];
        expect(_.takeWhile(users, ['active', true])).toEqual([
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
        ]);
    });

    test("takeWhile property", () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ];
        expect(_.takeWhile(users, 'active')).toEqual([
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
        ]);
    });
});


describe("takeRightWhile", () => {
    test("takeRightWhile function", () => {
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ];

        expect(_.takeRightWhile(users, o => !o.active)).toEqual([
            {'user': 'tom', 'active': false},
        ]);
    });

    test("takeRightWhile matches", () => {
        const users = [
            {'user': 'barney', 'active': false},
            {'user': 'fred', 'active': false},
            {'user': 'pebbles', 'active': true},
            {'user': 'tom', 'active': false},
        ];

        expect(_.takeRightWhile(users, {'user': 'tom', 'active': false})).toEqual([
            {'user': 'tom', 'active': false}
        ]);
    });


    test("takeRightWhile matchesProperty", () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ];
        expect(_.takeRightWhile(users, ['active', true])).toEqual([
            {'user': 'tom', 'active': true},
        ]);
    });

    test("takeRightWhile property", () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': true},
            {'user': 'pebbles', 'active': false},
            {'user': 'tom', 'active': true},
        ];
        expect(_.takeRightWhile(users, 'active')).toEqual([
            {'user': 'tom', 'active': true},
        ]);
    });
});

test("tail", () => {
    const array = [1, 2, 3];
    expect(_.tail(array)).toEqual([2, 3]);
    expect(array).toEqual([1, 2, 3]);
});

test("initial", () => {
    const array = [1, 2, 3];
    expect(_.initial(array)).toEqual([1, 2]);
    expect(array).toEqual([1, 2, 3]);
});

test("without", () => {
    const array = [2, 1, 2, 3];
    expect(_.without(array, 1, 2)).toEqual([3]);
    expect(array).toEqual([2, 1, 2, 3]);
});



test("compact", () => {
    const array = [0, 1, false, 2, '', 3]
    expect(_.compact(array)).toEqual([1, 2, 3]);
    expect(array).toEqual([0, 1, false, 2, '', 3]);
});


