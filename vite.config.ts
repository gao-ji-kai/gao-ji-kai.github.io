import { defineConfig, loadEnv } from "vite";
import Inspect from 'vite-plugin-inspect'
// jsx语法
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig(async (configEnv) => {
    const { mode } = configEnv
    const env = loadEnv(mode, process.cwd())
    // 增加环境变量
    return {
        server: {
            open: false,
            port: 5001,
            host: true,
            hmr: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        },
        define: {
            'process.env': JSON.stringify(env)
        },
        plugins: [
            vueJsx(),
            DefineOptions(),
            Inspect(),
        ],
    }
})
