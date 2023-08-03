/**
 * 右上角导航
 */
const pkg = require('../../package.json')

const nav = [
    { text: '导航', link: '/nav', activeMatch: '^/nav' },
   
    {
        text: '前端知识',
        items: [
            { text: 'HTML/CSS 基础知识', link: '/f2e/html/index' },
            { text: 'JavaScript 基础知识', link: '/f2e/javascript/dom' },
            { text: '前端模块化', link: '/f2e/module/index' },
            { text: 'Git 知识点', link: '/f2e/git/index' },
            { text: '浏览器相关', link: '/f2e/browser/index'},
            { text: '网络相关', link: '/f2e/network/tcp' },
        ]
    },
     {
        text: '源码阅读',
        items: [
            { text: '搭建开发流程', link: '/sourceCode/vue2/construction' },
            
           
        ]
    },
       {
        text: 'work',
        items: [
            { text: '常用工具/方法', link: '/workflow/utils/library' },
            { text: 'Node 相关', link: '/workflow/node/npm' },
            { text: '终端相关', link: '/workflow/terminal/zsh' }
        ]
    },
        {
        text: '提效工具',
        items: [
            { text: '软件推荐与配置', link: '/efficiency/software/cross-platform' },
            { text: '在线工具', link: '/efficiency/online-tools' },
        ]
    },
]

export default nav
