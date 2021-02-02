<!--
 * @Author: your name
 * @Date: 2021-02-02 14:10:12
 * @LastEditTime: 2021-02-02 14:14:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Interview/2021-02-02/某公司1-12月份.../index.md
-->
# 某公司 1 到 12 月份的销售额存在一个对象里面

如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。

```js
function func(obj) {
    const res = [];
    for (let i = 1; i < 12; i++) {
        if (obj[i] !== undefined) {
            res.push(obj[i])
        } else {
            res.push(null)
        }
    }

    return res
}
```