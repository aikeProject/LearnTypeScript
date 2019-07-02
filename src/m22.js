"use strict";
/**
 * @Description: 使用映射类型得到新的类型
 * @author 成雨
 * @date 2019/7/2 0002
 */
// interface Info {
//     age: number;
// }
//
// type ReadonlyType<T> = { readonly [P in keyof T]: T[P] }; // 这里定义了一个ReadonlyType<T>映射类型
// type ReadonlyInfo = ReadonlyType<Info>;
// let info: ReadonlyInfo = {
//     age: 18
// };
// info.age = 28; // error Cannot assign to 'age' because it is a constant or a read-only property
// interface Info {
//     age: number;
// }
//
// type ReadonlyType<T> = { readonly [P in keyof T]?: T[P] };
// type ReadonlyInfo = ReadonlyType<Info>;
// let info: ReadonlyInfo = {};
// interface Info {
//     name: string
//     age: number
//     address: string
// }
//
// const info2: Info = {
//     name: "lison",
//     age: 18,
//     address: "beijing"
// };
// function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> { // 这里我们定义一个pick函数，用来返回一个对象中指定字段的值组成的对象
//     let res = {} as Pick<T, K>;
//     keys.forEach(key => {
//         res[key] = obj[key];
//     });
//     return res;
// }
//
// const nameAndAddress = pick(info, ["name", "address"]); // { name: 'lison', address: 'beijing' }
// ---------  由映射类型进行推断 -----------
// type Proxy<T> = { // 这里定义一个映射类型，他将一个属性拆分成get/set方法
//     get(): T;
//     set(value: T): void;
// };
// type Proxify<T> = { [P in keyof T]: Proxy<T[P]> }; // 这里再定义一个映射类型，将一个对象的所有属性值类型都变为Proxy<T>处理之后的类型
// function proxify<T>(obj: T): Proxify<T> { // 这里定义一个proxify函数，用来将对象中所有属性的属性值改为一个包含get和set方法的对象
//     let result = {} as Proxify<T>;
//     for (const key in obj) {
//         result[key] = {
//             get: () => obj[key],
//             set: value => (obj[key] = value)
//         };
//     }
//     return result;
// }
//
// let props = {
//     name: "lison",
//     age: 18
// };
// let proxyProps = proxify(props);
// console.log(proxyProps.name.get()); // "lison"
// proxyProps.name.set("li");
//
// function unproxify<T>(t: Proxify<T>): T { // 这里我们定义一个拆包函数，其实就是利用每个属性的get方法获取到当前属性值，然后将原本是包含get和set方法的对象改为这个属性值
//     let result = {} as T;
//     for (const k in t) {
//         result[k] = t[k].get(); // 这里通过调用属性值这个对象的get方法获取到属性值，然后赋给这个属性，替换掉这个对象
//     }
//     return result;
// }
//
// let originalProps = unproxify(proxyProps);
// --------------- 增加或移除特定修饰符 ---------------
// interface Info {
//     name: string;
//     age: number;
// }
//
// type ReadonlyInfo<T> = { +readonly [P in keyof T]+?: T[P] };
// let info: ReadonlyInfo<Info> = {
//     name: "lison"
// };
// info.name = ""; // error
//
// interface Info {
//     name: string;
//     age: number;
// }
//
// type RemoveModifier<T> = { -readonly [P in keyof T]-?: T[p] };
// type InfoType = RemoveModifier<Readonly<Partial<Info>>>;
// let info1: InfoType = {
//     // error missing "age"
//     name: "lison"
// };
// let info2: InfoType = {
//     name: "lison",
//     age: 18
// };
// info2.name = ""; // right, can edit
// ----------------- keyof和映射类型 -------------------
// TS2.9  keyof和映射类型支持用number和symbol命名属性
var stringIndex = "a";
var numberIndex = 1;
var symbolIndex = Symbol();
var key = 2; // error
// let key: keys = 1; // right
// let key: keys = "b"; // error
// let key: keys = "a"; // right
// let key: keys = Symbol(); // error
// let key: keys = symbolIndex; // right
// const stringIndex = "a";
// const numberIndex = 1;
// const symbolIndex = Symbol();
// type Obj = {
//     [stringIndex]: string;
//     [numberIndex]: number;
//     [symbolIndex]: symbol;
// };
// type ReadonlyType<T> = { readonly [P in keyof T]?: T[P] };
// let obj: ReadonlyType<Obj> = {
//     a: "aa",
//     1: 11,
//     [symbolIndex]: Symbol()
// };
// obj.a = "bb"; // error Cannot assign to 'a' because it is a read-only property
// obj[1] = 22; // error Cannot assign to '1' because it is a read-only property
// obj[symbolIndex] = Symbol(); // error Cannot assign to '[symbolIndex]' because it is a read-only property
