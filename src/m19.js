"use strict";
/**
 * @Description: 使用可辨识联合并保证每个case都被处理
 * @author 成雨
 * @date 2019/7/2 0002
 */
// type Shape = Square | Rectangle | Circle | Triangle; // 这里我们在联合类型中新增了一个接口，但是下面的case却没有处理Triangle的情况
// function getArea(s: Shape) {
//     switch (s.kind) {
//         case "square":
//             return s.size * s.size;
//         case "rectangle":
//             return s.height * s.width;
//         case "circle":
//             return Math.PI * s.radius ** 2;
//     }
// }
// -------------- 使用never类型 ------------
function assertNever(value) {
    throw new Error("Unexpected object: " + value);
}
function getArea(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
        default:
            return assertNever(s); // error 类型“Triangle”的参数不能赋给类型“never”的参数
    }
}
