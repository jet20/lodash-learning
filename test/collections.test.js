const _ = require("lodash");

it('find', () => {
    const users = [
        {'user': 'barney', 'age': 36, 'active': true},
        {'user': 'fred', 'age': 40, 'active': false},
        {'user': 'pebbles', 'age': 1, 'active': true}
    ];

    expect(_.find(users, o => o.age < 40)).toEqual({'user': 'barney', 'age': 36, 'active': true});

    expect(_.find(users, {'age': 1, 'active': true})).toEqual({'user': 'pebbles', 'age': 1, 'active': true});

    expect(_.find(users, ['active', false])).toEqual({'user': 'fred', 'age': 40, 'active': false});

    expect(_.find(users, 'active')).toEqual({'user': 'barney', 'age': 36, 'active': true});
});

it('findLast', () => {
    expect(_.findLast([1, 2, 3, 4], n => n % 2 == 1)).toBe(3);
});

it('filter', () => {
    const users = [
        {'user': 'barney', 'age': 36, 'active': true},
        {'user': 'fred', 'age': 40, 'active': false}
    ];

    expect(_.filter(users, o => !o.active)).toEqual([{'user': 'fred', 'age': 40, 'active': false}]);

    expect(_.filter(users, {'age': 36, 'active': true})).toEqual([{'user': 'barney', 'age': 36, 'active': true}]);

    expect(_.filter(users, ['active', false])).toEqual([{'user': 'fred', 'age': 40, 'active': false}]);

    expect(_.filter(users, 'active')).toEqual([{'user': 'barney', 'age': 36, 'active': true}]);

});

it('reject', () => {
    const users = [
        {'user': 'barney', 'age': 36, 'active': false},
        {'user': 'fred', 'age': 40, 'active': true}
    ];

    expect(_.reject(users, o => !o.active))
        .toEqual([{'user': 'fred', 'age': 40, 'active': true}]);
    expect(_.reject(users, {'age': 40, 'active': true}))
        .toEqual([{'user': 'barney', 'age': 36, 'active': false}]);
    expect(_.reject(users, ['active', false]))
        .toEqual([{'user': 'fred', 'age': 40, 'active': true}]);
    expect(_.reject(users, 'active'))
        .toEqual([{'user': 'barney', 'age': 36, 'active': false}]);
});

it('sortBy', () => {
    const users = [
        {'user': 'fred', 'age': 48},
        {'user': 'barney', 'age': 36},
        {'user': 'fred', 'age': 40},
        {'user': 'barney', 'age': 34},
    ];

    expect(_.sortBy(users, o => o.user)).toEqual([
        {'user': 'barney', 'age': 36},
        {'user': 'barney', 'age': 34},
        {'user': 'fred', 'age': 48},
        {'user': 'fred', 'age': 40},
    ]);

    // users不变
    expect(users).toEqual([
        {'user': 'fred', 'age': 48},
        {'user': 'barney', 'age': 36},
        {'user': 'fred', 'age': 40},
        {'user': 'barney', 'age': 34},
    ]);

    expect(_.sortBy(users, ['user', 'age'])).toEqual([
        {'user': 'barney', 'age': 34},
        {'user': 'barney', 'age': 36},
        {'user': 'fred', 'age': 40},
        {'user': 'fred', 'age': 48},
    ]);

    expect(_.sortBy(users, 'user', o => Math.floor(o.age / 10))).toEqual([
        {'user': 'barney', 'age': 36},
        {'user': 'barney', 'age': 34},
        {'user': 'fred', 'age': 48},
        {'user': 'fred', 'age': 40},
    ]);
});

it('orderBy', function () {
    var users = [
        {'user': 'fred', 'age': 48},
        {'user': 'barney', 'age': 34},
        {'user': 'fred', 'age': 40},
        {'user': 'barney', 'age': 36}
    ];

    expect(_.orderBy(users, ['user', 'age'], ['asc', 'desc'])).toEqual([
        {'user': 'barney', 'age': 36},
        {'user': 'barney', 'age': 34},
        {'user': 'fred', 'age': 48},
        {'user': 'fred', 'age': 40},
    ]);

});

