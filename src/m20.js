"use strict";
/**
 * @Description: this 类型
 * @author 成雨
 * @date 2019/7/2 0002
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Counter = /** @class */ (function () {
    function Counter(count) {
        if (count === void 0) { count = 0; }
        this.count = count;
    }
    Counter.prototype.add = function (value) {
        this.count += value;
        return this;
    };
    Counter.prototype.subtract = function (value) {
        this.count -= value;
        return this;
    };
    return Counter;
}());
var counter = new Counter(10);
console.log(counter.count); // 10
counter.add(5).subtract(2);
console.log(counter.count); // 13
var PowCounter = /** @class */ (function (_super) {
    __extends(PowCounter, _super);
    function PowCounter(count) {
        if (count === void 0) { count = 0; }
        var _this = _super.call(this, count) || this;
        _this.count = count;
        return _this;
    }
    PowCounter.prototype.pow = function (value) {
        this.count = Math.pow(this.count, value);
        return this;
    };
    return PowCounter;
}(Counter));
var powCounter = new PowCounter(2);
powCounter
    .pow(3)
    .subtract(3)
    .add(1);
console.log(powCounter.count); // 6
