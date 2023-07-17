// theme
import mediumZoom from 'medium-zoom'
import { EnhanceAppContext, Theme, useRoute} from "vitepress";
import DefaultTheme from 'vitepress/theme'
import {nextTick, onMounted, watch} from "vue";
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import './search.css'
import './styles/index.scss'
import MNavLinks from './components/MNavLinks.vue'
import IFooter from './components/IFooter.vue'

const theme: Theme = {
    ...DefaultTheme,
    Layout: IFooter,
    enhanceApp({app, router }: EnhanceAppContext) {
        app.component('MNavLinks', MNavLinks)
        // 一定要在这里判断一下是否是在浏览器中，不然在我们打包项目的时候会报错
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
        // ...
    },
    setup() {
        const route = useRoute()
        const initZoom = () => {
            mediumZoom('.main img')
        }
        onMounted(() => {
            initZoom()
        })
        watch(
            () => route.path,
            () => nextTick(() => initZoom()),
             () => updateHomePageStyle(location.pathname === '/'),
            { immediate: true }
        )
    },
}

let homePageStyle: HTMLStyleElement | undefined
// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
export default theme