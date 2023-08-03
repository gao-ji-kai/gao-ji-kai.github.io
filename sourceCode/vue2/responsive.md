# Vue源码：数据响应式原理🔥🔥
> MVVM框架的三要素：数据响应式、模板引擎及其渲染。
>> 因此数据响应式是MVVM框架的一个特性，所有的MVVM框架都需要做数据响应式，只是各自的策略不一样。Angular是它的脏检测机制，React是有明确的一些api可以供开发者调用，Vue则是一种被动检测，其特点就是利用Object.defineProperty()，通过定义对象属性getter/setter拦截对属性的获取和设置。

## observe()
 > 处理响应式的入口

 ```js


export function observe(data) {
  //console.log(data, "----------");
  //只对对象类型进行观测，非对象类型无法观测
  if (typeof data !== "object" || data == null) {
    return;
  }
  if (data.__obj__) {
    //入果有__obj__就说明该属性被观测过了  就直接返回  防止循环引用
    return;
  }

  //通过类来实现对数据的观测   类可以方便扩展  会产生实例  实例可作为唯一标识
  return new Observer(data);
}

 ```

 ## Observer观察者  

```js
class Observer {
  constructor(value) {
    //需要对val属性重新定义

    //value可能是对象 可能是数组，分类处理    数组不用defineProperty拦截

    //增加一个自定义属性
    //value.__ob__=this;

    this.dep = new Dep();//给数组本身和对象本身增加一个dep属性
    Object.defineProperty(value, "__ob__", {
      value: this,
      enumerable: false, //不能被枚举 表示  不能被循环
      configurable: false, //不能删除此属性
    });

    if (Array.isArray(value)) {
      //数组不用defineProperty拦截  性能不好
      //操作数组方法  push  shift  sort   我需要重写这些方法(一共7个)  增加更新逻辑
      //当是数组时  改写方法为自己重写后的方法
      Object.setPrototypeOf(value, arrayMethods); // 等价于value._proto_ = arrayMethods;

      //观测数组中的每一项
      this.observeArray(value); //处理原有数组中的对象  Object.freeze()冻结  冻结就不能被重写get和set了
    } else {
      this.walk(value);
    }
  }
  //监测数组变化
  observeArray(value) {
    //拿到数组每一项
    for (let i = 0; i < value.length; i++) {//如果数组中是对象的话  就会去递归观测  观测对的时候会增加__ob__属性
      observe(value[i]);
    }
  }

  
  //监测对象变化，类方便拓展 可直接在下面写方法 无需拆分 还是一个整体
  walk(data) {
    //将对象中所有的key 重新用defineProperty定义成响应式数据
    Object.keys(data).forEach((key) => {
      defineReactive(data, key, data[key]);
    });
  }
}
```


## 数组的响应式处理 array.js

```js

//首先  我需要拿到原来数组原型上的方法  天生自带的方法
let oldArrayProtoMethods = Array.prototype;

//不能直接改写数组原有方法  不可靠  因为只有在vue data中定义的数组才需要改写

//创建一个元素  让他指向原型   继承关系
export let arrayMethods = Object.create(Array.prototype);

//因为他指向数组原型链 所以 就可以拿到原型链上的方法
//arrayMethods.push===arrayMethods._proto_.push

//对数组方法进行重写  一般对改变原数组的操作进行重写

let methods = [
    "push", 
    "pop", 
    "shift", 
    "unshift", 
    "splice", 
    "reverse", 
    "sort"
];
//如果用户调用arrayMethods.push方法，会调取我重写后的 也就是下面这一坨

methods.forEach((methods) => {//AOP切片编程   把原有的逻辑 割一刀 插入自己的逻辑
  arrayMethods[methods] = function (...args) {//重写数组方法
        //做些自己的事儿 
    console.log('数组变化')
    let result = oldArrayProtoMethods[methods].call(this,...args);//这里的this指向arrayMethods
    
    
    //有可能用户后增加的数据是对象格式，也需要进项拦截
    //做个判断  只对数组增加的方法进行判断
    let inserted;
    let ob=this.__ob__;
    switch (methods) {
        case 'push':
        case 'unshift':
            inserted=args;
            break;
            case 'splice'://splice(0,1,xxxx) 
            //因为splice方法第三个才是新增的   
            inserted=args.slice(2);
        default:
            break;
    }

   if(inserted){//如果有值 都需要调observeArray()  这里的this指向调用者 this.__ob__.observeArray(inserted) 
       ob.observeArray(inserted)
      
      }
      ob.dep.notify()
    return result
  };
});

```

## 对象的响应式处理：defineReactive

