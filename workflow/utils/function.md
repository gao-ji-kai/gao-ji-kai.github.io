---
description: 记录开发中的一些常用方法：环境判断、验证url是否有效、提取身份证信息
---

# 常用方法

> 收集开发中的一些常用方法

## 环境判断

```js
const UA = window.navigator.userAgent.toLowerCase()

// Android
const isAndroid = /android/.test(UA)

// IOS
const isIOS = /iphone|ipad|ipod|ios/.test(UA)

// 浏览器环境
const inBrowser = typeof window !== 'undefined'

// IE
const isIE = /msie|trident/.test(UA)

// Edge
const isEdge = UA.indexOf('edge/') > 0

// Chrome
const isChrome = /chrome\/\d+/.test(UA) && !isEdge

// 微信
const isWeChat = /micromessenger/.test(UA)

// 移动端
const isMobile = 'ontouchstart' in window
```

## 微信 `api promise` 化

```js
function promisify(fn) {
  return function (options) {
    return new Promise((resolve, reject) => {
      fn(
        Object.assign({}, options, {
          success: resolve,
          fail: reject
        })
      )
    })
  }
}

// 例 获取系统信息
promisify(wx.getSystemInfo)
  .then((res) => {
    console.log('success', res)
  })
  .catch((err) => {
    console.log('fail', err)
  })
```

## 验证 `url` 是否有效

```js
function isUrl(string) {
  if (typeof string !== 'string') {
    return false
  }
  try {
    new URL(string)
    return true
  } catch (err) {
    return false
  }
}

isUrl('gaoter') // false

isUrl('https:gaoter.cn') // true
```

