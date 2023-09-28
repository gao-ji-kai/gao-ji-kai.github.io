
import f2e from './sidebar/f2e.json'
export default {
    '/f2e/': f2e,
    '/efficiency/': [
    {
      text: '软件推荐与配置',
      // collapsed: false,
      items: [
        { text: '多平台软件', link: '/efficiency/software/cross-platform' },
        { text: 'Mac 平台', link: '/efficiency/software/mac' },
        { text: 'Windows 平台', link: '/efficiency/software/windows' },
        { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
        { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
        { text: 'WebStorm 配置', link: '/efficiency/software/webstorm' }
      ]
    },
    { text: '在线工具', link: '/efficiency/online-tools' },
  ],
  '/sourceCode/vue2': [
    {
      text: '手写vue2源码',
      collapsed: true,
         items: [
        { text: '搭建开发流程', link: '/sourceCode/vue2/construction' },
        { text: 'vue初始化', link: '/sourceCode/vue2/init' },
        {text: '数据响应式原理', link: '/sourceCode/vue2/responsive'}
      ]
       },
       {
       text: 'vue2源码学习',
      collapsed: true,
      items: [
        {
          text: '变化侦测篇',
          collapsed: true,
          items: [
            { text: '综述', link: '/sourceCode/vue2SourceCode/reactive/index.md' }, 
            { text: 'Object的变化侦测', link: '/sourceCode/vue2SourceCode/reactive/object.md' }, 
            { text: 'Array的变化侦测', link: '/sourceCode/vue2SourceCode/reactive/array.md'}, 
          ]
        },
         {
          text: '虚拟DOM篇',
          collapsed: true,
          items: [
            { text: 'Vue中的虚拟DOM', link: '/sourceCode/vue2SourceCode/virtualDOM/index.md' }, 
            { text: 'Vue中的DOM-Diff', link: '/sourceCode/vue2SourceCode/virtualDOM/patch.md' }, 
            { text: '更新子节点', link: '/sourceCode/vue2SourceCode/virtualDOM/updataChildren.md' }, 
            { text: '优化更新子节点', link: '/sourceCode/vue2SourceCode/virtualDOM/optimizeUpdataChildren.md'}, 
          ]
        },
        {
          text: '模板编译篇',
          collapsed: true,
             items: [
            { text: '综述', link: '/sourceCode/vue2SourceCode/complie/index.md' },
            { text: '模板解析阶段(整体运行流程)', link: '/sourceCode/vue2SourceCode/complie/parse.md' }, 
            { text: '模板解析阶段(HTML解析器)', link: '/sourceCode/vue2SourceCode/complie/HTMLParse.md' }, 
            { text: '模板解析阶段(文本解析器)', link: '/sourceCode/vue2SourceCode/complie/textParse.md' },
            { text: '优化阶段', link: '/sourceCode/vue2SourceCode/complie/optimize.md' }, 
            { text: '代码生成阶段', link: '/sourceCode/vue2SourceCode/complie/codegen.md' }, 
            { text: '总结', link: '/sourceCode/vue2SourceCode/complie/summary.md'}
          ]
        },
        {
          text: '生命周期篇',
          collapsed: true,
             items: [
            { text: '综述', link: '/sourceCode/vue2SourceCode/lifecycle/index.md' },
            { text: '初始化阶段(new Vue)', link: '/sourceCode/vue2SourceCode/lifecycle/newVue.md' }, 
            { text: '初始化阶段(initLifecycle)', link: '/sourceCode/vue2SourceCode/lifecycle/initLifecycle.md' }, 
            { text: '初始化阶段(initEvents)', link: '/sourceCode/vue2SourceCode/lifecycle/initEvents.md' },
            { text: '初始化阶段(initInjections)', link: '/sourceCode/vue2SourceCode/lifecycle/initInjections.md' }, 
            { text: '初始化阶段(initState)', link: '/sourceCode/vue2SourceCode/lifecycle/initState.md' }, 
            { text: '模板编译阶段', link: '/sourceCode/vue2SourceCode/lifecycle/templateComplie.md' },
            { text: '挂载阶段', link: '/sourceCode/vue2SourceCode/lifecycle/mount.md' },
            { text: '销毁阶段', link: '/sourceCode/vue2SourceCode/lifecycle/destory.md'}
          ]
        },
        {
          text: '实例方法篇',
          collapsed: true,
             items: [
            { text: '数据相关的方法', link: '/sourceCode/vue2SourceCode/instanceMethods/data.md' },
            { text: '事件相关的方法', link: '/sourceCode/vue2SourceCode/instanceMethods/event.md' }, 
            { text: '生命周期相关的方法', link: '/sourceCode/vue2SourceCode/instanceMethods/lifecycle.md' }
          ]
        },
        {
          text: '全局API',
          collapsed: true,
             items: [
            { text: '全局API', link: '/sourceCode/vue2SourceCode/globalAPI/index.md' },
          ]
        },
         {
          text: '过滤器篇',
          collapsed: true,
             items: [
            { text: '用法', link: '/sourceCode/vue2SourceCode/filter/index.md' },
            { text: '工作原理', link: '/sourceCode/vue2SourceCode/filter/filterPrinciple.md' }, 
            { text: '解析过滤器', link: '/sourceCode/vue2SourceCode/filter/parseFilters.md' }
          ]
        },
         {
          text: '指令',
          collapsed: true,
             items: [
            { text: '自定义指令', link: '/sourceCode/vue2SourceCode/directives/customDirectives.md' },
          ]
        },
          {
          text: '内置组件',
          collapsed: true,
             items: [
            { text: 'keep-live', link: '/sourceCode/vue2SourceCode/BuiltInComponents/keep-alive.md' },
          ]
        },
       
      ]
    }
     
  ],
   
    
    
    '/workflow/': [
    {
      text: '常用工具/方法',
      collapsed: false,
      items: [
        { text: '工具库整理', link: '/workflow/utils/library' },
        { text: '常用正则整理', link: '/workflow/utils/regexp' },
        { text: '常用方法整理', link: '/workflow/utils/function' }
      ]
      },
       {
      text: 'Node 相关',
      collapsed: false,
         items: [
           { text: 'npm 常用命令', link: '/workflow/node/npm' },
           { text: 'Koa 相关', link: '/workflow/node/koa' }
         ]
      },
       {
      text: '终端相关',
      collapsed: false,
      items: [
        { text: 'Zsh 配置', link: '/workflow/terminal/zsh' },
        { text: '命令行工具', link: '/workflow/terminal/toolkit' },
        { text: 'Shell 命令', link: '/workflow/terminal/shell' }
      ]
    },
    ]
}