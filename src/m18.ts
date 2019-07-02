/**
 * @Description: 类型别名和字面量类型 -- 单调类型
 * @author 成雨
 * @date 2019/7/2 0002
 */

// ------------- 1 类型别名 --------------
type TypeString = string;
let str: TypeString;
// str = 123

// 类型别名使用泛型
type PositionType<T> = { x: T, y: T };
const position1: PositionType<number> = {
    x: 1,
    y: -1
};
const position2: PositionType<string> = {
    x: "right",
    y: "top"
};

// 使用类型别名时可以在属性中引用自身
type Child<T> = {
    current: T;
    child?: Child<T>;
}

let ccc: Child<string> = {
    current: "first",
    child: {
        // error
        current: "second",
        child: {
            current: "third",
            // child: "test" // 这个地方不符合type，造成最外层child处报错
        }
    }
};

// ------------ 2 字面量类型 -----------

// 字符串字面量
type Name = 'Lison';
// const name1: Name = "test"; // error 不能将类型“"test"”分配给类型“"Lison"”
const name2: Name = "Lison";

type Direction = "north" | "east" | "south" | "west";

function getDirectionFirstLetter(direction: Direction) {
    return direction.substr(0, 1);
}

// getDirectionFirstLetter("test"); // error 类型“"test"”的参数不能赋给类型“Direction”的参数
getDirectionFirstLetter("east");

// 数字字面量类型

type Age = 18;

interface Info {
    name: string;
    age: Age;
}

const info: Info = {
    name: "Lison",
    age: 28 // error 不能将类型“28”分配给类型“18”
};

function getValue(index: number) {
    if (index !== 0 || index !== 1) {
        // error This condition will always return 'true' since the types '0' and '1' have no overlap
        // ...
    }
}
