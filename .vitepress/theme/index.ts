// theme
import mediumZoom from 'medium-zoom'
import { EnhanceAppContext, Theme, useRoute} from "vitepress";
import DefaultTheme from 'vitepress/theme'
import {nextTick, onMounted, watch} from "vue";
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import './search.css'
import IFooter from './components/IFooter.vue'
const theme: Theme = {
    ...DefaultTheme,
    Layout: IFooter,
    enhanceApp({ router }: EnhanceAppContext) {
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
            () => nextTick(() => initZoom())
        )
    },
}

export default theme