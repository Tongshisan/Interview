# 数组扁平化

将下列数组扁平化并去重升序排列

```js
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
```

解:
```js
function flat(arr) {
    const res = [];
    function func(arr) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                func(item);
            } else {
                res.push(item);
            }
        }
    }
    func(arr);
    // 返回扁平化的数组
    // return res;
    // 返回扁平化, 去重, 升序数组
    return [...new Set(res)].sort((a, b) => a - b);
}
```