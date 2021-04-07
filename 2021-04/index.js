/*
 * @Author: your name
 * @Date: 2021-04-06 19:07:18
 * @LastEditTime: 2021-04-06 19:48:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Interview/2021-04/index.js
 */
var list = [
    {name: '小明',year: '2018',num: 111},
    {name: '小明',year: '2020',num: 333},
    {name: '小红',year: '2018',num: 111},
    {name: '小红',year: '2019',num: 222},
    {name: '小明',year: '2019',num: 222},
    {name: '小红',year: '2020',num: 333},
    {name: '小张',year: '2020',num: 333},
    {name: '小张',year: '2018',num: 111},
    {name: '小张',year: '2019',num: 222},
  ];

function func(arr) {
    const res = arr.sort((a, b) => b.num - a.num);
    return res.slice(0, 2)
}

function foo(arr) {
    const obj = {};
    const res = [];
    for (let i = 0, l = arr.length; i < l; i++) {
        if (!obj[arr[i].name]) {
            obj[arr[i].name] = arr[i]
        } else {
            obj[arr[i].name] = obj[arr[i].name].num > arr[i].num ? obj[arr[i].name] : arr[i]
        }
    }

    for (let key in obj) {
        res.push(obj[key]);
    }
    return res;
}