it('shuffle', function () {
    expect(_.shuffle([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4]);
});

it('sample', function () {
    const item = _.sample([1, 2, 3, 4]);
    expect([1, 2, 3, 4]).toContain(item);
});

it('sampleSize', function () {
    let numbers = [1, 2, 3];
    const result = _.sampleSize(numbers, 2);
    expect(result.every(e => numbers.includes(e))).toBe(true);
});

describe('map', function () {
    it('square', function () {
        function square(n) {
            return n * n;
        }

        expect(_.map([4, 8], square)).toEqual([16, 64]);
        expect(_.map({'a': 4, 'b': 8}, square)).toEqual([16, 64]);

    });
    it('object', function () {
        var users = [
            {'user': 'barney'},
            {'user': 'fred'}
        ];

        expect(_.map(users, 'user')).toEqual(['barney', 'fred']);
    });
});

it('flatMap', function () {
    function duplicate(n) {
        return [n, n];
    }

    expect(_.flatMap([1, 2], duplicate)).toEqual([1, 1, 2, 2]);
});

it('flatMapDeep', function () {
    function duplicate(n) {
        return [[[n, n]]];
    }

    expect(_.flatMapDeep([1, 2], duplicate)).toEqual([1, 1, 2, 2]);
});

it('flatMapDepth', function () {
    function duplicate(n) {
        return [[[n, n]]];
    }

    expect(_.flatMapDepth([1, 2], duplicate, 2)).toEqual([[1, 1], [2, 2]]);
});

it('invokeMap', function () {
    expect(_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')).toEqual([[1, 5, 7], [1, 2, 3]]);
    expect(_.invokeMap([123, 456], String.prototype.split, '')).toEqual([['1', '2', '3'], ['4', '5', '6']]);
});

describe('partition', function () {
    var users = [
        {'user': 'barney', 'age': 36, 'active': false},
        {'user': 'fred', 'age': 40, 'active': true},
        {'user': 'pebbles', 'age': 1, 'active': false},
    ];

    it('function', function () {
        expect(_.partition(users, o => o.active)).toEqual([
            [
                {'user': 'fred', 'age': 40, 'active': true},
            ],
            [
                {'user': 'barney', 'age': 36, 'active': false},
                {'user': 'pebbles', 'age': 1, 'active': false}
            ]
        ]);
    });

    it('matches', function () {
        // The `_.matches` iteratee shorthand.
        expect(_.partition(users, {'age': 1, 'active': false})).toEqual(
            [
                [
                    {'user': 'pebbles', 'age': 1, 'active': false},
                ],
                [
                    {'user': 'barney', 'age': 36, 'active': false},
                    {'user': 'fred', 'age': 40, 'active': true},
                ]
            ]);
    });

    it('matchesProperty', function () {

// The `_.matchesProperty` iteratee shorthand.
        expect(_.partition(users, ['active', false])).toEqual([
            [
                {'user': 'barney', 'age': 36, 'active': false},
                {'user': 'pebbles', 'age': 1, 'active': false}
            ],
            [
                {'user': 'fred', 'age': 40, 'active': true}
            ]
        ]);
    });

    it('property', function () {
        expect(_.partition(users, 'active')).toEqual([
            [
                {'user': 'fred', 'age': 40, 'active': true}
            ],
            [
                {'user': 'barney', 'age': 36, 'active': false},
                {'user': 'pebbles', 'age': 1, 'active': false}
            ],
        ]);
    });
});

describe('keyBy', function () {
    var array = [
        {'dir': 'right', 'code': 97},
        {'dir': 'left', 'code': 97},
        {'dir': 'right', 'code': 100}
    ];
    it('function', function () {
        expect(_.keyBy(array, o => String.fromCharCode(o.code)))
            .toEqual({
                'a': {'dir': 'left', 'code': 97},
                'd': {'dir': 'right', 'code': 100}
            });
    });

    it('property', function () {
        expect(_.keyBy(array, 'dir')).toEqual({
            'left': {'dir': 'left', 'code': 97},
            'right': {'dir': 'right', 'code': 100}
        });
    });
});

describe('countBy', function () {
    it('floor', function () {
        expect(_.countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 });
    });

    it('length', function () {
        expect(_.countBy(['one', 'two', 'three'], 'length')).toEqual({ '3': 2, '5': 1 });
    });
});

it('groupBy', function () {
    expect(_.groupBy([6.1, 4.2, 6.3], Math.floor))
        .toEqual({ '4': [4.2], '6': [6.1, 6.3] });

    expect(_.groupBy(['one', 'two', 'three'], 'length'))
        .toEqual({ '3': ['one', 'two'], '5': ['three'] });
});