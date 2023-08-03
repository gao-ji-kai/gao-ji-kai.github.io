import{_ as s,v as n,b as a,R as l}from"./chunks/framework.af0f5d22.js";const F=JSON.parse('{"title":"数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"f2e/javascript/types.md","filePath":"f2e/javascript/types.md","lastUpdated":1691042287000}'),o={name:"f2e/javascript/types.md"},e=l(`<h1 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>阅读<a href="https://www.ituring.com.cn/book/2472" target="_blank" rel="noreferrer">《JavaScript 高级程序设计（第 4 版）》</a>和各个大佬的文章所归纳的总结，<strong>如有异议按你的理解为主</strong></p></div><p><code>JavaScript</code> 中的数据类型分为基本数据类型和引用数据类型</p><h2 id="基本类型" tabindex="-1">基本类型 <a class="header-anchor" href="#基本类型" aria-label="Permalink to &quot;基本类型&quot;">​</a></h2><blockquote><p>注: 基本数据类型也可以叫原始数据类型</p></blockquote><p>在 <code>ES2020</code> 标准下的 <code>JavaScript</code> 一共有以下 7 种基本类型</p><ul><li><strong><code>undefined</code></strong> 未定义</li><li><strong><code>null</code></strong> 空指针</li><li><strong><code>boolean</code></strong> 布尔值</li><li><strong><code>string</code></strong> 字符串</li><li><strong><code>number</code></strong> 数值</li><li><strong><code>symbol</code></strong> 独一无二的值 (<a href="https://es6.ruanyifeng.com/#docs/symbol" target="_blank" rel="noreferrer">ES6 引入</a>)</li><li><strong><code>bigint</code></strong> 大整数 (<a href="https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">ES2020 引入</a>)</li></ul><div class="tip custom-block"><p class="custom-block-title">基本类型总结</p><ul><li>基本类型仅保存原始值，不存在属性和方法</li><li>基本类型存储在 <strong>栈内存</strong> 中</li><li>保存基本类型的变量是 <strong>按值 (by value) 访问</strong> 的，操作的就是存储在变量中的实际值</li><li>复制基本类型时会创建该值的第二个副本 (独立使用，互不干扰)</li></ul></div><div class="tip custom-block"><p class="custom-block-title">为什么原始值不存在属性和方法，但 &#39;hello world&#39;.toString() 可以正确执行</p><p>为了方便操作原始值 <code>ECMAScript</code> 提供了 3 种特殊的引用类型：<code>Boolean</code> <code>Number</code> <code>String</code>，每当用到某个原始值的方法或属性时，后台都会创建一个相应原始包装类型的对象，在执行完后再销毁这个包装对象</p></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 举个 🌰</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 在执行上面的代码时 \`JavaScript\` 都会执行以下 3 步</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. 创建一个 String 类型的实例</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. 调用实例上的特定方法或属性</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 3. 销毁刚刚创建的实例</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="引用类型" tabindex="-1">引用类型 <a class="header-anchor" href="#引用类型" aria-label="Permalink to &quot;引用类型&quot;">​</a></h2><p>在 <code>JavaScript</code> 中除了基本类型，其他的都是引用类型，常见的引用类型如下</p><ul><li><strong><code>Object</code></strong> 对象</li><li><strong><code>Array</code></strong> 数组</li><li><strong><code>Function</code></strong> 函数</li><li><strong><code>Date</code></strong> 日期与时间</li><li><strong><code>RegExp</code></strong> 正则表达式</li><li><strong><code>Set</code></strong> 类似于数组但成员的值都是唯一的 (<a href="https://es6.ruanyifeng.com/#docs/set-map#Set" target="_blank" rel="noreferrer">ES6 引入</a>)</li><li><strong><code>WeakSet</code></strong> (<a href="https://es6.ruanyifeng.com/#docs/set-map#WeakSet" target="_blank" rel="noreferrer">ES6 引入</a>)</li><li><strong><code>Map</code></strong> 类似于对象也是键值对的集合 (<a href="https://es6.ruanyifeng.com/#docs/set-map#Map" target="_blank" rel="noreferrer">ES6 引入</a>)</li><li><strong><code>WeakMap</code></strong> (<a href="https://es6.ruanyifeng.com/#docs/set-map#WeakMap" target="_blank" rel="noreferrer">ES6 引入</a>)</li></ul><div class="tip custom-block"><p class="custom-block-title">引用类型总结</p><ul><li>因为 <code>JavaScript</code> 不允许直接访问内存位置(不能直接操作对象所在的内存空间)，所以引用类型在 <strong>栈内存</strong> 中存储的是地址(内存指针)，而引用类型中的数据(方法或属性)是存储在 <strong>堆内存</strong> 中</li><li>保存引用类型的变量是 <strong>按引用 (by reference) 访问</strong> ，实际上操作的是对该对象的引用而非实际的对象本身</li><li>复制引用类型时只会复制内存指针</li></ul></div><div class="tip custom-block"><p class="custom-block-title">栈内存和堆内存</p><ul><li><strong>栈内存</strong><ul><li>存储基本数据类型和堆内存地址</li><li>是连续的内存空间</li></ul></li><li><strong>堆内存</strong><ul><li>存储引用数据类型和闭包中的变量</li><li>不是连续的内存空间</li></ul></li><li>了解更多请点击 <a href="https://github.com/chenqf/frontEndBlog/issues/9" target="_blank" rel="noreferrer">JS 中的栈内存和堆内存</a></li></ul></div><h2 id="类型判断" tabindex="-1">类型判断 <a class="header-anchor" href="#类型判断" aria-label="Permalink to &quot;类型判断&quot;">​</a></h2><p>常见的五种判断方式</p><ul><li><strong><code>typeof</code></strong></li><li><strong><code>instanceof</code></strong></li><li><strong><code>constructor</code></strong></li><li><strong><code>Array.isArray()</code></strong></li><li><strong><code>Object.prototype.toString</code></strong></li></ul><h3 id="typeof" tabindex="-1">typeof <a class="header-anchor" href="#typeof" aria-label="Permalink to &quot;typeof&quot;">​</a></h3><ul><li>除 <strong><code>null</code></strong> 外的基本类型都能准确判断</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// &#39;undefined&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;">// &#39;boolean&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gaoter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">// &#39;string&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2021</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;">// &#39;number&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">()         </span><span style="color:#676E95;font-style:italic;">// &#39;symbol&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BigInt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2021</span><span style="color:#A6ACCD;">)     </span><span style="color:#676E95;font-style:italic;">// &#39;bigint&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">为什么 typeof null === &#39;object&#39;</p><p>在 <code>JavaScript</code> 最初的实现中，<code>JavaScript</code> 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 <code>0</code>。由于 <code>null</code> 代表的是空指针（大多数平台下值为 <code>0x00</code>），因此<code>null</code> 的类型标签是 <code>0</code>，<code>typeof null</code> 也因此返回 <code>&quot;object&quot;</code> —— <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null" target="_blank" rel="noreferrer">MDN</a></p></div><ul><li>除 <strong><code>function</code></strong> 外的引用类型均返回 <code>object</code></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> []               </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">log      </span><span style="color:#676E95;font-style:italic;">// &#39;function&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()       </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RegExp</span><span style="color:#A6ACCD;">()     </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">()        </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">WeakSet</span><span style="color:#A6ACCD;">()    </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">()        </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">WeakMap</span><span style="color:#A6ACCD;">()    </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="instanceof" tabindex="-1">instanceof <a class="header-anchor" href="#instanceof" aria-label="Permalink to &quot;instanceof&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof" target="_blank" rel="noreferrer"><code>instanceof</code></a> 用于检测构造函数的 <code>prototype</code> 属性是否存在于实例对象的原型链上</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** 基本类型 */</span></span>
<span class="line"><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Boolean</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gaoter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Number</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 引用类型 */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gaoter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">p1 </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">p1 </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 修改原型，使 p1 不再是 Person 的实例</span></span>
<span class="line"><span style="color:#A6ACCD;">Reflect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPrototypeOf</span><span style="color:#A6ACCD;">(p1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// OR p1.__proto__ = Array.prototype</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">p1 </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">p1 </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">instanceof 总结</p><ul><li><code>instanceof</code> 不能判断基本类型，对于引用类型只能判断原型链上的从属关系</li><li><code>instanceof</code> 并不完全可靠，因为构造函数的 <code>prototype</code> 属性可能会被修改 <ul><li>修改原型的方法 <ul><li>使用 <code>ES6</code> 提供的 <a href="https://es6.ruanyifeng.com/?search=%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B&amp;x=0&amp;y=0#docs/reflect#Reflect-setPrototypeOfobj-newProto" target="_blank" rel="noreferrer"><code>Reflect.setPrototypeOf()</code></a> 方法</li><li>借助于非标准的 <code>__proto__</code> 伪属性</li></ul></li></ul></li></ul></div><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>实例对象可以通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor" target="_blank" rel="noreferrer"><code>constructor</code></a> 属性去访问它的构造函数</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** 基本类型 */</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Boolean            </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gaoter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> String           </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2021</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Number             </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Symbol           </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">BigInt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2021</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> BigInt       </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 引用类型 */</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Object               </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Array                </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Person   </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 修改原型造成 constructor 丢失</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Object   </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">constructor 总结</p><ul><li><code>constructor</code> 可以判断除 <code>undefined</code> 和 <code>null</code> 外的所有基本类型和引用类型(<code>undefined</code> 和 <code>null</code> 不存在构造函数)</li><li><code>constructor</code> 并不完全可靠，因为构造函数的 <code>prototype</code> 属性可能会被修改，从而造成 <code>constructor</code> 属性指向不准确</li></ul></div><h3 id="array-isarray" tabindex="-1">Array.isArray() <a class="header-anchor" href="#array-isarray" aria-label="Permalink to &quot;Array.isArray()&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" target="_blank" rel="noreferrer"><code>Array.isArray()</code></a> 用于判断一个值是否是数组 (<code>Array</code>)</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">([])   </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)   </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="object-prototype-tostring" tabindex="-1">Object.prototype.toString <a class="header-anchor" href="#object-prototype-tostring" aria-label="Permalink to &quot;Object.prototype.toString&quot;">​</a></h3><ul><li>每个对象都有一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" target="_blank" rel="noreferrer"><code>toString()</code></a> 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用，默认情况下 <code>toString()</code> 方法被每个 <code>Object</code> 对象继承。如果此方法在自定义对象中未被覆盖 <code>toString()</code> 返回 <code>&quot;[object type]&quot;</code> 其中 <code>type</code> 是对象的类型</li><li>为了每个对象都能通过 <code>Object.prototype.toString()</code> 来检测，需要以 <code>Function.prototype.call()</code> 或者 <code>Function.prototype.apply()</code> 的形式来调用</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> toString </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)        </span><span style="color:#676E95;font-style:italic;">// &#39;[object Undefined]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)             </span><span style="color:#676E95;font-style:italic;">// &#39;[object Null]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)             </span><span style="color:#676E95;font-style:italic;">// &#39;[object Boolean]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gaoter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)         </span><span style="color:#676E95;font-style:italic;">// &#39;[object String]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2021</span><span style="color:#A6ACCD;">)             </span><span style="color:#676E95;font-style:italic;">// &#39;[object Number]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">())         </span><span style="color:#676E95;font-style:italic;">// &#39;[object Symbol]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">BigInt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2021</span><span style="color:#A6ACCD;">))     </span><span style="color:#676E95;font-style:italic;">// &#39;[object BigInt]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)               </span><span style="color:#676E95;font-style:italic;">// &#39;[object Object]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">([])               </span><span style="color:#676E95;font-style:italic;">// &#39;[object Array]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">log)      </span><span style="color:#676E95;font-style:italic;">// &#39;[object Function]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">())       </span><span style="color:#676E95;font-style:italic;">// &#39;[object Date]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RegExp</span><span style="color:#A6ACCD;">())     </span><span style="color:#676E95;font-style:italic;">// &#39;[object RegExp]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">())        </span><span style="color:#676E95;font-style:italic;">// &#39;[object Set]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">WeakSet</span><span style="color:#A6ACCD;">())    </span><span style="color:#676E95;font-style:italic;">// &#39;[object WeakSet]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">())        </span><span style="color:#676E95;font-style:italic;">// &#39;[object Map]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">WeakMap</span><span style="color:#A6ACCD;">())    </span><span style="color:#676E95;font-style:italic;">// &#39;[object WeakMap]&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><code>toString</code> 方法的在 <a href="https://es5.github.io/#x15.2.4.2" target="_blank" rel="noreferrer"><code>ECMAScript 5</code></a> 下的大致执行过程</p><ol><li>如果 <code>this</code> 是 <code>undefined</code> 返回 <code>[object Undefined]</code></li><li>如果 <code>this</code> 是 <code>null</code> 返回 <code>[object Null]</code></li><li>让 <code>O</code> 成为 <code>ToObject(this)</code> 的结果</li><li>让 <code>class</code> 成为 <code>O</code> 的内部属性 <code>[[Class]]</code> 的值</li><li>返回由 <strong><code>&quot;[object &quot;</code></strong> <strong><code>class</code></strong> <strong><code>&quot;]&quot;</code></strong> 三个部分组成的字符串</li></ol><div class="warning custom-block"><p class="custom-block-title">注意点</p><p>不同 <code>ECMAScript</code> 版本对 <code>toString</code> 方法的规范都有所不同</p><p><a href="https://juejin.cn/post/6972878737582850062#heading-27" target="_blank" rel="noreferrer">Object.prototype.toString 方法的原理</a></p></div>`,41),p=[e];function t(c,r,i,y,A,D){return n(),a("div",null,p)}const b=s(o,[["render",t]]);export{F as __pageData,b as default};