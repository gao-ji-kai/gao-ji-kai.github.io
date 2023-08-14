
import type { HeadConfig } from 'vitepress'
const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image',
        },
    ],
    [
        'meta',
        {
            name: 'theme-color',
            content: '#ffffff',
        },
    ],
    ['meta', { rel: 'referrer', href: `no-referrer` }],
    ['meta', { name: 'keywords', content: `keywords` }],
    ['meta', { name: 'description', content: `description` }],
    ['meta', { name: 'author', content: `author` }],
    ['meta', { name: 'baidu-site-verification', content: `` }],
    ['meta', { name: 'google-site-verification', content: `` }],
    ['link', { rel: 'manifest', href: `/manifest.json` }],
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          // 统计代码
          hm.src = "https://hm.baidu.com/hm.js?xxx";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
    `]
]

export default head