::: warning 注意
该技巧只适用于一些验证不严格的场景，[严格场景下可以使用这个 npm 包 —— is-url](https://github.com/segmentio/is-url)
:::

## 提取身份证信息

- #### 参数

  - **idCard:** 身份证号码
  - **separator:** 出生年月日的分割字符，默认为 `/`

- #### 返回值

  - **age:** 年龄（实岁）
  - **birthday:** 出生年月日
  - **gender:** 性别（0 女 1 男）

```js
function getIdCardInfo(idCard, separator = '/') {
  if (
    !/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(
      idCard
    )
  ) {
    throw Error(`${idCard}不是一个身份证号码`)
  }
  // 提取 idCard 中的字符
  const idSubstr = (s, e) => idCard.substr(s, e)
  // 拼接日期
  const splice = (d) => d.join(separator)
  // 获取出生年月日 性别（0 女 1 男）
  let birthday, gender
  if (idCard.length === 18) {
    birthday = splice([idSubstr(6, 4), idSubstr(10, 2), idSubstr(12, 2)])
    gender = idSubstr(-2, 1) & 1
  } else {
    birthday = splice(idSubstr(6, 2), idSubstr(8, 2), idSubstr(10, 2))
    gender = idSubstr(-1, 1) & 1
  }
  // 获取年龄（实岁）
  const birthDate = new Date(birthday)
  const newDate = new Date()
  const year = newDate.getFullYear()
  let age = year - birthDate.getFullYear()
  if (newDate < new Date(splice([year, birthday.substring(5)]))) {
    age--
  }
  return {
    age,
    birthday,
    gender
  }
}
```
## 导出导入文件
- #### 参数
- **name:** 文件名
- **data:** 二进制数据
- **src:** 文件url

```js
/**
 *  导出excel文件
 *  @module downloadExcel
 *  @param { string } name - 文件名
 *  @param { blob } data - 二进制数据
 *  @param { src } [src=null] - 文件url
 */
export default function downloadExcel(name, data, src = null) {
  const fileName = name
  if (data) {
    const blob = new Blob([data], {
      type: 'application/vnd.ms-excel' + ';charset=utf-8',
    })
    src = window.URL.createObjectURL(blob)
  }

  if (src) {
    const a = document.createElement('a')
    const event = new MouseEvent('click')
    a.download = fileName
    a.href = src
    a.target = '_blank'
    a.dispatchEvent(event)
  }
}

```


## 判断移动端还是pc端

```js
/**
 * 判断移动端还是pc端
 */
export const isMobile = function () {
  var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  if (isMobile) {
    return true
  } else {
    return false
  }
}
```


## 获取当前年月日 并转换成所需格式
- #### 参数
- **time:** 如果有值 转换成所需的日期格式

```js
/**
 * 获取当前年月日 并转换成所需格式
 * @param time 如果有值 转换成所需的日期格式
 */
export const getDate = function (time) {
  let nowDate = new Date()
  if (time) {
    nowDate = new Date(time)
  }
  const date = {
    year: nowDate.getFullYear(),
    month: nowDate.getMonth() + 1,
    date: nowDate.getDate(),
    getHours: nowDate.getHours(),
    getMinutes: nowDate.getMinutes(),
    getSeconds: nowDate.getSeconds()
  }
  const systemDate = date.year + '-' + date.month + '-' + date.date + ' ' + date.getHours + ':' + date.getMinutes + ':' + date.getSeconds
  return systemDate
}
```


## 修复firefox/chrome中toFixed兼容性问题

```js
* 修复firefox/chrome中toFixed兼容性问题
 * firefox/chrome中，对于小数最后一位为5时进位不正确，
 * 修复方式即判断最后一位为5的，改成6，再调用toFixed
   number {原始数字}
   precision {位数}
 */
export function toFixed(number, precision) {
  const str = number + '';
  // 小数点位置
  const pointIndex = str.indexOf('.');
  // 末位为5 并且 小数点后面的位数必须大于要取精度的位数
  if (str.slice(-1) == '5' && pointIndex !== -1 && str.slice(pointIndex + 1).length > precision) {
    return (str.slice(0, -1) + '6' - 0).toFixed(precision);
  } else {
    return number.toFixed(precision);
  }
}
```

## 时分秒转换
```js
// 时分秒转换
export function formatSeconds(value) {
  var theTime = parseInt(value); // 秒
  var middle = 0; // 分
  var hour = 0; // 小时
  if (theTime > 60) {
    middle = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);
    if (middle > 60) {
      hour = parseInt(middle / 60);
      middle = parseInt(middle % 60);
    }
  }
  var result = '' + parseInt(theTime) + '秒';
  if (middle > 0) {
    result = '' + parseInt(middle) + '分' + result;
  }
  if (hour > 0) {
    result = '' + parseInt(hour) + '小时' + result;
  }
  return result;
}
```

## 经纬度类型转换
- #### 参数
- **array:** number[] || object[]
- **source:** 原坐标类型
- **target:** 目标坐标类型
```js
/**
 * @name 经纬度类型转换
 * @param {*} array number[] || object[]
 * @param {*} source 原坐标类型
 * @param {*} target 目标坐标类型
 * @default 默认高德(GCJ02)转百度(BD09) 
 */
export function reversePoints(array, source = 3, target = 5) {
  return new Promise((res, rej) => {
    let coordsTypeFrom = source === 3 ? 'gcj02' : 'bd09ll';
    let coordsTypeTo = target === 5 ? 'bd09ll' : 'gcj02';
    convert({
        coordsTypeFrom: coordsTypeFrom,
        coordsTypeTo: coordsTypeTo,
        coordsList: array,
      })
      .then(({
        data
      }) => {
        console.log(data,'999');
        res(data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
```

## 下载excel
```js
// 下载excel
export function downloadExcel(name, data, src = null) {
  const fileName = name || `${moment(new Date()).format('YYYYMMDDHHmm')}.xls`
  if (data) {
    const blob = new Blob([data], {
      type: 'application/vnd.ms-excel' + ';charset=utf-8'
    })
    src = window.URL.createObjectURL(blob)
  }
  if (src) {
    const a = document.createElement('a')
    const event = new MouseEvent('click')
    a.download = fileName
    a.href = src
    a.dispatchEvent(event)
  }
}


export function downloadExcel({
  data,
  fileName,
  headers = {},
  suffix = "xls",
  customName = true,
}) {
  if (headers["content-type"].includes("json")) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const { result } = reader;
        const errorInfos = JSON.parse(result);
        Message.error(errorInfos.msg);
      } catch (error) {}
    };
    reader.readAsText(data);
    return;
  }

  if (!fileName && headers["content-disposition"]) {
    const cache = headers["content-disposition"].split(";");

    const fileItem = cache.filter((item) => item.indexOf("filename") > -1)[0];
    if (fileItem) {
      fileName = decodeURIComponent(fileItem.replace("filename=", ""))
        .replace(/"/g, "")
        .replace(/\s+/g, "");
    }
  }
  const blob = new Blob([data], {
    type: "application/vnd.ms-excel" + ";charset=utf-8",
  });
  const href = window.URL.createObjectURL(blob);
  if (href) {
    const a = document.createElement("a");
    const event = new MouseEvent("click");
    if (customName) {
      fileName = fileName ? `${fileName}.${suffix}` : `${new Date()}.${suffix}`;
    }
    a.download = `${fileName}`;
    a.href = href;
    a.dispatchEvent(event);
    // 在内存中移除URL 对象
    window.URL.revokeObjectURL(href);
  }
}

```
## 格式化时间
```js
// 格式化时间
export function formatTime (date) {
  if (date === undefined || date === null) {
    return ''
  }
  return moment(date).format('YYYY/MM/DD HH:mm')
}
```

## 通过身份证 转出 生日日期
```js
// 通过身份证 转出 生日日期
export function birthDay (iden) {
  let birth = null
  if (iden.length === 18) {
    birth =
      iden.substring(6, 10) +
      '-' +
      iden.substring(10, 12) +
      '-' +
      iden.substring(12, 14)
  }
  if (iden.length === 15) {
    birth =
      '19' +
      iden.substring(6, 8) +
      '-' +
      iden.substring(8, 10) +
      '-' +
      iden.substring(10, 12)
  }
  return birth
}
```
## 获取地址栏的hash参数和search参数
```js
/**
 * 获取地址栏的hash参数和search参数
 */
export function getUrlparams () {
  const save = {}
  const arr = [
    {
      key: 'hash',
      content: window.location.hash.split('?')[1],
      params: {}
    },
    {
      key: 'search',
      content: window.location.search.substr(1),
      params: {}
    }
  ]
}
```
## 判断是否是iframe
```js
// 判断是否是iframe
export function isIframe () {
  const windowHref = window.location.href
  const iframeHref = window.top.location.href
  return windowHref !== iframeHref
  // return false
}
```