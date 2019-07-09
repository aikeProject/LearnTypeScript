/**
 * @Description: 条件类型
 * @author 成雨
 * @date 2019-07-09
 */

// ------ 1 基础使用 ------
// type Type<T> = T extends string ? string : number;
// let index: Type<'a'>; // index => string
// let index1: Type<false>; // index2 => number

// ------ 2 分布式条件类型 ------
// 当待检测类型是联合类型时，则该条件类型被称为'分布式联合类型'，在实例化时自动分发成联合类型
type TypeName<T> = T extends any ? T : never;
type Type1 = TypeName<string | number>; // type1 => string | number

// type TypeName<T> = T extends string
//     ? string
//     : T extends number
//         ? number
//         : T extends boolean
//             ? boolean
//             : T extends undefined
//                 ? undefined
//                 : T extends Function
//                     ? Function
//                     : object;
// type Type1 = TypeName<() => void>; // Type1的类型是Function
// type Type2 = TypeName<string[]>; // Type2的类型是object
// type Type3 = TypeName<(() => void) | string[]>; // Type3的类型是object | Function


// 实际应用的例子
// type Diff<T, U> = T extends U ? never : T;
// type Test = Diff<string | number | boolean, undefined | number>; // Test的类型为 string | boolean

// type Type<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
// interface Part {
//     id: number;
//     name: string;
//     subparts: Part[];
//     updatePart(newName: string): void;
// }
// type Test = Type<Part>; // Test的类型为"updatePart"


// ------ 3 条件类型的类型推断 infer ------

// 不使用 infer
// type Type<T> = T extends any[] ? T[number] : T;
// type test = Type<string[]>; // test的类型为string
// type test2 = Type<string>; // test2的类型为string

// 使用 infer
// type Type<T> = T extends Array<infer U> ? U : T;
// type test = Type<string[]>; // test的类型为string
// type test2 = Type<string>; // test2的类型为string

// 这里 infer 能够推断出 U 的类型，并且供后面使用，你可以理解为这里定义了一个变量 U 来接收数组元素的类型。


// ------ 4 TS预定义条件类型 ------
// 从 T 中去掉可以赋值给U的类型
// type Type = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // Type => 'c'
// type Type2 = Exclude<string | number | boolean, string | number>; // Type2 => boolean

// 选取T中可以赋值给U的类型
// type Type = Extract<"a" | "b" | "c", "a" | "c" | "f">; // Type => 'a' | 'c'
// type Type2 = Extract<number | string | boolean, string | boolean>; // Type2 => string | boolean

// 从 T 中去掉 null 和 undefined
// type Type = Extract<string | number | undefined | null, undefined | null>

// 获取函数类型返回值类型
// type Type = ReturnType<() => string> // Type => string
// type Type2 = ReturnType<(arg: number) => void> // Type2 => void

