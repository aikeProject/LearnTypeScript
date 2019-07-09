/**
 * @Description: unknown类型详解
 * @author 成雨
 * @date 2019-07-09
 */

// ------ 1 任何类型值都可以赋值给 unknown 类型 ------
let value1: unknown;
value1 = 'a';
value1 = 123;

// ------ 2 如果没有类型断言或基于控制流的类型细化时，此时它只能赋值给 unknown 和 any ------
let value2: unknown;
let value3: string = value2; // Error:(14, 5) TS2322: Type 'unknown' is not assignable to type 'string'.
value1 = value2;

// ------ 3 如果没有类型断言或基于控制流的类型细化时, 则不能在它上面进行任何操作 ------
let value4: unknown;
value4 += 1; // Error:(19, 1) TS2365: Operator '+=' cannot be applied to types 'unknown' and '1'.

// ------ 4 unknown 与任何类型组成的交叉类型，最后都等于其它类型 ------
type type1 = unknown & string; // type1 = string
type type2 = number & unknown; // type2 = number
type type3 = unknown & unknown; // unknown
type type4 = unknown & string[]; // string[]

// ------ 5 unknown 与任何其它类型组成的联合类型，都等于 unknown 类型，只有any例外 与any组合是 any 类型 ------
type type5 = string | unknown; // type5 = unknown
type type6 = any | unknown; // type6 = any
type type7 = unknown | number[]; // type7 = unknown

// ------ 6 never 类型是 unknown 的子类型 ------
type type8 = never extends unknown ? true : false; // type8 true

// ------ 7 keyof unknown 等于类型 never ------
type type9 = keyof unknown; // type9 => never

// ------ 8 只能对  unknown 进行等或不等操作，不能进行其它操作 ------
value1 === value2;
value1 !== value2;
value1 += value2; // Error:(42, 1) TS2365: Operator '+=' cannot be applied to types 'unknown' and 'unknown'.

// ------ 9 unknown 类型不能访问其属性、作为函数调用和作为类创建实例 ------
let value5: unknown;
value5.age; // Error:(46, 8) TS2339: Property 'age' does not exist on type 'unknown'.
value5(); // Error:(47, 1) TS2349: Cannot invoke an expression whose type lacks a call signature. Type '{}' has no compatible call signatures.
new value5(); // Error:(48, 1) TS2351: Cannot use 'new' with an expression whose type lacks a call or construct signature.

// ------ 10 使用映射类型时如果遍历的是 unknown 类型 则不会映射任何属性 ------
type Types<T> = {
    [P in keyof T]: number;
};
type type10 = Types<any>; // type10 => { [s: string]: number }
type type11 = Types<unknown>; // type11 => {}

