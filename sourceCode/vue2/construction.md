# 环境搭建 
 
 - 首选安装开发依赖包

::: tip 安装开发依赖

 - rollup 打包工具   (打包比较干净没多余的东西)
 - rollup-plugin-babel   rollup和babel的桥梁 
 - @babel/core     babel核心模块
 - @babel/preset-env    将es6语法转换成es5
 - rollup-plugin-serve  启动文本webpack服务
:::

 - 配置 rollup.config.js 

 ```js
 import serve from "rollup-plugin-serve";
import babel from "rollup-plugin-babel";

export default {//用于打包的配置
    input:'./src/index.js',
    output:{
        file: 'dist/vue.js',//用来设置代码最终打包生成的文件，此处是在项目根目录下创建一个dist文件夹，将代码打包至dist下面的vue.js文件。
        name: 'Vue',//全局的名字就是vue  相当于给打包后的模块起一个名字，在全局上添加一个Vue，作为全局实例来使用。
        format: 'umd',//模块格式  umd 统一模块规范   window.Vue  设置打包格式，也就是代码构建后的输出格式。
        sourcemap:true//源码映射文件   es6->es5
    },
    plugins:[
        babel({
            exclude:"node_modules/**",//表示node_modules目录下所有的文件都忽略掉 这个目录不需要用babel转化
            
        }),
        serve({
            open: true,//自动打开浏览器
            openPage:"/public/index.html",//默认打开的页面
            port:3000,//服务端口
            contentBase:''//从哪个内容文件里启动  ''写就是以openPage来启动   以当前根目录为基准  不写报错
        })
    ]
}
 ```

 - babelrc配置
 
 ```js
 {
    "presets": [//预设  插件的集合
        "@babel/preset-env"
    ]
}
 ```

 - package.json配置
 
 ```json
 {
  "name": "vue2-pro",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "rollup -c -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "@rollup/plugin-babel": "^5.3.1",
    "rollup": "^2.33.0",
    "rollup-plugin-babel": "^4.4.0",
    "rollup-plugin-serve": "^1.1.0"
  },
  "dependencies": {}
}

 ```
