"use strict";
/**
 * @Description: 类型别名和字面量类型 -- 单调类型
 * @author 成雨
 * @date 2019/7/2 0002
 */
var str;
var position1 = {
    x: 1,
    y: -1
};
var position2 = {
    x: "right",
    y: "top"
};
var ccc = {
    current: "first",
    child: {
        // error
        current: "second",
        child: {
            current: "third",
        }
    }
};
// const name1: Name = "test"; // error 不能将类型“"test"”分配给类型“"Lison"”
var name2 = "Lison";
function getDirectionFirstLetter(direction) {
    return direction.substr(0, 1);
}
// getDirectionFirstLetter("test"); // error 类型“"test"”的参数不能赋给类型“Direction”的参数
getDirectionFirstLetter("east");
var info = {
    name: "Lison",
    age: 28 // error 不能将类型“28”分配给类型“18”
};
function getValue(index) {
    if (index !== 0 || index !== 1) {
        // error This condition will always return 'true' since the types '0' and '1' have no overlap
        // ...
    }
}
