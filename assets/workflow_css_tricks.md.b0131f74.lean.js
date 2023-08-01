import{_ as s,v as a,b as n,R as l}from"./chunks/framework.af0f5d22.js";const C=JSON.parse('{"title":"CSS 奇淫技巧","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/css/tricks.md","filePath":"workflow/css/tricks.md","lastUpdated":1690859390000}'),e={name:"workflow/css/tricks.md"},t=l(`<h1 id="css-奇淫技巧" tabindex="-1">CSS 奇淫技巧 <a class="header-anchor" href="#css-奇淫技巧" aria-label="Permalink to &quot;CSS 奇淫技巧&quot;">​</a></h1><h2 id="识别-html-字符中的-n" tabindex="-1">识别 HTML 字符中的 \\n <a class="header-anchor" href="#识别-html-字符中的-n" aria-label="Permalink to &quot;识别 HTML 字符中的 \\n&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>white-space</code> 属性用于设置如何处理元素中的空白</p></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">white-space</span><span style="color:#A6ACCD;">: pre;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:center;">属性值</th><th style="text-align:center;">换行符</th><th style="text-align:center;">空格和制表符</th><th style="text-align:center;">文字换行</th></tr></thead><tbody><tr><td style="text-align:center;">normal</td><td style="text-align:center;">合并</td><td style="text-align:center;">合并</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;">nowrap</td><td style="text-align:center;">合并</td><td style="text-align:center;">合并</td><td style="text-align:center;">不换行</td></tr><tr><td style="text-align:center;">pre</td><td style="text-align:center;">保留</td><td style="text-align:center;">保留</td><td style="text-align:center;">不换行</td></tr><tr><td style="text-align:center;">pre-wrap</td><td style="text-align:center;">保留</td><td style="text-align:center;">保留</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;">pre-line</td><td style="text-align:center;">保留</td><td style="text-align:center;">合并</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;">break-spaces</td><td style="text-align:center;">保留</td><td style="text-align:center;">保留</td><td style="text-align:center;">换行</td></tr></tbody></table><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space" target="_blank" rel="noreferrer">MDN</a></p><h2 id="css-unicode-字符-实现换行" tabindex="-1">CSS(Unicode 字符) 实现换行 <a class="header-anchor" href="#css-unicode-字符-实现换行" aria-label="Permalink to &quot;CSS(Unicode 字符) 实现换行&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 <code>Unicode</code> 中，<code>0x000A</code> 字符是专门控制换行的。在 <code>CSS</code> 中，我们可以写为 <code>\\A</code> 或 <code>\\000A</code> 作为 <code>after</code> 伪元素的内容，并添加到指定元素中实现换行效果。</p></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">br</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">前端常用知识软件推荐</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">br</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">踩坑记录</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">各种兼容问题</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">br</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pre</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div><span class="br">前端常用知识软件推荐</span><span class="br">踩坑记录</span><span>各种兼容问题</span></div><p><a href="https://www.zhangxinxu.com/wordpress/2012/03/tip-css-multiline-display/" target="_blank" rel="noreferrer">使用 CSS(Unicode 字符)让 inline 水平元素换行</a></p><h2 id="网页置灰" tabindex="-1">网页置灰 <a class="header-anchor" href="#网页置灰" aria-label="Permalink to &quot;网页置灰&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">html</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">grayscale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-webkit-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">grayscale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-moz-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">grayscale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-ms-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">grayscale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-o-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">grayscale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 兼容 Firefox */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39;&gt;&lt;filter id=&#39;grayscale&#39;&gt;&lt;feColorMatrix type=&#39;matrix&#39; values=&#39;0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0&#39;/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 兼容 IE */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> progid:DXImageTransform.Microsoft.BasicImage(grayscale=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/*兼容 Chrome Safari Edge 等 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-webkit-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">grayscale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><a href="https://juejin.cn/post/6844904114053185544" target="_blank" rel="noreferrer">一段 css 让全站变灰</a><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter" target="_blank" rel="noreferrer">filter - CSS —— MDN</a></p>`,15),p=[t];function o(r,c,i,y,D,F){return a(),n("div",null,p)}const b=s(e,[["render",o]]);export{C as __pageData,b as default};
