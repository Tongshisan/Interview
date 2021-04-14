/*
 * @Author: your name
 * @Date: 2021-04-13 11:51:27
 * @LastEditTime: 2021-04-13 13:23:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Interview/2021-02-02/2021-04-13/index.js
 */
// 假设本地机器无法做加减乘除法，需要通过远程请求让服务端来实现。
// 以加法为例，现有远程API的模拟实现
const addRemote = async (a, b) => new Promise(resolve => {
    setTimeout(() => resolve(a + b), 1000)
})

// 请实现本地的add方法，调用addRemote，能最优的实现输入数字的加法。
async function add(...inputs) {
    // 你的实现
    let res = 0;
    return new Promise(async (resolve, reject) => {
        for (let i = 0, len = inputs.length; i < len; i++) {
            res = await addRemote(res, inputs[i]);
        }
        resolve(res);
    })
}

// 请用示例验证运行结果:
add(1, 2)
    .then(result => {
        console.log(result) // 3
    })

add(3, 5, 2)
    .then(result => {
        console.log(result) // 10
    })

add(1, 2, 3, 4, 5).then((res) => {
    console.log(res)
})