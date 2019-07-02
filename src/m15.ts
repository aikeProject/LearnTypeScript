let x = (a: number) => 0;
let y = (b: number, c: string) => 0;

// y = x
// x = y

// 函数重载
function merge(arg1: number, arg2: number): number; // 这是merge函数重载的一部分
function merge(arg1: string, arg2: string): string; // 这也是merge函数重载的一部分
function merge(arg1: any, arg2: any) { // 这是merge函数实体
    return arg1 + arg2;
}

function sum(arg1: number, arg2: number): number; // 这是sum函数重载的一部分
function sum(arg1: any, arg2: any): any { // 这是sum函数实体
    return arg1 + arg2;
}

let func = merge;
// func = sum; // error 不能将类型“(arg1: number, arg2: number) => number”分配给类型“{ (arg1: number, arg2: number): number; (arg1: string, arg2: string): string; }”


// 枚举

// enum Status {
//     On,
//     Off
// }

// 数字枚举 和 数值类型相互兼容
// let s = Status.On;
// s = 1;
// s = 3;

// enum Status {
//     On,
//     Off
// }
//
// enum Color {
//     White,
//     Black
// }

// 不同枚举之间不兼容
// let s = Status.On;
// s = Color.White; // error Type 'Color.White' is not assignable to type 'Status'

// 字符串枚举和字符串是不兼容的
// enum Status {
//     On = 'on',
//     Off = 'off'
// }
// let s = Status.On
// s = 'Lison' // error 不能将类型“"Lison"”分配给类型“Status”


// interface Data<T> {}
// let data1: Data<number>;
// let data2: Data<string>;

// 不兼容
// data1 = data2;

