const _ = require('lodash');
const { JSDOM } = require("jsdom");

test("isString", () => {
    expect(_.isString('abc')).toBe(true);
    expect(_.isString(1)).toBe(false);
});

test("isBoolean", () => {
    expect(_.isBoolean(false)).toBe(true);
    expect(_.isBoolean(false)).toBe(true);
    expect(_.isBoolean(null)).toBe(false);
});

test("isNumber", () => {
    expect(_.isNumber(3)).toBe(true);
    expect(_.isNumber(Number.MIN_VALUE)).toBe(true);
    expect(_.isNumber(Infinity)).toBe(true);
    expect(_.isNumber('3')).toBe(false);
});

test("isInteger", () => {
    expect(_.isInteger(3)).toBe(true);
    expect(_.isInteger(Number.MIN_VALUE)).toBe(false);
    expect(_.isInteger(Infinity)).toBe(false);
    expect(_.isInteger('3')).toBe(false);

    expect(_.isInteger(Math.pow(2, 53) - 1)).toBe(true);
    expect(_.isInteger(Math.pow(2, 53) )).toBe(true);
});


test("isSafeInteger", () => {
    expect(_.isSafeInteger(3)).toBe(true);
    expect(_.isSafeInteger(Number.MIN_VALUE)).toBe(false);
    expect(_.isSafeInteger(Infinity)).toBe(false);
    expect(_.isSafeInteger('3')).toBe(false);

    expect(_.isSafeInteger(Math.pow(2, 53) - 1)).toBe(true);
    expect(_.isSafeInteger(Math.pow(2, 53) )).toBe(false);
});


test("isFinite", () => {
    expect(_.isFinite(3)).toBe(true);
    expect(_.isFinite(Number.MIN_VALUE)).toBe(true);
    expect(_.isFinite(Infinity)).toBe(false);
    expect(_.isFinite('3')).toBe(false);
});

test("isNaN", () => {
    expect(_.isNaN(NaN)).toBe(true);
    expect(_.isNaN(new Number(NaN))).toBe(true);
    expect(isNaN(undefined)).toBe(true);
    expect(_.isNaN(undefined)).toBe(false);
});

test("isNull", () => {
    expect(_.isNull(null)).toBe(true);
    expect(_.isNull(void 0)).toBe(false);
});


test("isNil", () => {
    expect(_.isNil(null)).toBe(true);
    expect(_.isNil(void 0)).toBe(true);
    expect(_.isNil(NaN)).toBe(false);
});

test("isUndefined", () => {
    expect(_.isUndefined(void 0)).toBe(true);
    expect(_.isUndefined(null)).toBe(false);
});


test("isObject", () => {
    expect(_.isObject({})).toBe(true);
    expect(_.isObject([1, 2, 3])).toBe(true);
    expect(_.isObject(_.noop)).toBe(true);
    expect(_.isObject(null)).toBe(false);
    expect(_.isObject(1)).toBe(false);
});


test("isArguments", () => {
    expect(_.isArguments(function () {
        return arguments;
    }())).toBe(true);
    expect(_.isArguments(_.isArguments([1, 2, 3]))).toBe(false);
});

test("isArray", () => {
    expect(_.isArray([1, 2, 3])).toBe(true);
    expect(_.isArray('abc')).toBe(false);
    expect(_.isArray(_.noop)).toBe(false);
});

test("isNative", () => {
    expect(_.isNative(Array.prototype.push)).toBe(true);
    expect(_.isNative(_)).toBe(false);
});

test("isSymbol", () => {
    expect(_.isSymbol(Symbol.iterator)).toBe(true);
    expect(_.isSymbol(Symbol())).toBe(true);
    expect(_.isSymbol('abc')).toBe(false);
});

test("isMap", () => {
    expect(_.isMap(new Map)).toBe(true);
    expect(_.isMap(new WeakMap)).toBe(false);    
    expect(_.isMap({})).toBe(false);
});


