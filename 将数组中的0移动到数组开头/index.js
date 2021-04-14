/*
 * @Author: your name
 * @Date: 2021-04-13 14:46:49
 * @LastEditTime: 2021-04-13 19:52:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Interview/将数组中的0移动到数组开头/index.js
 */
function fn(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    let flag = 0;
    for (let i = arr.length - 1; i >= flag;) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.unshift(0);
            flag++
        } else {
            i--;
        }
    }
    return arr;
}
const arr = [0, 2, 0, 7, 0, 3];
console.log(fn(arr));


function fn(arr) {
    let zeroCount = 0;
}

function checkIsZhishu(num) {

}

// 1 2 3 4     5 6 7 8        9 10 11 12 13 14 15 16


// 1 - 100

// 判断一个数是否是质数

10 * 10 

// 删除 2, 3, 5, 7 的倍数

// 
