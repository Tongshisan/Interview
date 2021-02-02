<!--
 * @Author: your name
 * @Date: 2021-02-02 10:14:15
 * @LastEditTime: 2021-02-02 10:26:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Interview/2021-02-02异步笔试题/index.md
-->
# 请写出下面代码的运行结果

```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('scripts start');

setTimeout(() => {
    console.log('setTimeout')
}, 0);

async1();

new Promise((resolve, reject) => {
    console.log('promise1');
    resolve();
}).then(() => {
    console.log('promise2');
})
console.log('script end');
```

## 预期结果

```js
'script start'
'async1 start'
'promise1'
'script end'
'async2'
'async1 end'
'promise2'
'setTimeout'
```

## 实际结果

```js
scripts start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```

result: `await async2()` 是同步的, 所以 `async start` 后面打印 `async2`, `await` 后面的是异步的