test("isFunction", () => {
    expect(_.isFunction(_)).toBe(true);
    expect(_.isFunction(/abc/)).toBe(false);
});

test("isSet", () => {
    expect(_.isSet(new Set)).toBe(true);
    expect(_.isSet(new WeakSet)).toBe(false);
});

test("isWeakMap", () => {
    expect(_.isWeakMap(new WeakMap)).toBe(true);
    expect(_.isWeakMap(new Map)).toBe(false);
});

test("isWeakSet", () => {
    expect(_.isWeakSet(new WeakSet)).toBe(true);
    expect(_.isWeakSet(new Set)).toBe(false);
});

test("isDate", () => {
    expect(_.isDate(new Date)).toBe(true);
    expect(_.isDate('Mon April 23 2012')).toBe(false);
    expect(_.isDate(Date.now())).toBe(false);
});


test("isRegExp", () => {
    expect(_.isRegExp(/abc/)).toBe(true);
    expect(_.isRegExp('/abc/')).toBe(false);    
});

test("isBuffer", () => {
    expect(_.isBuffer(Buffer.alloc(2))).toBe(true);
    expect(_.isBuffer(new Uint8Array(2))).toBe(false);    
});


test("isArrayBuffer", () => {
    expect(_.isArrayBuffer(new ArrayBuffer(2))).toBe(true);
    expect(_.isArrayBuffer(new Array(2))).toBe(false);    
    expect(_.isArrayBuffer(Buffer.alloc(2))).toBe(false);
});

test("isTypedArray", () => {
    expect(_.isTypedArray(new Int8Array(2))).toBe(true);
    expect(_.isTypedArray(new Uint8Array(2))).toBe(true);
    expect(_.isTypedArray(new Uint8ClampedArray(2))).toBe(true);
    expect(_.isTypedArray(new Int16Array(2))).toBe(true);
    expect(_.isTypedArray(new Uint16Array (2))).toBe(true);
    expect(_.isTypedArray(new Int32Array(2))).toBe(true);
    expect(_.isTypedArray(new Uint32Array(2))).toBe(true);
    expect(_.isTypedArray(new Float32Array(2))).toBe(true);
    expect(_.isTypedArray(new Float64Array(2))).toBe(true);
    expect(_.isTypedArray(new BigInt64Array(2))).toBe(true);
    expect(_.isTypedArray(new BigUint64Array(2))).toBe(true);


    expect(_.isTypedArray([])).toBe(false);
});

test("isArrayLike", () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
    expect(_.isArrayLike('abc')).toBe(true);

    const document = new JSDOM(`<div>a</div><div>b</div>`).window.document;
    expect(_.isArrayLike(document.body.children)).toBe(true);

    expect(_.isArrayLike(_.noop)).toBe(false);
});

test("isArrayLikeObject", () => {
    const document = new JSDOM(`<div>a</div><div>b</div>`).window.document;

    expect(_.isArrayLikeObject([1, 2, 3])).toBe(true);
    expect(_.isArrayLikeObject(document.body.children)).toBe(true);
    expect(_.isArrayLikeObject('abc')).toBe(false);
    expect(_.isArrayLikeObject(_.noop)).toBe(false);
});

describe('isElement', () => {

    const document = new JSDOM(`<div>a</div><div>b</div>`).window.document;

    test("body isElement", () => {
        expect(_.isElement(document.body)).toBe(true);
    });

    test("string is not a element", () => {
        expect(_.isElement('<body>')).toBe(false);
    });
});

describe('isError', () => {
    test('error object is error ', () => {
        expect(_.isError(new Error)).toBe(true);
    });

    test('error 构造函数 is not error', () => {
        expect(_.isError(Error)).toBe(false);
    });
});

