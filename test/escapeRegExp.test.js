const _ = require('lodash');

test("正则表达式转义", () => {
    const reg = '[lodash](https://lodash.com/)';
    const escape = String.raw`\[lodash\]\(https://lodash\.com/\)`;
    expect(_.escapeRegExp(reg)).toBe(escape);
});