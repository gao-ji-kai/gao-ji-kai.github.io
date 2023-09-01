import{_ as e,o as a,c as o,Q as l}from"./chunks/framework.01af844e.js";const i="/assets/page-rendering-isomorphism.1afe0a81.png",m=JSON.parse('{"title":"前端页面渲染方式","description":"","frontmatter":{},"headers":[],"relativePath":"f2e/concept/page-rendering.md","filePath":"f2e/concept/page-rendering.md"}'),t={name:"f2e/concept/page-rendering.md"},c=l('<h1 id="前端页面渲染方式" tabindex="-1">前端页面渲染方式 <a class="header-anchor" href="#前端页面渲染方式" aria-label="Permalink to &quot;前端页面渲染方式&quot;">​</a></h1><h2 id="csr-客户端渲染" tabindex="-1">CSR 客户端渲染 <a class="header-anchor" href="#csr-客户端渲染" aria-label="Permalink to &quot;CSR 客户端渲染&quot;">​</a></h2><blockquote><p><code>CSR</code> 客户端渲染（Client Side Rendering）</p></blockquote><p>客户端渲染是指浏览器在请求页面 <code>URL</code> 后，服务端直接返回一个空的静态 <code>HTML</code> 文件，这个 HTML 文件需要再加载 <code>JavaScript</code> 脚本和 <code>CSS</code> 样式表，浏览器加载和执行这些文件去动态改变 <code>DOM</code> 树的结构，使页面渲染成用户所需要的界面，这种动态渲染的方式就是客户端渲染 （CSR）</p><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li><strong>局部刷新</strong>：无需每次都进行完整页面请求</li><li><strong>懒加载</strong>：首次加载时可以只加载可视区域内的数据</li><li>丰富的站点交互</li><li>减轻服务器压力</li><li>前后端分离</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li>不利于 SEO</li><li><strong>首屏渲染慢</strong>：需要等待 <code>JavaScript</code> 脚本文件加载完毕后才开始渲染页面</li></ul><div class="tip custom-block"><p class="custom-block-title">SEO</p><p>SEO（Search Engine Optimization）：<strong>搜索引擎优化</strong>，利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。目的是让其在行业内占据领先地位，获得品牌收益。</p></div><h2 id="ssr-服务端渲染" tabindex="-1">SSR 服务端渲染 <a class="header-anchor" href="#ssr-服务端渲染" aria-label="Permalink to &quot;SSR 服务端渲染&quot;">​</a></h2><blockquote><p><code>SSR</code> 服务端渲染（Server Side Rendering）</p></blockquote><p>服务端渲染是指浏览器在请求页面 <code>URL</code> 时，服务端将我们需要的 <code>HTML</code> 文本组装好，并返回给浏览器，这个 <code>HTML</code> 文本被浏览器解析之后，不需要经过 <code>JavaScript</code> 脚本的下载过程，就能直接构建出我们所希望的 <code>DOM</code> 树并展示到页面中。这个服务端组装 <code>HTML</code> 的过程就叫做服务端渲染（SSR）</p><h3 id="优点-1" tabindex="-1">优点 <a class="header-anchor" href="#优点-1" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>有利于 SEO</li><li>首屏渲染快</li></ul><h3 id="缺点-1" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-1" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li>占用服务器资源</li><li>用户体验不好：新页面都需要在服务端重新渲染整个页面，不能局部渲染</li><li>模板维护成本高</li></ul><h2 id="同构渲染" tabindex="-1">同构渲染 <a class="header-anchor" href="#同构渲染" aria-label="Permalink to &quot;同构渲染&quot;">​</a></h2><p>同构渲染是一种现代化服务端渲染方案，实际上是将 <code>CSR</code> 客户端渲染和 <code>SSR</code> 服务端渲染的优势结合起来实现互补；<br> 其流程是先在 <code>Node.js</code> 中进行服务端渲染生成 <code>HTML</code>，然后通过客户端渲染接管页面交互</p><ul><li>同构：是指同一套代码可以<strong>同时运行在服务端和客户端</strong><ul><li>路由同构</li><li>数据同构</li><li>渲染同构</li></ul></li><li>脱水（<code>dehydrate</code>）：在服务端渲染直出 <code>HTML</code> 前将预取的数据注入到 <code>window</code> 中</li><li>注水（<code>hydrate</code>）：在客户端进行渲染前将 <code>window</code> 上绑定的数据传入到对应组件中</li></ul><p><img src="'+i+'" alt="同构渲染流程"></p><div class="tip custom-block"><p class="custom-block-title">为什么需要数据的脱水和注水？</p><p>保证服务端和客户端端渲染的组件具有相同的 <code>props</code> 和 <code>DOM</code> 结构</p></div><h3 id="优点-2" tabindex="-1">优点 <a class="header-anchor" href="#优点-2" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>有利于 SEO</li><li>首屏渲染快</li><li><strong>局部刷新</strong>：无需每次都进行完整页面请求</li></ul><h3 id="缺点-2" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-2" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li><code>Node</code> 服务的性能压力</li><li>服务端和浏览器环境的差异</li></ul><h3 id="开箱即用的-ssr-框架" tabindex="-1">开箱即用的 SSR 框架 <a class="header-anchor" href="#开箱即用的-ssr-框架" aria-label="Permalink to &quot;开箱即用的 SSR 框架&quot;">​</a></h3><ul><li><a href="https://github.com/vercel/next.js" target="_blank" rel="noreferrer">Next.js</a> <code>React</code> 应用开发框架</li><li><a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noreferrer">Nuxt.js</a> <code>Vue.js</code> 通用应用框架</li></ul><h2 id="ssg-静态站点生成" tabindex="-1">SSG 静态站点生成 <a class="header-anchor" href="#ssg-静态站点生成" aria-label="Permalink to &quot;SSG 静态站点生成&quot;">​</a></h2><blockquote><p><code>SSG</code> 静态网站生成（Static Site Generation）</p></blockquote><p>静态站点生成是指在构建时就会为每个页面生成包含内容的 <code>HTML</code> 文件，当浏览器在请求页面 <code>URL</code> 时，服务端直接返回 HTML 即可。</p><h3 id="优点-3" tabindex="-1">优点 <a class="header-anchor" href="#优点-3" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>有利于 SEO</li><li>首屏渲染快</li><li>减轻服务器压力</li></ul><h3 id="缺点-3" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-3" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li>每次更改内容时都需要重新构建和部署应用程序</li><li>无法生成用户相关内容</li></ul><div class="tip custom-block"><p class="custom-block-title">SSG 应用场景</p><p>SSG 适合应用在页面内容在构建时就能确定的场景</p><ul><li>静态官网</li><li>文档网站</li></ul></div>',35),r=[c];function d(s,n,h,u,p,S){return a(),o("div",null,r)}const g=e(t,[["render",d]]);export{m as __pageData,g as default};
