/**
 * 右上角导航
 */
const pkg = require('../../package.json')

const nav = [
    {
        text: "博文",
        link: "/f2e/知识体系",
        activeMatch: '/f2e/'
    },
    {
        text: '关于',
        items: [
            {text: '笔记', link: `${pkg.homepage}`},
            {text: 'CSDN', link: 'https://blog.csdn.net/weiguo19951107'},
            {text: '组件库', link: 'https://wei-design.github.io/web-vue/'},
        ]
    },
]

export default nav
