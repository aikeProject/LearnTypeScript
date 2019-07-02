/**
 * @Description: 使用类型保护让TS更聪明
 * @author 成雨
 * @date 2019/7/2 0002
 */

// const valueList = [123, "abc"];
// const getRandomValue = () => {
//     const number = Math.random() * 10; // 这里取一个[0, 10)范围内的随机值
//     if (number < 5) return valueList[0]; // 如果随机数小于5则返回valueList里的第一个值，也就是123
//     else return valueList[1]; // 否则返回"abc"
// };
// const item = getRandomValue();
// if (item.length) {
//     // error 类型“number”上不存在属性“length”
//     console.log(item.length); // error 类型“number”上不存在属性“length”
// } else {
//     console.log(item.toFixed()); // error 类型“string”上不存在属性“toFixed”
// }

// if ((<string>item).length) {
//     // error 类型“number”上不存在属性“length”
//     console.log((<string>item).length); // error 类型“number”上不存在属性“length”
// } else {
//     console.log((<number>item).toFixed()); // error 类型“string”上不存在属性“toFixed”
// }


// 自定了类型保护
// const valueList = [123, "abc"];
// const getRandomValue = () => {
//     const number = Math.random() * 10; // 这里取一个[0, 10)范围内的随机值
//     if (number < 5) return valueList[0]; // 如果随机数小于5则返回valueList里的第一个值，也就是123
//     else return valueList[1]; // 否则返回"abc"
// };
//
// function isString(value: number | string): value is string {
//     const number = Math.random() * 10
//     return number < 5;
// }
//
// const item = getRandomValue();
// if (isString(item)) {
//     console.log(item.length); // 此时item是string类型
// } else {
//     console.log(item.toFixed()); // 此时item是number类型
// }

// typeof 类型保护
// if (typeof item === "string") {
//     console.log(item.length);
// } else {
//     console.log(item.toFixed());
// }


// instanceof 类型保护
class CreateByClass1 {
    public age = 18;

    constructor() {
    }
}

class CreateByClass2 {
    public name = "lison";

    constructor() {
    }
}

function getRandomItem() {
    return Math.random() < 0.5 ? new CreateByClass1() : new CreateByClass2(); // 如果随机数小于0.5就返回CreateByClass1的实例，否则返回CreateByClass2的实例
}

const item = getRandomItem();
if (item instanceof CreateByClass1) { // 这里判断item是否是CreateByClass1的实例
    console.log(item.age);
} else {
    console.log(item.name);
}
