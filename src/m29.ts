/**
 * @author 成雨
 * @date 2019-07-15
 * @Description: 混入、兼顾值和类型的合并操作
 */

class A {
    constructor() {
    }

    funcA() {
        console.log("here");
    }
}

class B {
    constructor() {
    }

    funcB() {
    }
}

const mixin = (target, from) => { // 这里定义一个函数来将一个类混入到目标类
    Object.getOwnPropertyNames(from).forEach(key => { // 通过Object.getOwnPropertyNames可以获取一个对象自身定义的而非继承来的属性名组成的数组
        target[key] = from[key]; // 将源类原型对象上的属性拿来添加到目标类的原型对象上
    });
};
mixin(B.prototype, A.prototype); // 传入两个类的原型对象
const b = new B();
b.funcA(); // here


class ClassAa {
    isA: boolean;

    funcA() {
    }
}

class ClassBb {
    isB: boolean;

    funcB() {
    }
}

// 定义一个类类型接口AB，我们在讲类的时候补充过类和接口之间的继承，也讲过类类型接口
// 这里是让类AB继承ClassAa和ClassBb的类型，所以使用implements关键字，而不是用extends
class AB implements ClassAa, ClassBb {
    constructor() {
    }

    isA: boolean = false; // 定义两个实例属性
    isB: boolean = false;
    funcA: () => void; // 定义两个方法，并指定类型
    funcB: () => void;
}

function mixins(base: any, from: any[]) { // 这里我们改造一下，直接传入类，而非其原型对象，base是我们最后要汇总而成的类，from是个数组，是我们要混入的源类组成的数组
    from.forEach(fromItem => {
        Object.getOwnPropertyNames(fromItem.prototype).forEach(key => {
            base.prototype[key] = fromItem.prototype[key];
        });
    });
}

mixins(AB, [ClassAa, ClassBb]);
const ab = new AB();
console.log(ab);
/*
{
    isA: false,
    isB: false,
    __proto__: {
        funcA: f ()
        funcB: f ()
        constructor: f
    }
}
*/