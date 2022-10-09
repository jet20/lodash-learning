const _ = require('lodash');


test("全部转为大写(toUpper)", () => {
    expect(_.toUpper("upperCase")).toBe("UPPERCASE");
    expect(_.toUpper("upper-Case")).toBe("UPPER-CASE");
});

test("转为小写(toLower)", () => {
    expect(_.toLower("lower-case")).toBe("lower-case");
    expect(_.toLower("lowerCase")).toBe("lowercase");
});


test("首字符大写,其他字母小写(capitalize)", () => {
    expect(_.capitalize("friend")).toBe("Friend");
    expect(_.capitalize("friend")).toBe("Friend");
    expect(_.capitalize("friend. girl")).toBe("Friend. girl");
    expect(_.capitalize("girlFriend")).toBe("Girlfriend");
    expect(_.capitalize("girl Friend")).toBe("Girl friend");
});

test("首字符小写", () => {
    expect(_.lowerFirst("friend")).toBe("friend");
    expect(_.lowerFirst("Girl Friend")).toBe("girl Friend");
    expect(_.lowerFirst("Girl-Friend")).toBe("girl-Friend");
    expect(_.lowerFirst("GirlFriend")).toBe("girlFriend");
    expect(_.lowerFirst("FRIEND")).toBe("fRIEND");
});

test("首字符大写", () => {
    expect(_.upperFirst("friend")).toBe("Friend");
    expect(_.upperFirst("girl friend")).toBe("Girl friend");
    expect(_.upperFirst("girl Friend")).toBe("Girl Friend");
    expect(_.upperFirst("girl-Friend")).toBe("Girl-Friend");
});


test("空格分隔单词的小写(lower case)", () => {
    expect(_.lowerCase("lower-case")).toBe("lower case");
    expect(_.lowerCase("lowerCase")).toBe("lower case");
    expect(_.lowerCase("LOWER-CASE")).toBe("lower case");
    expect(_.lowerCase("-LOWER-CASE")).toBe("lower case");
    expect(_.lowerCase("--LOWER-CASE")).toBe("lower case");
    expect(_.lowerCase("_LOWER-CASE")).toBe("lower case");
    expect(_.lowerCase("__LOWER-CASE")).toBe("lower case");
    expect(_.lowerCase("$LOWER-CASE")).toBe("lower case");
    expect(_.lowerCase("$$LOWER-CASE")).toBe("lower case");
});

test("空格分隔单词的大写(UPPER CASE)", () => {
    expect(_.upperCase("upperCase")).toBe("UPPER CASE");
    expect(_.upperCase("upper-Case")).toBe("UPPER CASE");
    expect(_.upperCase("upper_Case")).toBe("UPPER CASE");
    expect(_.upperCase("upper__Case")).toBe("UPPER CASE");
    expect(_.upperCase("__upper_case")).toBe("UPPER CASE");
});


test("每单词首字母大写，单词之间用空格(Start Case)", () => {
    expect(_.startCase("start Case")).toBe("Start Case");
    expect(_.startCase("start-Case")).toBe("Start Case");
    expect(_.startCase("start_Case")).toBe("Start Case");
    expect(_.startCase("__start_Case")).toBe("Start Case");
});


test("所有字母小写，用下划线分隔单词(snake_case)", () => {
    expect(_.snakeCase("snakeCase")).toBe("snake_case");
    expect(_.snakeCase("snake-Case")).toBe("snake_case");
    expect(_.snakeCase("snake-case")).toBe("snake_case");
    expect(_.snakeCase("SNAKE-CASE")).toBe("snake_case");
    expect(_.snakeCase("_SNAKE-CASE")).toBe("snake_case");
    expect(_.snakeCase("$SNAKE-CASE")).toBe("snake_case");
    expect(_.snakeCase("__SNAKE-CASE")).toBe("snake_case");

});

test("所有字母小写，用减号分隔单词(kebab-case)", () => {
    expect(_.kebabCase("kebabCase")).toBe("kebab-case");
    expect(_.kebabCase("KebabCase")).toBe("kebab-case");
    expect(_.kebabCase("Kebab-Case")).toBe("kebab-case");
    expect(_.kebabCase("kebab-case")).toBe("kebab-case");
    expect(_.kebabCase("KEBAB-CASE")).toBe("kebab-case");
    expect(_.kebabCase("_KEBAB-CASE")).toBe("kebab-case");
    expect(_.kebabCase("__KEBAB-CASE")).toBe("kebab-case");
    expect(_.kebabCase("$KEBAB-CASE")).toBe("kebab-case");
    expect(_.kebabCase("$_KEBAB-CASE")).toBe("kebab-case");
});


describe("驼峰(camelCase)", () => {
    test("PascalCase to camelCase", () => {
        expect(_.camelCase("CamelCase")).toBe("camelCase");
    });

    test("kebab-case to camelCase", () => {
        expect(_.camelCase("Camel-Case")).toBe("camelCase");
        expect(_.camelCase("camel-Case")).toBe("camelCase");
        expect(_.camelCase("camel-case")).toBe("camelCase");
    });

    test("UPPER_CASE to camelCase", () => {
        expect(_.camelCase("CAMEL-CASE")).toBe("camelCase");
        expect(_.camelCase("CAMEL_CASE")).toBe("camelCase");
    });

    test("_UPPER_CASE to camelCase", () => {
        expect(_.camelCase("_CAMEL-CASE")).toBe("camelCase");
        expect(_.camelCase("__CAMEL_CASE")).toBe("camelCase");
    });

    test("lower_case to camelCase", () => {
        expect(_.camelCase("camel-case")).toBe("camelCase");
        expect(_.camelCase("camel_case")).toBe("camelCase");
    });

    test("_lower_case to camelCase", () => {
        expect(_.camelCase("_camel-case")).toBe("camelCase");
        expect(_.camelCase("__camel_case")).toBe("camelCase");
    });

    test("$ to camelCase", () => {
        expect(_.camelCase("_$camel_case")).toBe("camelCase");
        expect(_.camelCase("$")).toBe("");
    });
});

test("取毛刺(deburr)", () => {
    expect(_.deburr("déjà vu")).toBe("deja vu");
})




