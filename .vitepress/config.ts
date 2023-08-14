import { defineConfig, UserConfig } from 'vitepress'
import head from './config/head'
import nav from './config/nav'
import sidebar from './config/sidebar'
const pkg = require('../package.json')
const config: UserConfig = {
    title: '学习笔记',
    description: '一个前端工程师的自我修养',
    lang: 'zh-CN',
    lastUpdated: true,
    ignoreDeadLinks: true,
    markdown: {
        lineNumbers: true,
    },
    head: head,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config#outline
        outline: 'deep', // [2. 6]
        author: pkg.author,
        // 顶部导航
        nav: nav,
        // 侧边栏
        sidebar: sidebar,
        siteTitle: '学习笔记',
        lastUpdated: 'Last Updated',
        logo: '/favicon.ico',
        logoSmall: '/favicon.ico',
        editLink: {
            pattern: `${pkg.homepage}/edit/master/:path`,
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/gao-ji-kai' }
        ],
        search: {
            provider: 'local',
        },
        footers: [
                `<a target="_blank" href="https://github.com/gao-ji-kai">Copyright &copy; 2016 - ${new Date().getFullYear()} &nbsp;gaoter</a>`
        ]
    },
}
export default defineConfig(config)