```js

 export function defineReactive(data, key, value) {
  console.log(value,'444')
  //vue2中数据嵌套不要过深，过深浪费性能

  //value的值可能是个对象
 let childOb= observe(value); //对结果进行递归拦截
  //console.log(childOb.dep)
  //defineProperty是重写了get，set方法，而proxy是设置一个代理  不用改写原对象
  let dep = new Dep//观察者模式  每次都会给属性创建个dep
  Object.defineProperty(data, key, {//需要给每个属性都增加个dep
    get() {
      if (Dep.target) {
        dep.depend();//让这个属性自己的dep记住这个watcher  也会让watcher记住这个dep   一个双向的过程
        //childOb有可能是对象  有可能是数组
        if (childOb) {//如果对数组取值 会将当前的watcher和数组进行关联
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      } 
      console.log(key)
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      observe(value); //如果用户设置的是一个对象，就继续将用户设置的对象变为响应式的
      value = newValue;

      dep.notify()//通知dep中记录的watcher让它去执行
    },
  });
}

```

## dep
 >Dep在数据响应式中扮演的角色就是数据的依赖收集和变更通知

 ```js
//我们可以把当前watcher 放到一个全局变量上
let id = 0;//为了保持dep的唯一性
class Dep {
    constructor() {
        this.id = id++;
        this.subs = [];//属性要记住watcher

    }
    depend() {
        //让watcher记住dep
        //获取watcher
        Dep.target.addDep(this)//这里的this指的是Dep  name=>watcher  
    }
    //让dep记住watcher  
    addSub(watcher) {//存储watcher
        this.subs.push(watcher)
    }
    notify() {
        this.subs.forEach(watcher => watcher.update())
    }
}
Dep.target = null;//类的静态属性

//收集依赖
export function pushTarget(watcher) {
    Dep.watcher = watcher
}
export function popTarget() {
    Dep.target = null;
}



export default Dep;

 ```

 ## watcher

 ```js
 import { popTarget, pushTarget } from "./dep";
import { queueWatcher } from "./schedular";

//每个组件间有多个watcher  所以需要加一个唯一标识  
let id = 0;
class Watcher {
    constructor(vm, exprOrFn, cb, options) {
        this.vm = vm;
        this.cb = cb;
        this.options = options;
        this.id = id++
        this.getter = exprOrFn
        this.drps = [];
        this.depsId = new Set();//去重  

        this.get();//调用传入的函数 调用了render方法  此时会对模板中的数据进行取值
    }
    get() {//这个方法中会对属性进行取值操作
        pushTarget(this)// 给Dep.target赋了值 =watcher
        this.getter()//会取值  执行了observer中index.js中的54行 
        popTarget();//Dep.target = null;
    }
    addDep(dep) {
        let id = dep.id;
        if (!this.depsId.has(id)) {//dep是非重复的
            this.depsId.add(id)
            this.deps.push(dep)
            dep.addSub(this)
        }
    }
    run() {
        this.get();
    }

    update() {//如果多次更改，我希望合并一次  (可以看成防抖)
       // this.get()//不停地重新渲染
        console.log(this)//此处this指向watcher
        queueWatcher(this)//此时可能有重复的
    }
    //当属性取值时  需要记住这个watcher，稍后变化了  去执行自己记住的watcher即可     依赖收集
}


export default Watcher;

```

## queueWatcher

```js
import { nextTick } from "../until/until";

let has = {};
let queue = [];


function flushSchedularQueue() {
    for (let i = 0; i < queue.length; i++) {
        let watcher = queue[i]
        watcher.run()
    }
    queue = []
    has = {}
    pending = false
}


//vue更新操作是异步操作
//多次调用queueWatcher 如果watcher不是同一个
let pending = false
export function queueWatcher(watcher) {//调度更新几次
    //更新时将watcher去重
    let id = watcher.id;
    if (has[id] == null) {
        queue.push(watcher);
        has[id] = true;
        console.log(queue);
        //让queue清空
        if (!pending) {
            pending = true
            nextTick(flushSchedularQueue);

        }


    }

}
```

## 数据响应式原理

::: tip 总结

- Vue的数据响应式原理其核心就是通过Object.defineProperty来拦截对数据的获取和设置
    - Vue的响应式数据分为两类：对象和数组
      - 对象 
        - 遍历对象的所有属性，并为每个属性设置getter和setter，以便将来的获取和设置，如果属性的值也是对象，则递归为属性值上的每个key设置getter和setter
        - 获取数据时：在dep中添加相关的watcher
        - 设置数据时：再由dep通知相关的watcher去更新
      - 数组
        - 覆盖了原有的7个改变了原数组的方法，并克隆了一份，然后在克隆的这一份上更改自身的原型方法，然后拦截对这些方法的操作
        - 添加新数据时：需要进行数据响应式的处理，再由dep通知watcher去更新
        - 删除数据时：也要由dep通知watcher去更新



:::