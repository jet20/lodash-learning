const _ = require('lodash');

const html = '<span class="success">friend & girl</span>';
const escapeHtml = '&lt;span class=&quot;success&quot;&gt;friend &amp; girl&lt;/span&gt;';

test("pad", () => {
    expect(_.pad("1234", 10, "*")).toBe("***1234***");
    expect(_.pad("1234", 10)).toBe("   1234   ");
    expect(_.pad("1234", -10)).toBe("1234");
    expect(_.pad("12345", -10)).toBe("12345");
    expect(_.pad("1234")).toBe("1234");
    expect(_.pad("12345")).toBe("12345");
    expect(_.pad("12345", 10, "*")).toBe("**12345***");
});

test("padStart", () => {
    expect(_.padStart("1234", 10, "*")).toBe("******1234");
    expect(_.padStart("1234", 10)).toBe("      1234");
    expect(_.padStart("1234", 3, "*")).toBe("1234");
});

test("padEnd", () => {
    expect(_.padEnd("1234", 10, "*")).toBe("1234******");
    expect(_.padEnd("1234", 10)).toBe("1234      ");
    expect(_.padEnd("1234", 3, "*")).toBe("1234");
});

test("repeat", () => {
    expect(_.repeat("12", 3)).toBe("121212");
    expect(_.repeat("12", 0)).toBe("");
});
