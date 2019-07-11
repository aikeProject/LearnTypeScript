/**
 * @author 成雨
 * @date 2019-07-11
 * @Description: 使用模块封装代码
 */

// 1 export 导出声明 不仅能够导出变量、函数、类还有包括TypeScript特有的类型别名和接口等...
export interface Func {
    (arg: number): string;
}

export class C {
    constructor() {
    }
}

class B {
}

export {B};
export {B as ClassB};

// 2 import 引入模块
// main.ts
import {name} from "./moduleB";
// main.ts
import * as info from "./moduleB";
//main.ts
import {name as nameProp} from "./moduleB";

// 3 export default
// moduleB.ts
// export default "lison";
// // main.ts
// import name from "./moduleB.ts";
// console.log(name); // 'lison'

// 4 export = 和 import = require()
// 当我们想要导出一个模块时，可以使用 export=来导出
class C {
}

export = C

// 导入必须使用
import ClassC = require("./moduleC");

const c = new ClassC();