describe('isLength', () => {
    it('3是有效长度', () => {
        expect(_.isLength(3)).toBe(true);
    });

    it('小数不是有效长度', () => {
        expect(_.isLength(Number.MIN_VALUE)).toBe(false);
        expect(_.isLength(Infinity)).toBe(false);
    });

    it('字符串"3"不是有效长度', () => {
        expect(_.isLength('3')).toBe(false);
    });
});

describe('isEmpty', () => {
    it('null is empty', () => {
        expect(_.isEmpty(null)).toBe(true);
        expect(_.isEmpty(undefined)).toBe(true);
        expect(_.isEmpty(_.noop)).toBe(true);
    });

    it('bool为空', () => {
        expect(_.isEmpty(true)).toBe(true);
        expect(_.isEmpty(false)).toBe(true);
        expect(_.isEmpty(new Boolean(true))).toBe(true);
    });

    it('number为空', () => {
        expect(_.isEmpty(1)).toBe(true);
        expect(_.isEmpty(new Number(1))).toBe(true);
    });

    it('只有空字符串为空', () => {
        expect(_.isEmpty("1")).toBe(false);
        expect(_.isEmpty("")).toBe(true);
    });

    it('只有空数组为空', () => {
        expect(_.isEmpty([1, 2, 3])).toBe(false);
        expect(_.isEmpty([])).toBe(true);
    });

    it('只有空对象为空', () => {
        expect(_.isEmpty({ 'a': 1 })).toBe(false);
        expect(_.isEmpty({})).toBe(true);
    });
});

describe('isMatch', () => {
    const object = {'a': 1, 'b': 2};

    it('属性和值都匹配', () => {
        expect(_.isMatch(object, { 'b': 2 })).toBe(true);
    });

    it('值不匹配', () => {
        expect(_.isMatch(object, { 'b': 1 })).toBe(false);
    });

    it('属性不匹配', () => {
        expect(_.isMatch(object, { 'c': 2 })).toBe(false);
    });
});

it('isMatchWith', () => {
    function isGreeting(value) {
        return /^h(?:i|ello)$/.test(value);
    }

    function customizer(objValue, srcValue) {
        if (isGreeting(objValue) && isGreeting(srcValue)) {
            return true;
        }
    }

    const object = {'greeting': 'hello'};
    const source = {'greeting': 'hi'};

    expect(_.isMatchWith(object, source, customizer)).toBe(true);    
});

describe('isObjectLike', () => {
    it('空对象也是ISObjectLike', () => {
        expect(_.isObjectLike({})).toBe(true);
    });
    it('数组是isObjectLike', () => {
        expect(_.isObjectLike([1, 2, 3])).toBe(true);
    });
    it('函数不是ObjectLike', () => {
        expect(_.isObjectLike(_.noop)).toBe(false);
        expect(_.isObjectLike(Boolean)).toBe(false);
    });
    it('null 不是ObjectLike', () => {
        expect(_.isObjectLike(null)).toBe(false);
    });
});

describe('isPlainObject', function () {
    it('{...}是PlainObject', function () {
        expect(_.isPlainObject({ 'x': 0, 'y': 0 })).toBe(true);
        expect(_.isPlainObject({ })).toBe(true);
    });

    it('使用构造函数构建的不是PlainObject', function () {
        function Foo() {
            this.a = 1;
        }

        expect(_.isPlainObject(new Foo)).toBe(false);
        expect(_.isPlainObject(new Boolean)).toBe(false);
    });

    it('数组不是PlainObject', function () {
        expect(_.isPlainObject([1, 2, 3])).toBe(false);
    });

    it('使用Object.create(null)创建是plain object', function () {
        expect(_.isPlainObject(Object.create(null))).toBe(true);
    });
});

it('conformsTo', function () {
    const object = {'a': 1, 'b': 2};
    expect(_.conformsTo(object, { 'b': function(n) { return n > 1; } })).toBe(true);
    expect(_.conformsTo(object, { 'b': function(n) { return n > 2; } })).toBe(false);    
});
