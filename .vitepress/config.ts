import { defineConfig, UserConfig } from 'vitepress'
import head from './config/head'
import nav from './config/nav'
import sidebar from './config/sidebar'
const pkg = require('../package.json')
const config: UserConfig = {
    title: '学习笔记',
    description: '一个前端工程师的自我修养',
    lang: 'zh-CN',
    lastUpdated: false,
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
                `<a style="color: #3eaf7c;" href="https://beian.miit.gov.cn" target="_blank">陇ICP备17000679号-2</a>`,
                `<img style="display: inline;" src="//forguo.cn/assets/imgs/copy.png"/>
                    <a style="color: #3eaf7c;" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=62040302000107">甘公网安备 62040302000107号</a>`,
                `<a target="_blank" href="https://github.com/gao-ji-kai">Copyright &copy; 2016 - ${new Date().getFullYear()} &nbsp;gaoter</a>`
        ]
    },
}
export default defineConfig(config)
