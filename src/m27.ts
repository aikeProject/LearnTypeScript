/**
 * @author 成雨
 * @date 2019-07-11
 * @Description: 使用命名空间封装代码
 */

// ------ 定义和使用 ------
namespace Validation {
    const isLetterReg = /^[A-Za-z]+$/; // 这里定义一个正则
    export const isNumberReg = /^[0-9]+$/; // 这里再定义一个正则，与isLetterReg的区别在于他使用export导出了
    export const checkLetter = (text: any) => {
        return isLetterReg.test(text);
    };
}

// 命名空间如果不是使用webpack等工具编译 而是使用tsc编译 那只需要在使用
// 外部命名空间的地方使用 /// <reference path="namespace.ts"/> 来引入

// ------ 拆分为多个文件 ------
// LetterValidation.ts
// namespace Validation {
//     export const isLetterReg = /^[A-Za-z]+$/;
//     export const checkLetter = (text: any) => {
//         return isLetterReg.test(text);
//     };
// }
// // NumberValidation.ts
// namespace Validation {
//     export const isNumberReg = /^[0-9]+$/;
//     export const checkNumber = (text: any) => {
//         return isNumberReg.test(text);
//     };
// }
// // index.ts
// /// <reference path="./LetterValidation.ts"/>
// /// <reference path="./NumberValidation.ts"/>
// let isLetter = Validation.checkLetter("sdfsd");
// const reg = Validation.isNumberReg;
// console.log(isLetter); // true


// ------ 别名 ------
// namespace Shapes {
//     export namespace Polygons {
//         export class Triangle {}
//         export class Squaire {}
//     }
// }
// import polygons = Shapes.Polygons; // 使用 import 关键字给 Shapes.Polygons 取一个别名polygons
// let sq = new polygons.Square();