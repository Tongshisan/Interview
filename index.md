# 就叫前端基础吧

## `HTML`

1. `<script>` 中  `async` 和 `defer` 属性的区别

   + `async` 和 `defer` 都不会阻塞 `html` 的解析
   + `async` 会在 js 文件加载完成后立即执行, 不会保证 js 文件的执行顺序
   + `defer` 属性的 js 文件在加载完成后不会立即执行, 一直到 `html` 解析完成后才开始执行, 能保证 js 文件执行 的顺序
   + `js` 文件的执行会阻塞 `html` 的渲染
   + [友情链接](https://github.com/Tongshisan/Blog/blob/master/JS/defer%20%E5%92%8C%20async.md)

2. 首屏时间 和 白屏时间

3.  从输入网址到页面渲染的过程

4. `DOM`

   + `DOM` 是文档对象模型, 是 HTML 和 XML 文档的接口

5. 事件传播

   + 捕获阶段: 事件从 `window` 开始, 然后向下到每个元素, 直到到达目标元素
   + 目标阶段: 事件到达目标元素
   + 冒泡阶段: 事件从目标元素冒泡, 然后上升到每个元素, 直到到达 `window`

6. `event.target` 和 `event.currentTarget`

   + `event.target`: 触发事件的元素

   +  `event.currentTarget`: 附加事件处理器的元素

     ```html
     <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
     </ul>
     
     <script>
       const ul = document.querySelector('ul');
       ul.addEventListener('click', (e) => {
         // 点击哪个 li 元素就打印哪个 li 标签
         console.log(e.target)
         // 不管点击哪个 li 元素, 都打印整个 <ul>...</ul> 标签
         console.log(e.currentTarget)
       })
     </script>
     ```

     

## `JS`

1. 数据类型

   + 基本数据类型: `null`, `undefined`, `Number`, `String`, `Boolean`, `Symbol`
   + 引用数据类型: `Object`

2. 类型转换

   + 隐式类型转换
   + 显示类型转换

3. 判断数据类型

   + typeof
   + instanceof
   + Object.prototype.toString

4. 事件流

   + DOM0 级事件流

     ```html
     <div onclick="handleClick()"></div>
     ```

   + DOM2 级时间流

     ```html
     <div id="test"></div>
     
     <script>
     	const div = document.getElementById('test');
       
       div.addEventListener('click', (e) => {
         const event = e || window.event;
         const target = event.target || event.srcElement;
       })
     </script>
     ```

     

5. 闭包

   + 函数作为返回值

     ```js
     function fn() {
       let max = 10;
       
       return function func(x) {
         if (x > max) {
           console.log(x);
         }
       }
     }
     
     const f = fn();
     fn(15);
     ```

     

   + 函数作为参数

     ```js
     const max = 10;
     const fn = function () {
       if (x > max) {
         console.log(x);
       }
     }
     
     (function (f) {
       let max = 100;
       f(15);
     })(fn)
     
     // 上面例子中 max 取 10, 会打印 x 的值
     ```

     

6. this 及 this 的指向

   在函数中 `this` 的取值是真正调用的时候决定的, 函数定义的时候决定不了

   + 函数是否在 `new` 中调用, 如果是, 那么 `this` 指向新创建的对象
   + 函数是否通过 `apply`, `call`, `bind` 调用 ( 硬绑定 ), 如果是, `this` 指向指定的对象
   + 函数是否在某个上下文对象中调用 (隐式绑定), 如果是, `this` 指向那个上下文对象, 一般是 `obj.foo()`
   + 

7. 原型和原型链的继承

   ```js
   // 寄生组合继承
   function Parent() {
     this.name = 'parent';
     this.test = [1, 2, 3];
   }
   
   function Child() {
     Parent.call(this);
     this.type = 'child';
   }
   
   Child.prototype = Object.create(Parent.prototype);
   Child.prototype.constructor = Child;
   ```

   

8. ES6 的 `class`

9. 事件循环

10. New 一个函数发生了什么

    + 创建一个新对象
    + 将新对象的隐式原型指向函数的显示原型
    + 这个新对象会绑定到函数调用的 `this`
    + 如果函数返回了一个对象, 那么返回这个函数返回的对象, 否则返回新创建的对象

11. 模块化发展历程

    + IIFE

      + 使用立即执行函数实现模块化, 在一个单独的函数作用域内执行代码, 避免变量冲突

        ```js
        (function () {
          ...
        })()
        ```

        

    + AMD

      + 使用 `requireJS` 实现模块化, 依赖必须提前声明好

        ```js
        define('./index.js', function(code) {
          ...
        })
        ```

        

    + CMD

      + 使用 `seaJS` 实现模块化, 支持动态引入依赖文件

        ```js
        define(function(require, ports, module) {
          var indexCode = require('./index.js')
        })
        ```

        

    + CommonJS

      + `nodeJS` 中自带的模块化

        ```js
        const fs = require('fs');
        ```

        

    + UMD

      + 兼容 `AMD`, `CommonJS` 模块化语法

    + ES6 Modules

      + ES6 引入的模块化

        ```js
        import Index from './index'
        ```

        

12. 设计模式

13. `&&` 和 `||`

    + `&&`: 逻辑与, 在操作数中找到第一个虚值并返回他, 如果没有找到任何虚值表达式, 返回最后一个真值表达式
    + `||`: 逻辑或: 在操作数中找到第一个真值并返回他

## `css`

1. BFC, IFC, FFC, GFC
2. 选择器
3. 盒模型
4. 媒体查询
5. 清除浮动
6. 长文本处理
7. 三列布局
8. 重绘和回流
9. 水平居中
10. 垂直居中
11. 水平垂直居中
12. -index

## `HTTP`

1. 三次握手, 四次挥手
2. 七层结构
3. 浏览器缓存
4. Cookie
5. 跨域
6. http
7. http2
8. https
9. http 状态码
10. Accept 字段
11. 对于定长和不定长的数据 http 是怎么传输的
12. http 处理大文件传输
13.  

## 框架类

1. React 和 Vue 的区别
2. React 的 `setState`
3. 

## 手写题

1. call

   ```js
   Function.prototype.call = function (ctx = window, ...args) {
     const fn = Symbol('fn');
     ctx[fn] = this;
     ctx[fn](...args);
     
     delete ctx[fn];
   }
   ```

   

2. apply

   ```js
   Function.prototype.apply = function (ctx = window, argsArr) {
     const fn = Symbol('fn');
     ctx[fn] = this;
     ctx[fn](...argsArr);
     
     delete ctx[fn];
   }
   ```

   

3. bind

   ```js
   Function.prototype.bind = function (ctx = window, ...args) {
     const fn = Symbol('fn');
     ctx[fn] = this;
     
     return function (..._args) {
       args = args.contact(_args);
       ctx[fn](...args);
       
       delete ctx[fn];
     }
   }
   ```

   

4. 数组扁平化

   ```js
   function myFlat(arr) {
     const res = [];
     function func(arr) {
       for (let i = 0, l = arr.length; i < l; i++) {
         if (Array.isArray(arr[i])) {
           func(arr[i]);
         } else {
           res.push(arr[i]);
         }
       }
     }
     func(arr);
     return res;
   }
   ```

   

5. Proimse

   ```js
   class MyPrommise {
     constructor(fn) {
       this.value = '';
       this.status = 'PENDING';
       this.resolvedCallbacks = [];
       this.rejectedCallbacks = [];
       
       fn(this.resolve, this.reject);
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
         this.status = 'REJECTED';
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
   ```

   

6. 防抖

   ```js
   function debounce(fnnc, delay = 500, immediate = false) {
     let timer = null;
     
     return function() {
       let self = this;
       let args = arguments;
       
       if (timer) {
         clearTimeout(timer);
       }
       
       if (immediate) {
         let callNow = !timer;
         timer = setTimeout(() => {
           timer = null;
         }, delay)
        	if (callNow) {
           func.apply(self, args);
         }
       } else {
         timer = setTimeout(() => {
           func.apply(self, args);
         }, delay)
       }
     }
   }
   ```

   

7. 节流

   ```js
   function throttle(func, delay = 500) {
     let previos = 0;
     
     return function () {
       let self = this;
       let args = arguments;
       let now = +new Date();
       if (current - previos > delay) {
         func.apply(self, args);
         previos = now;
       }
     }
   }
   
   function throttle(func, delay = 500) {
     let timer = null;
     return function() {
       let self = this;
       let args = arguments;
       if (!timer) {
         setTimeout(() => {
           func.apply(self, args);
           timer = null;
         }, delay)
       }
     }
   }
   ```

   

8. 深浅拷贝

   + 浅拷贝

     ```js
     const arr = [1, 2, 3]
     const obj = {
       name: 'test'
     };
     const arr1 = arr.slice();
     const arr2 = [...arr];
     const arr3 = arr.concat();
     const obj1 = Object.assign({}, obj);
     
     ```

   + 深拷贝

     ```js
     function deepClone(obj) {
       if (obj instanceof RegExp) return new RegExp(obj);
       if (obj instanceof Date) return new Date(obj);
       if (obj === null || typeof obj !== 'object') return obj;
       
       const cloneObj = Array.isArray(obj) ? [] : {};
       for (let key in obj) {
         if (obj.hasOwnProperty(key)) {
           cloneObj[key] = deepClone(obj[key]);
         }
       }
       
       return cloneObj;
     }
     ```

     

9. new

   ```js
   function MyNew(fn, ...args) {
     const obj = Object.create(fn.prototype);
     const res = fn.apply(obj, ...args);
     return res instanceof Object ? res : obj
   }
   ```

10. instanceof

11. map

    ```js
    Array.prototype.map = function (arr, mapCb) {
      if (!Array.isArray(arr) || !arr.length || typeof arr !== 'function') {
        rturn [];
      }
      
      const res = [];
      for (let i = 0, l = arr.length; i < l; i++) {
        res.push(mapCb(arr[i], i, arr));
      }
      
      return res;
    }
    ```

    

12. filter

    ```js
    Array.prototype.filter = function (arr, filterCb) {
      if (!Array.isArray(arr) || !arr.length || typeof arr !== 'function') {
        rturn [];
      }
      
      const res = [];
      for (let i = 0, l = arr.length; i < l; i++) {
        if (filterCb(arr[i], i, arr)) {
          res.push(arr[i]);
        }
      }
      
      return res;
    }
    ```

    

13. rduce

14. instanceof

    ```js
    function instanceof(left, right) {
      const prototype = right.prototype;
      let left = left.__proto__;
      while(true) {
        if (left === null) {
          return false;
        }
        if (left === prototype) {
          return true;
        }
        left = left.__proto__;
      }
    }
    ```

    



## 工具类

