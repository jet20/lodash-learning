const _ = require('lodash');

test("join", () => {
    expect(_.join(["a", "bc"])).toBe("a,bc");
    expect(_.join(["a", "bc"], "-")).toBe("a-bc");
});

test("uniq", () => {
    expect(_.uniq(["a", "bc", "a"])).toEqual(["a", "bc"]);
});

test("uniqWith", () => {
    const objects = [{x: 1, y: 2}, {x: 2, y: 1}, {x: 1, y: 2}];
    expect(_.uniqWith(objects, _.isEqual)).toStrictEqual([{x: 1, y: 2}, {x: 2, y: 1}]);
});

describe("uniqBy", () => {

    test("整数部分", () => {
        expect(_.uniqBy([2.1, 2.9, 3.1], Math.floor)).toEqual([2.1, 3.1]);
    });

    test("比较x值", () => {
        let points = [
            {x: 1, y: 1},
            {x: 2, y: 1},
            {x: 1, y: 0},
        ];
        const expected = [{x: 1, y: 1}, {x: 2, y: 1}];
        expect(_.uniqBy(points, "x")).toEqual(expected);
    });
})

test("intersection", () => {
    expect(_.intersection([1, 2, 3], [2, 3, 4], [2, 4, 5])).toEqual([2]);
});

test("intersectionWith", () => {
    const objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    const others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];

    expect(_.intersectionWith(objects, others, _.isEqual)).toEqual([{'x': 1, 'y': 2}]);
});

test("intersectionBy", () => {
    expect(_.intersectionBy([1.1, 2.1, 3.1], [2.2, 3.2, 4.2], [2.3, 4.3, 5.3], Math.floor))
        .toStrictEqual([2.1]);
});

test("union", () => {
    expect(_.union([1, 2, 3], [2, 3, 4], [2, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("unionWith", () => {
    const objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    const others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];
    const expected = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}, {'x': 1, 'y': 1}];
    expect(_.unionWith(objects, others, _.isEqual)).toEqual(expected);
});

test("unionBy", () => {
    expect(_.unionBy([1.1, 2.1, 3.1], [2.2, 3.2, 4.2], [2.3, 4.3, 5.3], Math.floor))
        .toStrictEqual([1.1, 2.1, 3.1, 4.2, 5.3]);
});

test("concat", ()=>{
    const array = [1];
    const other = _.concat(array, 2, [3], [[4]]);

    expect(other).toEqual([1, 2, 3, [4]]);

});


test("xor", () => {
    expect(_.xor([1, 2, 3], [2, 3, 4], [2, 4, 5])).toEqual([1, 5]);
});

test("xorWith", () => {
    const objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    const others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];
    const expected = [{'x': 2, 'y': 1}, {'x': 1, 'y': 1}];
    expect(_.xorWith(objects, others, _.isEqual)).toEqual(expected);
});

test("xorBy", () => {
    expect(_.xorBy([1.1, 2.1, 3.1], [2.2, 3.2, 4.2], [2.3, 4.3, 5.3], Math.floor))
        .toStrictEqual([1.1, 5.3]);
});
