/*
 * @Author: your name
 * @Date: 2021-04-12 17:49:26
 * @LastEditTime: 2021-04-14 13:05:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/Interview/2021-04-12/index.js
 */
/**
 * 等待
 *
 * @remarks
 *
 * 可以取消的等待
 *
 * @param {number} ms - 时间(毫秒)
 * @param {T|undefined} value - 返回值
 */

 import * as React from 'react';

 [...arr]
 Array.isArray()
 const arr = [];

 arr.includes();

//  set map Symbol weakSet



// Object.assign({}, ) 

// ?? 
// .?


const a = {}
a?.b?.c
// ** 运算符 

a && a.b && a.b.c
function delay(ms = 1000, value) {

    let timer;

    const p = new Promise((resolve, reject) => {
        timer = setTimeout(() => {
            resolve(value);
        }, ms)
    });

    p.cancel = () => {
        clearTimeout(timer);
    }

    return p;
}




(async () => {
    // bar();

    const p1 = delay(1000);
    const p2 = delay(2000);

    try {
        await Promise.race([p1, p2]);
    } catch (e) {
    } finally {
        p1.cancel();
        p2.cancel();
    }

    // Executed 1000 milliseconds later
    // baz();
})();