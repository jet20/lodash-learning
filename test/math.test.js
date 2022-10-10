const _ = require('lodash');

it('add', function () {
    expect(_.add(1, 2)).toBe(3);
});

it('subtract', function () {
    expect(_.subtract(1, 2)).toBe(-1);
});

it('multiply', function () {
    expect(_.multiply(1, 2)).toBe(2);
});

it('divide', function () {
    expect(_.divide(1, 2)).toBe(0.5);
});

it('ceil', function () {
    expect(_.ceil(4.006)).toBe(5);
    expect(_.ceil(6.004, 2)).toBe(6.01);
    expect(_.ceil(6040, -2)).toBe(6100);    
});

it('floor', function () {
    expect(_.floor(4.006)).toBe(4);
    expect(_.floor(6.004, 2)).toBe(6.00);
    expect(_.floor(6040, -2)).toBe(6000);
});

it('round', function () {
    expect(_.round(4.006)).toBe(4);
    expect(_.round(4.006, 2)).toBe(4.01);
    expect(_.round(4060, -2)).toBe(4100);

    expect(_.round(3.5)).toBe(4);
    expect(_.round(4.5)).toBe(5);
});

it('max', function () {
    expect(_.max([4, 2, 8, 6])).toBe(8);
    expect(_.max([])).toBe(undefined);    
});

it('min', function () {
    expect(_.min([4, 2, 8, 6])).toBe(2);
    expect(_.min([])).toBe(undefined);
});

it('sum', function () {
    expect(_.sum([4, 2, 8, 6])).toBe(20);    
});

it('mean', function () {
    expect(_.mean([4, 2, 8, 6])).toBe(5);
});

it('maxBy', function () {
    const objects = [{ 'n': 1}, {name: "a",'n': 2}];
    expect(_.maxBy(objects, function(o) { return o.n; })).toEqual({name: "a", 'n': 2 });
    expect(_.maxBy(objects, 'n')).toEqual({name: "a", 'n': 2 });
});


it('minBy', function () {
    const objects = [{name: "a", 'n': 1}, {'n': 2}];
    expect(_.minBy(objects, function(o) { return o.n; })).toEqual({name: "a", 'n': 1 });
    expect(_.minBy(objects, 'n')).toEqual({name: "a", 'n': 1 });
});

it('sumBy', function () {
    const objects = [{'n': 4}, {'n': 2}, {'n': 8}, {'n': 6}];
    expect(_.sumBy(objects, function(o) { return o.n; })).toBe(20);
    expect(_.sumBy(objects, 'n')).toBe(20);
});

it('meanBy', function () {
    const objects = [{'n': 4}, {'n': 2}, {'n': 8}, {'n': 6}];
    expect(_.meanBy(objects, function(o) { return o.n; })).toBe(5);
    expect(_.meanBy(objects, 'n')).toBe(5);
});
