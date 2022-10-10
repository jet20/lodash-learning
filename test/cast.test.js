const _ = require("lodash");
const {JSDOM} = require("jsdom");

describe('castArray', function () {

    it('非数组值 -> [值]', function () {
        expect(_.castArray(1)).toEqual([1]);
        expect(_.castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
        expect(_.castArray('abc')).toEqual(['abc']);
        expect(_.castArray(null)).toEqual([null]);
        expect(_.castArray(undefined)).toEqual([undefined]);
    });

    it('无参数转为空数组', function () {
        expect(_.castArray()).toEqual([]);
    });


    it('数组不变', function () {
        const array = [1, 2, 3];
        expect(_.castArray(array) === array).toBe(true);
    });
});


describe('toArray', function () {
    it('取对象的值数组', function () {
        expect(_.toArray({ 'a': 1, 'b': 2 })).toEqual([1, 2]);
    });
    it('字符串转为字符数组', function () {
        expect(_.toArray('abc')).toEqual(['a', 'b', 'c']);
    });
    it('非数组转为空数组', function () {
        expect(_.toArray(1)).toEqual([]);
        expect(_.toArray(null)).toEqual([]);
    });
});

describe('toFinite', function () {
    it('to finite', function () {
        expect(_.toFinite(3.2)).toBe(3.2);
        expect(_.toFinite(Number.MIN_VALUE)).toBe(5e-324);
        expect(_.toFinite(Infinity)).toBe(1.7976931348623157e+308);
        expect(_.toFinite('3.2')).toBe(3.2);
        
        expect(_.toFinite(NaN)).toBe(0);
        expect(_.toFinite("x")).toBe(0);
    });
});

it('to integer', function () {
    expect(_.toInteger(3.2)).toBe(3);
    expect(_.toInteger(Number.MIN_VALUE)).toBe(0);
    expect(_.toInteger(Infinity)).toBe(1.7976931348623157e+308);
    expect(_.toInteger('3.2')).toBe(3);    
});

it('to length', function () {
    expect(_.toLength(3.2)).toBe(3);
    expect(_.toLength(Number.MIN_VALUE)).toBe(0);
    expect(_.toLength(Infinity)).toBe(4294967295);
    expect(_.toLength('3.2')).toBe(3);    
});

it('to number', function () {
    expect(_.toNumber(3.2)).toBe(3.2);
    expect(_.toNumber(Number.MIN_VALUE)).toBe(5e-324);
    expect(_.toNumber(Infinity)).toBe(Infinity);
    expect(_.toNumber('3.2')).toBe(3.2);    
});

it('to safe integer', function () {
    expect(_.toSafeInteger(3.2)).toBe(3);
    expect(_.toSafeInteger(Number.MIN_VALUE)).toBe(0);
    expect(_.toSafeInteger(Infinity)).toBe(9007199254740991);
    expect(_.toSafeInteger('3.2')).toBe(3);    
});

it('to plain object', function () {
    function Foo() {
        this.b = 2;
    }

    Foo.prototype.c = 3;

    expect(_.assign({ 'a': 1 }, new Foo)).toEqual({ 'a': 1, 'b': 2 });
    expect(_.assign({ 'a': 1 }, _.toPlainObject(new Foo))).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
});

describe('to string', function () {
    it('to string', function () {
        expect(_.toString(null)).toBe('');
        expect(_.toString(-0)).toBe('-0');
        expect(_.toString([1, 2, 3])).toBe('1,2,3');        
    });
});

it('clone', function () {
    const objects = [{'a': 1}, {'b': 2}];
    const shallow = _.clone(objects);
    expect(shallow === objects).toBe(false);
    expect(shallow[0] === objects[0]).toBe(true);
});

it('cloneDeep', function () {
    const objects = [{'a': 1}, {'b': 2}];
    const shallow = _.cloneDeep(objects);
    expect(shallow === objects).toBe(false);
    expect(shallow[0] === objects[0]).toBe(false);
});

it('cloneWith', function () {
    const document = new JSDOM(`<div>a</div><div>b</div>`).window.document;

    function customizer(value) {
        if (_.isElement(value)) {
            return value.cloneNode(false);
        }
    }

    const el = _.cloneWith(document.body, customizer);

    expect(el === document.body).toBe(false);
    expect(el.nodeName).toBe('BODY');
    expect(el.childNodes.length).toBe(0);
});

it('cloneDeepWith', function () {
    const document = new JSDOM(`<div>a</div><div>b</div>`).window.document;

    function customizer(value) {
        if (_.isElement(value)) {
            return value.cloneNode(true);
        }
    }

    const el = _.cloneDeepWith(document.body, customizer);

    expect(el === document.body).toBe(false);
    expect(el.nodeName).toBe('BODY');
    expect(el.childNodes.length).toBe(2);
});