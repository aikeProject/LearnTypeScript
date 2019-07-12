/**
 * @author 成雨
 * @date 2019-07-12
 * @Description: 声明合并
 */

interface Info {
    name: string
}

interface Info {
    age: number
}

let info: Info
info = { // error 类型“{ name: string; }”中缺少属性“age”
    name: 'lison'
}
info = { // right
    name: 'lison',
    age: 18
}

// ------ 合并接口 -------
// 多个同名接口，定义的非函数的成员命名应该是不重复的，如果重复了，类型应该是相同的，否则将会报错
interface Info {
    name: string
}

interface Info {
    age: number
}

interface Info {
    age: boolean // error 后续属性声明必须属于同一类型。属性“age”的类型必须为“number”，但此处却为类型“boolean”
}

// 对于函数成员，每个同名函数成员都会被当成这个函数的重载，且合并时后面的接口具有更高的优先级。
interface Res {
    getRes(input: string): number
}

interface Res {
    getRes(input: number): string
}

const res: Res = {
    getRes: (input: any): any => {
        if (typeof input === 'string') return input.length
        else return String(input)
    }
}
res.getRes('123').length // error 类型“number”上不存在属性“length”

// ------ 合并命名空间 ------
namespace Validation {
    export const checkNumber = () => {
    }
}
namespace Validation {
    export const checkString = () => {
    }
}
// => 相当于
namespace Validation {
    export const checkNumber = () => {
    }
    export const checkString = () => {
    }
}

// ------ 不同类型合并 ------

// 命名空间和类
// 类的定义必须在命名空间的前面，最后合并之后的效果，一个包含一些以命名空间导出内容为静态属性的类
class Validation {
    checkType() {
    }
}

namespace Validation {
    export const numberReg = /^[0-9]+$/
    export const stringReg = /^[A-Za-z]+$/
    export const checkString = () => {
    }
}
namespace Validation {
    export const checkNumber = (value: any) => {
        return numberReg.test(value)
    }
}
console.log(Validation.prototype) // { checkType: fun () {} }
console.log(Validation.prototype.constructor)

/**
 {
    checkNumber: ...
    checkString: ...
    numberReg: ...
    stringReg: ...
}
 */

// 命名空间和函数
// 在javascript中函数也是对象，所以给一个函数设置属性，在TypeScript中，就可以
// 通过声明合并实现。要求函数定义在命名空间前面
function countUp() {
    countUp.count++
}

namespace countUp {
    export let count = 0
}
countUp()
countUp()
console.log(countUp.count) // 2

// 命名空间和枚举
// 可以通过命名空间和枚举的合并，为枚举拓展内容，枚举和同名命名空间的先后顺序是没有要求的
enum Colors {
    red,
    green,
    blue
}

namespace Colors {
    export const yellow = 3
}
console.log(Colors)
/*
{
    0: "red",
    1: "green",
    2: "blue",
    red: 0,
    green: 1,
    blue: 2,
    yellow: 3
}
*/

