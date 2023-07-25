# DOM  BOM

## DOM
` Document Object Model`文档对象模型，是一种树形结构
 ### 获取DOM

 <<< @/f2e/javascript/code/dom.js

 ### 操作DOM
 > 注: 操作Dom比较耗时和耗资源，避免频繁的操作Dom

优化：
- 将查询结果缓存下来
- 将多次操作合并成一次来完成


## BOM
`Browser Object Model`浏览器对象模型
>包含location、screen、navigator、history

- location 
>提供文档有关信息与导航功能

 <<< @/f2e/javascript/code/bom.js

- navigator
>浏览器信息，获取浏览器用户代理字符串，使用 `navigator.userAgent`
```js
/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) // i，不区分大小写
```

- screen
>浏览器外部显示器信息，基本用不到
```js
availHeight: 1127
availLeft: -2048
availTop: -113
availWidth: 2048
colorDepth: 24
height: 1152
orientation: ScreenOrientation {angle: 0, type: 'landscape-primary', onchange: null}
pixelDepth: 24
width: 2048
```
- history
>用户上网的历史记录，可以操作前进或者后退跳转到任意页面
```js
history.length // History.length是一个只读属性，返回当前session中的history个数，包含当前页面在内
history.back(); // 后退
history.forward(); // 前进
history.go(3); // 前进
history.go(-3); // 后退
history.pushState(state, title[, url]) // 向当前浏览器会话的历史堆栈中添加一个状态
history.replaceState(state, title[, url]); // 修改当前历史记录实体
```





