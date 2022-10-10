const _ = require('lodash');


describe('==逻辑相等运算符', () => {

    test('3 == "3" : true', () => {
        expect(3 == '3').toBe(true);
    });

    test('null == undefined : true', () => {
        expect(null == undefined).toBe(true);
    });

    test('{x: 3} == {x: 3} : false', () => {
        expect({x: 3} == {x: 3}).toBe(false);
    });

    test('NaN == NaN : false', () => {
        expect(NaN == NaN).toBe(false);
    });

    test('Infinity == Infinity : true', () => {
        expect(Infinity == Infinity).toBe(true);
    });

    test('-Infinity == -Infinity : true', () => {
        expect(-Infinity == -Infinity).toBe(true);
    });

    test('-0 == +0 : true', () => {
        expect(-0 == +0).toBe(true);
    });
});


describe('!=逻辑不等运算符', () => {

    test('3 != "3" : false', () => {
        expect(3 != '3').toBe(false);
    });

    test('null != undefined : false', () => {
        expect(null != undefined).toBe(false);
    });

    test('{x: 3} != {x: 3}  : true', () => {
        expect({x: 3} != {x: 3}).toBe(true);
    });

    test('NaN != NaN  : true', () => {
        expect(NaN != NaN).toBe(true);
    });

    test('Infinity != Infinity : false', () => {
        expect(Infinity != Infinity).toBe(false);
    });

    test('-Infinity != -Infinity : false', () => {
        expect(-Infinity != -Infinity).toBe(false);
    });

    test('-0 != +0 : false', () => {
        expect(-0 != +0).toBe(false);
    });
});


describe('===严格相等运算符', () => {

    test('3 === "3" : false', () => {
        expect(3 === '3').toBe(false);
    });

    test('null === undefined  : false', () => {
        expect(null === undefined).toBe(false);
    });

    test('{x: 3} === {x: 3}  : false', () => {
        expect({x: 3} === {x: 3}).toBe(false);
    });

    test('NaN === NaN : false', () => {
        expect(NaN === NaN).toBe(false);
    });

    test('Infinity === Infinity : true', () => {
        expect(Infinity === Infinity).toBe(true);
    });

    test('-Infinity === -Infinity : true', () => {
        expect(-Infinity === -Infinity).toBe(true);
    });

    test('-0 === +0 : true', () => {
        expect(-0 === +0).toBe(true);
    });

});


describe('Same Value(Object.is)', () => {

    test('Object.is(3, "3") : false', () => {
        expect(Object.is(3, "3")).toBe(false);
    });

    test('Object.is(null, undefined) : false', () => {
        expect(Object.is(null, undefined)).toBe(false);
    });

    test('Object.is({x: 3},{x: 3})  : false', () => {
        expect(Object.is({x: 3}, {x: 3})).toBe(false);
    });

    test('Object.is(NaN, NaN) : true', () => {
        expect(Object.is(NaN, NaN)).toBe(true);
    });

    test('Object.is(Infinity, Infinity) : true', () => {
        expect(Object.is(Infinity, Infinity)).toBe(true);
    });

    test('Object.is(-Infinity, -Infinity) : true', () => {
        expect(Object.is(-Infinity, -Infinity)).toBe(true);
    });

    test('Object.is(-0, +0) : false', () => {
        expect(Object.is(-0, +0)).toBe(false);
    });
});


describe('SameValueZero(_.eq)', () => {

    test('_.eq(3, "3") : false', () => {
        expect(_.eq(3, "3")).toBe(false);
    });

    test('_.eq(null, undefined) : false', () => {
        expect(_.eq(null, undefined)).toBe(false);
    });

    test('_.eq({x: 3},{x: 3})  : false', () => {
        expect(_.eq({x: 3}, {x: 3})).toBe(false);
    });

    test('_.eq(NaN, NaN) : true', () => {
        expect(_.eq(NaN, NaN)).toBe(true);
    });

    test('_.eq(Infinity, Infinity) : true', () => {
        expect(_.eq(Infinity, Infinity)).toBe(true);
    });

    test('_.eq(-Infinity, -Infinity) : true', () => {
        expect(_.eq(-Infinity, -Infinity)).toBe(true);
    });

    test('_.eq(-0, +0) : false', () => {
        expect(_.eq(-0, +0)).toBe(true);
    });

});


describe('对象深度比较(_.isEqual)', () => {

    test('isEqual', () => {
        const object = {'a': 1};
        const other = {'a': 1};

        expect(_.isEqual(object, other)).toBe(true);
    });

    test('isEqualWith', () => {
        function isGreeting(value) {
            return /^h(?:i|ello)$/.test(value);
        }

        function customizer(objValue, othValue) {
            if (isGreeting(objValue) && isGreeting(othValue)) {
                return true;
            }
        }

        const array = ['hello', 'goodbye'];
        const other = ['hi', 'goodbye'];

        expect(_.isEqualWith(array, other, customizer)).toBe(true);
    });


});
