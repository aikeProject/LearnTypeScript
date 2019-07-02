/**
 * @Description: this 类型
 * @author 成雨
 * @date 2019/7/2 0002
 */

class Counter {
    constructor(public count: number = 0) {
    }

    add(value: number) { // 定义一个相加操作的方法
        this.count += value;
        return this;
    }

    subtract(value: number) { // 定义一个相减操作的方法
        this.count -= value;
        return this;
    }
}

let counter = new Counter(10);
console.log(counter.count); // 10
counter.add(5).subtract(2);
console.log(counter.count); // 13


class PowCounter extends Counter {
    constructor(public count: number = 0) {
        super(count);
    }

    pow(value: number) { // 定义一个幂运算操作的方法
        this.count = this.count ** value;
        return this;
    }
}

let powCounter = new PowCounter(2);
powCounter
    .pow(3)
    .subtract(3)
    .add(1);
console.log(powCounter.count); // 6
