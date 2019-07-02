"use strict";
/**
 * @Description: 获取索引类型和索引值类型
 * @author 成雨
 * @date 2019/7/2 0002
 */
// keyof 操作符 会返回一个由这个类型所有属性名组成的联合类型
var infoProp;
infoProp = "name";
infoProp = "age";
infoProp = "no"; // error 不能将类型“"no"”分配给类型“"name" | "age"”
// 通过和泛型结合使用 ts就可以检查动态属性名
function getValue(obj, names) {
    return names.map(function (n) { return obj[n]; }); // 指定getValue的返回值类型为T[K][]，即类型为T的值的属性值组成的数组
}
var info = {
    name: "lison",
    age: 18
};
var values = getValue(info, ["name"]);
values = getValue(info, ["age"]); // error 不能将类型“number[]”分配给类型“string[]”
var obj = {
    age: 18
};
var value; // value的类型是number，也就是name的属性值18的类型
// test的类型是string | number | object
