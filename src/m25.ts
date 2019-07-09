/**
 * @Description: 装饰器
 * @author 成雨
 * @date 2019-07-09
 */

// ------ 类装饰器 ------

// let sign = null;
//
// function setName(name: string) {
//     return function (target: Function) {
//         sign = target;
//         console.log(target.name);
//     };
// }
//
// @setName("lison") // Info
// class Info {
//     constructor() {
//     }
// }
//
// console.log(sign === Info); // true
// console.log(sign === Info.prototype.constructor); // true

// 修改原型对象和构造函数
function addName(constructor: { new(): any }) {
    constructor.prototype.name = "lison";
}

@addName
class A {
}

// 声明合并
interface A {
    name: string
}

const a = new A();
console.log(a.name); // error 类型“A”上不存在属性“name”


// 类装饰器返回一个值，会使这个返回值替换被装饰的类的声明，所以可以使用该特性修改类的实现
function classDecorator<T extends { new(...args: any[]): {} }>(target: T) {
    return class extends target {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;

    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));
/*
{
    hello: "override"
    newProperty: "new property"
    property: "property"
}
*/


// ------ 方法装饰器 ------

// 属性描述符
// var obj = {};
// Object.defineProperty(obj, "name", {
//     value: "lison",
//     writable: false, // 是否可写
//     configurable: true, // 是否可配置
//     enumerable: true // 是否可枚举
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//     console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//     enumerable: false
// });
// for (let key in obj) {
//     console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//     writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//     configurable: false
// });
// Object.defineProperty(obj, "name", {
//     writable: false
// });
// error Cannot redefine property: name


// function enumerable(bool: boolean) {
//     return function(
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         console.log(target); // { getAge: f, constructor: f }
//         descriptor.enumerable = bool;
//     };
// }
// class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//         return this.age;
//     }
// }
// const info = new Info(18);
// console.log(info);
// // { age: 18 }
// for (let propertyName in info) {
//     console.log(propertyName);
// }
// "age"


// ------ 访问器装饰器 ------
// function enumerable(bool: boolean) {
//     return function (
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         descriptor.enumerable = bool;
//     };
// }
//
// class Info {
//     private _name: string;
//
//     constructor(name: string) {
//         this._name = name;
//     }
//
//     @enumerable(false)
//     get name() {
//         return this._name;
//     }
//
//     set name(name) {
//         this._name = name;
//     }
// }


// ------ 属性装饰器 ------
// function printPropertyName(target: any, propertyName: string) {
//     console.log(propertyName);
// }
//
// class Info {
//     @printPropertyName
//     name: string;
//     @printPropertyName
//     age: number;
// }

// ------ 参数装饰器 ------
function required(target: any, propertName: string, index: number) {
    console.log(`修饰的是${propertName}的第${index + 1}个参数`);
}

class Info {
    name: string = "lison";
    age: number = 18;

    getInfo(prefix: string, @required infoType: string): any {
        return prefix + " " + this[infoType];
    }
}

interface Info {
    [key: string]: string | number | Function;
}

const info = new Info();
info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数
