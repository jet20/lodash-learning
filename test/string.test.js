const _ = require("lodash");

it('words', function () {
    expect(_.words('fred, barney, & pebbles'))
        .toEqual(['fred', 'barney', 'pebbles']);

    expect(_.words('fred, barney, & pebbles', /[^, ]+/g))
        .toEqual(['fred', 'barney', '&', 'pebbles']);

    expect(_.words('我爱中国'))
        .toEqual(['我爱中国']);
});

it('split', function () {
    expect(_.split('a-b-c', '-', 2)).toEqual(['a', 'b']);
});

it('parseInt', function () {
    expect(_.parseInt('08')).toBe(8);    
});

it('replace', function () {
    expect(_.replace('Hi Fred', 'Fred', 'Barney')).toBe('Hi Barney');    
});

describe('template', function () {
    it('interpolate', function () {
        // 使用 "interpolate" 分隔符创建编译模板
        const compiled = _.template('hello <%= user %>!');
        expect(compiled({ 'user': 'fred' })).toBe('hello fred!');
    });

    it('使用 HTML "escape" 转义数据的值', function () {
        const compiled = _.template('<b><%- value %></b>');
        expect(compiled({ 'value': '<script>' })).toBe('<b>&lt;script&gt;</b>');
    });

    it('使用 "evaluate" 分隔符执行 JavaScript 和 生成HTML代码', function () {
        var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
        expect(compiled({ 'users': ['fred', 'barney'] })).toBe('<li>fred</li><li>barney</li>');
    });

    it('在 "evaluate" 分隔符中使用内部的 `print` 函数', function () {
        var compiled = _.template('<% print("hello " + user); %>!');
        expect(compiled({ 'user': 'barney' })).toBe('hello barney!');
    });

    it('使用 ES 分隔符代替默认的 "interpolate" 分隔符', function () {
        var compiled = _.template('hello ${ user }!');
        expect(compiled({ 'user': 'pebbles' })).toBe('hello pebbles!');
    });

    it('使用自定义的模板分隔符', function () {
        _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        var compiled = _.template('hello {{ user }}!');
        expect(compiled({ 'user': 'mustache' })).toBe('hello mustache!');
    });


});
