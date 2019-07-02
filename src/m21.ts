/**
 * @Description: 获取索引类型和索引值类型
 * @author 成雨
 * @date 2019/7/2 0002
 */

// ------------ 1 索引类型查询操作符 ------------

interface Info {
    name: string;
    age: number;
}

// keyof 操作符 会返回一个由这个类型所有属性名组成的联合类型
let infoProp: keyof Info;
infoProp = "name";
infoProp = "age";
infoProp = "no"; // error 不能将类型“"no"”分配给类型“"name" | "age"”

// 通过和泛型结合使用 ts就可以检查动态属性名
function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] { // 这里使用泛型，并且约束泛型变量K的类型是"keyof T"，也就是类型T的所有字段名组成的联合类型
    return names.map(n => obj[n]); // 指定getValue的返回值类型为T[K][]，即类型为T的值的属性值组成的数组
}

const info = {
    name: "lison",
    age: 18
};
let values: string[] = getValue(info, ["name"]);
values = getValue(info, ["age"]); // error 不能将类型“number[]”分配给类型“string[]”


// ----------- 索引访问操作符 --------------

// interface Info {
//     name: string;
//     age: number;
// }
//
// type NameType = Info["name"];
// let name: NameType = 123; // error 不能将类型“123”分配给类型“string”
//
// function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//     return o[name]; // o[name] is of type T[K]
// }
//
//
// interface Obj<T> {
//     [key: string]: T;
// }
//
// let key: keyof Obj<number>; // keys的类型为number | string
// key = 123; // right

interface Obj<T> {
    [key: string]: T;
}

const obj: Obj<number> = {
    age: 18
};
let value: Obj<number>["age"]; // value的类型是number，也就是name的属性值18的类型


interface Type {
    a: never;
    b: never;
    c: string;
    d: number;
    e: undefined;
    f: null;
    g: object;
}

type test = Type[keyof Type];
// test的类型是string | number | object
