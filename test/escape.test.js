const _ = require('lodash');

const html = '<span class="success">friend & girl</span>';
const escapeHtml = '&lt;span class=&quot;success&quot;&gt;friend &amp; girl&lt;/span&gt;';

test("HTML转义", () => {
    expect(_.escape(html)).toBe(escapeHtml);
});

test("HTML反转义", () => {
    expect(_.unescape(escapeHtml)).toBe(html);
});