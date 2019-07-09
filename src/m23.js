/**
 * @Description: unknown类型详解
 * @author 成雨
 * @date 2019-07-09
 */
// ------ 1 任何类型值都可以赋值给 unknown 类型 ------
var value1;
value1 = 'a';
value1 = 123;
// ------ 2 如果没有类型断言或基于控制流的类型细化时，此时它只能赋值给 unknown 和 any ------
var value2;
var value3 = value2; // Error:(14, 5) TS2322: Type 'unknown' is not assignable to type 'string'.
value1 = value2;
// ------ 3 如果没有类型断言或基于控制流的类型细化时, 则不能在它上面进行任何操作 ------
var value4;
value4 += 1; // Error:(19, 1) TS2365: Operator '+=' cannot be applied to types 'unknown' and '1'.
// ------ 8 只能对  unknown 进行等或不等操作，不能进行其它操作 ------
value1 === value2;
value1 !== value2;
value1 += value2; // Error:(42, 1) TS2365: Operator '+=' cannot be applied to types 'unknown' and 'unknown'.
// ------ 9 unknown 类型不能访问其属性、作为函数调用和作为类创建实例 ------
var value5;
value5.age; // Error:(46, 8) TS2339: Property 'age' does not exist on type 'unknown'.
value5(); // Error:(47, 1) TS2349: Cannot invoke an expression whose type lacks a call signature. Type '{}' has no compatible call signatures.
new value5(); // Error:(48, 1) TS2351: Cannot use 'new' with an expression whose type lacks a call or construct signature.
