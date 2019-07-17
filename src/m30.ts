/**
 * @author 成雨
 * @date 2019-07-17
 * @Description: Promise async await
 */

interface Res { // 我们定义一个接口，用来定义接口返回结果的结构
    data: {
        [key: string]: any;
    };
}

namespace axios { // 现在我们来定义一个命名空间，用来模拟axios实现接口调用
    export function post(url: string, config: object): Promise<Res> { // 返回值类型是一个Promise，resolve传的参数的类型是Res
        return new Promise((resolve, reject) => { // 然后这里返回一个Promise
            setTimeout(() => { // 通过setTimeout实现异步效果
                let res: Res = {data: {}};
                if (url === "/login") res.data.user_id = 111; // 我们这里通过简单判断，来模拟调用不同接口返回不同数据的效果
                else res.data.role = "admin";
                console.log(2);
                resolve(res); // 在这里传入res结果
            }, 1000);
        });
    }
}

interface Info {
    user_name: string;
    password: string;
}

async function loginReq({user_name, password}: Info) { // 这里使用async关键字修饰这个函数，那么他内部就可以包含异步逻辑了
    try {
        console.log(1);
        const res = await axios.post("/login", { // 这里调用/login接口
            data: {
                user_name,
                password
            }
        });
        console.log(3);
        return res;
    } catch (error) {
        throw new Error(error);
    }
}

async function getRoleReq(user_id: number) {
    try {
        const res = await axios.post("/user_roles", {
            data: {
                user_id
            }
        });
        return res;
    } catch (error) {
        throw new Error(error);
    }
}

loginReq({user_name: "lison", password: "123"}).then(res => {
    const {
        data: {user_id}
    } = res;
    getRoleReq(user_id).then(res => {
        const {
            data: {role}
        } = res;
        console.log(role);
    });
});