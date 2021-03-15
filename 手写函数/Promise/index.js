/*
 * @Author: your name
 * @Date: 2021-03-15 10:38:30
 * @LastEditTime: 2021-03-15 10:45:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Interview/手写函数/Promise/index.js
 */
class MyPromise {
    constructor(fn) {
        this.value = '';
        this.status = 'PENDING';
        this.resolvedCallbacks = [];
        this.rejectedCallbacks = [];
    }

    resolve = (value) => {
        if (this.status === 'PENDING') {
            this.status = 'RESOLVED';
            this.value = value;
            this.resolvedCallbacks.map((cb) => cb(value));
        }
    }

    reject = (value) => {
        if (this.status === 'PENDING') {
            this.status = 'REJECT';
            this.value = value;
            this.rejectedCallbacks.map((cb) => cb(value));
        }
    }

    then = (onFulfilled, onRejected) => {
        if (this.status === 'PENDING') {
            this.resolvedCallbacks.push(onFulfilled);
            this.rejectedCallbacks.push(onRejected);
        }
        if (this.status === 'RESOLVED') {
            onFulfilled(this.value);
        }
        if (this.status === 'REJECTED') {
            onRejected(this.value);
        }
    }
}