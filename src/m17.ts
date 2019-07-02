/**
 * @Description: 使用显示复制断言给TS一个你一定会赋值的承诺
 * @author 成雨
 * @date 2019/7/2 0002
 */

// 严格模式下null和undefined复制给其他类型

// let str = 'lison'
// str = null
//
// let strNull: string | null = 'lison'
// strNull = null
// strNull = undefined


// const sum = (x: number, y?: number) => {
//     return x + (y || 0);
// };
// sum(1, 2); // 3
// sum(1); // 1
// sum(1, undefined); // 1
// sum(1, null); // error Argument of type 'null' is not assignable to parameter of type 'number | undefined'
//
// interface PositionInterface {
//     x: number;
//     b?: number;
// }
//
// const position: PositionInterface = {
//     x: 12
// };
// position.b = "abc"; // error
// position.b = undefined; // right
// position.b = null; // error


// 显示赋值断言
function getSplicedStr1(num: number | null): string {
    function getRes(prefix: string) { // 这里在函数getSplicedStr里定义一个函数getRes，我们最后调用getSplicedStr返回的值实际是getRes运行后的返回值
        return prefix + num.toFixed().toString(); // 这里使用参数num，num的类型为number或null，在运行前编译器是无法知道在运行时num参数的实际类型的，所以这里会报错，因为num参数可能为null
    }

    num = num || 0.1; // 但是这里进行了赋值，如果num为null则会将0.1赋给num，所以实际调用getRes的时候，getRes里的num拿到的始终不为null
    return getRes("lison");
}

function getSplicedStr2(num: number | null): string {
    function getLength(prefix: string) {
        return prefix + num!.toFixed().toString();
    }

    num = num || 0.1;
    return getLength("lison");
}
