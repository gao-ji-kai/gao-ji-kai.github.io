# 浏览器存储

## Cookie

`Cookie`（也叫 `Web Cookie` 或浏览器 `Cookie`）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。`Cookie` 使基于无状态的 `HTTP` 协议记录稳定的状态信息成为了可能，`Cookie` 在存储时是以键值对的形式存在的

`Cookie` 主要用于以下三个方面：

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

`Cookie` 的本职工作并非本地存储，而是“维持状态”，因当时并没有其它合适的存储办法而作为唯一的存储手段，所以会用其进行本地存储

### Cookie 的生成和使用

- 服务器生成，通过 `http response header` 中的 `set-cookie`
- 在 `JavaScript` 中使用 `document.cookie` 进行读写

```js
/* 读取 */
document.cookie

/* 写入 */
document.cookie = 'name=gaoter'
```

::: tip Cookie 的缺点

- `Cookie` 最大只能有 `4KB` 同时大多数浏览器对一个站点的 `Cookie` 个数也是有限制的
- 同一个域名下的所有请求都会携带 `Cookie` 从而带来不必要的开销和安全问题

:::

### Web Storage

[Web Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API)是 `HTML5` 专门为浏览器存储而提供的数据存储机制，其大小限制为 `5MB ~ 10MB` ([去查看当前浏览器下 Web Storage 的容量限制](http://dev-test.nemikor.com/web-storage/support-test/))，数据仅保存在客户端不与服务器进行通信

`Web Storage` 提供了两种机制供我们使用

- `Local Storage`(本地存储)
- `Session Storage`(会话存储)

::: tip LocalStorage

- 保存的数据长期存在
- 在同源的所有标签页和窗口之间共享数据

:::

::: tip SessionStorage

- 数据只存在于当前浏览器的标签页
- **在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文**
  - 在当前标签中打开一个同域下的页面时会复制当前标签页中的 `SessionStorage` 数据
  - 复制的 `SessionStorage` 数据是独立的，不会相互影响(类似深拷贝)
- 重新加载或恢复页面仍会保持原来的数据
- 关闭对应浏览器标签或窗口后数据会被清除

:::

#### API 使用

> 以 `localStorage` 为例

```js
/* 存储数据 setItem() */
localStorage.setItem('name', 'gaoter')

/* 读取数据 getItem() */
localStorage.getItem('name')

/* 删除指定数据 removeItem() */
localStorage.removeItem('name')

/* 清空数据 clear() */
localStorage.clear()
```

::: tip sessionStorage localStorage 和 cookie 的区别

- 相同点
  - 都是在客户端保存数据
  - 存储数据的类型都是字符串
- 不同点
  - 生命周期
    - `Cookie`: 可以设置失效时间(默认是关闭浏览器后失效)
    - `localStorage`: 除非被手动清除否则将会永久保存
    - `sessionStorage`: 仅在当前浏览器的标签页下有效，关闭标签或窗口后就会被清除
  - 数据大小
    - `Cookie`: 4KB
    - `localStorage` 和 `sessionStorage`: `5MB ~ 10MB`
  - http 请求
    - `Cookie`: 每次都会携带在 `HTTP` 请求头中
    - `localStorage` 和 `sessionStorage`: 仅在客户储保存不会与服务器通信

:::

### IndexedDB

[IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API) 是一个运行在浏览器上的非关系型数据库，用于**在客户端存储大量结构化数据**

::: tip IndexedDB 的特点

- 存储空间大(一般来说不少于 `250MB` 甚至没有上限)
- 支持存储二进制数据(`ArrayBuffer` 和 `Blob`)
- 键值对储存
- 同源限制
- 执行的操作是异步执行，以免阻塞应用程序
- 是一个事务型数据库系统

:::

#### API 使用

打开/创建一个 IndexedDB 数据库，并指定数据库的版本号 (版本号只能为整数)

```js
const request = window.indexedDB.open('myDatabase', 1)
let db

// 成功回调
request.onsuccess = function (event) {
  // 获取 indexedDB 实例
  db = event.target.result
  // 也可以使用 request.result 获取 indexedDB 实例
  console.log('连接 IndexedDB 成功')
}

// 失败回调
request.onerror = function () {
  console.log('连接 IndexedDB 失败')
}
```

创建一个对象仓库(类似于数据库中的表)

```js
// upgradeneeded 事件会在初始化数据库或版本发生更新时被调用
request.onupgradeneeded = function (event) {
  const db = event.target.result
  // 创建对象仓库并指定主键
  const objectStore = db.createObjectStore('userInfo', {
    keyPath: 'id',
    autoIncrement: false
  })
  console.log('创建对象仓库成功')

  /**
   * 定义存储对象的数据项
   * 第一个参数是创建的索引名称，可以为空
   * 第二个参数是索引使用的关键名称，可以为空
   * 第三个参数是可选配置参数，可以不传，常用参数之一就是 unique ，表示该字段是否唯一，不能重复
   */
  objectStore.createIndex('id', 'id', {
    unique: true
  })
  objectStore.createIndex('name', 'name')
}
```

添加数据

```js
// 创建事务指并定表格名称和读写权限
const transaction = db.transaction(['userInfo'], 'readwrite')
// 获取 Object Store 对象
const objectStore = transaction.objectStore('userInfo')

/* 添加数据 */
objectStore.add({ id: 1, name: 'test' })
```

获取数据

```js
const transaction = db.transaction(['userInfo'], 'readonly')
const objectStore = transaction.objectStore('userInfo')

const objectStoreRequest = objectStore.get(1)
objectStoreRequest.onsuccess = function () {
  console.log('获取数据', objectStoreRequest.result)
}
```

修改数据

```js
const transaction = db.transaction(['userInfo'], 'readwrite')
const objectStore = transaction.objectStore('userInfo')

const objectStoreRequest = objectStore.get(1)
objectStoreRequest.onsuccess = function () {
  const data = objectStoreRequest.result
  data.name = 'gaoter'
  objectStore.put(data)
}
```

删除数据

```js
const transaction = db.transaction(['userInfo'], 'readwrite')
const objectStore = transaction.objectStore('userInfo')

const objectStoreRequest = objectStore.delete(1)
objectStoreRequest.onsuccess = function () {
  console.log('删除成功')
}
```

::: tip 在日常开发中可以使用如下类库简化代码量

- [localForage](https://github.com/localForage/localForage) 一个提供 `name:value` 的简单语法的客户端数据存储垫片，基于 `IndexedDB` 实现，并在不持支 `IndexedDB` 的浏览器中自动回退到 `WebSQL` 和 `localStorage`
- [Dexie.js](https://github.com/dexie/Dexie.js) 对 `IndexedDB` 的封装，通过提供更友好和简单语法进行快速的编码开发
- [PouchDB](https://github.com/pouchdb/pouchdb) 对 `IndexedDB` 的封装，通过提供更友好和简单语法进行快速的编码开发

:::