# Vue2源码：Vue初始化🔥🔥

- init.js
```js
import { compileToFunctions } from "./compiler/index";
import { callHook, mountComponent } from "./lifecycle";
import { initState } from "./state";
import { mergeOptions, nextTick } from "./until/until";

export function initMixin(Vue) {

  Vue.prototype._init = function (options) {
    // console.log(options);
    const vm = this;
    // vm.$options = options; //在实例上有个属性$options 表示的是用户传入的所有属性
    vm.$options = mergeOptions(vm.constructor.options, options)
    console.log(vm.$options)

    callHook(vm, 'beforeCreate')
    //初始化状态   可能初始化很多东西 逻辑很多  一个功能写一个方法
    initState(vm);

    if (vm.$options.el) {
      //说明数据可以挂载到页面上
      vm.$mount(vm.$options.el);
    }
  };
  Vue.prototype.$nextTick = nextTick
  Vue.prototype.$mount = function (el) {
    el = document.querySelector(el);
    const vm = this;
    const options = vm.$options;
    vm.$el = el;//id="app"
    //如果有render直接使用render即可，没有render看有没有template属性，没有template就接着找外部模板
    if (!options.render) {
      let template = options.template;
      if (!template && el) {
        template = el.outerHTML; //火狐不兼容 document.createElement('div').appendChild('app').innerHTML
      }

      console.log(template);

      //如何将模板编译成render函数
      const render = compileToFunctions(template); //将模板编译成一个函数
      options.render = render;
    }

    mountComponent(vm, el) //组件挂载  

  };


  //   Vue.prototype.$mount = function (el){
  //     el =document.querySelector(el);
  //     const vm =this;
  //     const options = vm.$options
  // //如果有render直接使用render即可，没有render看有没有template属性，没有template就接着找外部模板
  //     if(!options.render){
  //       let template = options.template;
  //       if(!template && el){
  //         template = el.outHTML
  //       }
  //       console.log(template)
  //     }
  //   }
}

```

 - state.js
  > initState(),对props,methods,data,computed,watch进行初始化

 ```js 
 import { observe } from "./observer/index.js";


//初始化状态函数中，主要是针对不同情况做不同的初始化。
//例如传入data，传入props，传入methods等等，需要分别初始化。



//vue的数据   data props computed  watch...
export function initState(vm) {
  //将所有数据都定义在vm属性上，并且后续更改需要触发视图更新
  //拿到用户定义的参数 如data methods等
  const opts = vm.$options; //获取用户属性

  //   if (opts.props) {

  //   }
  //   if (opts.methods) {

  //   }
  //   if (opts.data) {//数据的初始化

  //   }
  //   if (opts.computed) {

  //   }
  //   if (opts.watch) {

  //   }

  if (opts.data) {
    //数据的初始化
    initData(vm);
  }
}

function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue;
    },
  });
}

//一层套一层  粒度会越来越小
function initData(vm) {
  //console.log(vm);
  //进行数据劫持  Object.defineProperty
  //拿到用户传来的数据
  let data = vm.$options.data; //拿到的data有两种情况  一种是对象，一种是函数 根实例可以是对象，可以是函数，组件中data必须是函数
  
  //对data类型进行判断  如果是函数  获取函数返回值作为对象
  //用call是为了保证date中如果写了this  保证this永远指向当前的实例
  data = vm._data = typeof data === "function" ? data.call(vm) : data;

  //通过vm._data获取劫持后的数据，用户就可以拿到_data

  //data = vm._data = typeof data === "functions" ? data.call(vm) : data;这样很麻烦   所以就需要代理

  //将_data中的数据全部放到vm上
  for (let key in data) {
    proxy(vm, '_data', key); //如果用户使用  vm.name 等价于 vm._data.name
  }

  //观测这个数据    Vue响应式的核心方法
  observe(data);
}


 ```

 ## Vue初始化都做了什么

 ::: tip 总结

- 选项合并，处理组件的配置内容，将传入的options与构造函数本身的options进行合并(用户选项和系统默认的选项进行合并)

- 初始化vue实例生命周期相关的属性，定义了比如：root、parent、children、refs


- 初始化自定义组件事件的监听,若存在父监听事件,则添加到该实例上

- 初始化render渲染所需的slots、渲染函数等。其实就两件事：插槽的处理 和 $createElm的声明，也就是 render 函数中的 h 的声明

- 调用 beforeCreate 钩子函数，在这里就能看出一个组件在创建前和后分别做了哪些初始化

- 初始化注入数据，隔代传参时 先inject。作为一个组件，在要给后辈组件提供数据之前，需要先把祖辈传下来的数据注入进来

- 对props,methods,data,computed,watch进行初始化，包括响应式的处理

- 在把祖辈传下来的数据注入进来以后 再初始化provide

- 调用 created 钩子函数，初始化完成，可以执行挂载了

- 挂载到对应DOM元素上。如果组件构造函数设置了el选项，会自动挂载，所以就不用再手动调用$mount去挂载

 :::

