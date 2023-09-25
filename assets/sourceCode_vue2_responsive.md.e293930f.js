import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fd95ed2e.js";const F=JSON.parse('{"title":"Vue源码：数据响应式原理🔥🔥","description":"","frontmatter":{},"headers":[],"relativePath":"sourceCode/vue2/responsive.md","filePath":"sourceCode/vue2/responsive.md"}'),p={name:"sourceCode/vue2/responsive.md"},o=l(`<h1 id="vue源码-数据响应式原理🔥🔥" tabindex="-1">Vue源码：数据响应式原理🔥🔥 <a class="header-anchor" href="#vue源码-数据响应式原理🔥🔥" aria-label="Permalink to &quot;Vue源码：数据响应式原理🔥🔥&quot;">​</a></h1><blockquote><p>MVVM框架的三要素：数据响应式、模板引擎及其渲染。</p><blockquote><p>因此数据响应式是MVVM框架的一个特性，所有的MVVM框架都需要做数据响应式，只是各自的策略不一样。Angular是它的脏检测机制，React是有明确的一些api可以供开发者调用，Vue则是一种被动检测，其特点就是利用Object.defineProperty()，通过定义对象属性getter/setter拦截对属性的获取和设置。</p></blockquote></blockquote><h2 id="observe" tabindex="-1">observe() <a class="header-anchor" href="#observe" aria-label="Permalink to &quot;observe()&quot;">​</a></h2><blockquote><p>处理响应式的入口</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//console.log(data, &quot;----------&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//只对对象类型进行观测，非对象类型无法观测</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;object&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (data.__obj__) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//入果有__obj__就说明该属性被观测过了  就直接返回  防止循环引用</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//通过类来实现对数据的观测   类可以方便扩展  会产生实例  实例可作为唯一标识</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Observer</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//console.log(data, &quot;----------&quot;);</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//只对对象类型进行观测，非对象类型无法观测</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;object&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (data.__obj__) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//入果有__obj__就说明该属性被观测过了  就直接返回  防止循环引用</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//通过类来实现对数据的观测   类可以方便扩展  会产生实例  实例可作为唯一标识</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Observer</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="observer观察者" tabindex="-1">Observer观察者 <a class="header-anchor" href="#observer观察者" aria-label="Permalink to &quot;Observer观察者&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Observer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//需要对val属性重新定义</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//value可能是对象 可能是数组，分类处理    数组不用defineProperty拦截</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//增加一个自定义属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//value.__ob__=this;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dep </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Dep</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">//给数组本身和对象本身增加一个dep属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(value, </span><span style="color:#9ECBFF;">&quot;__ob__&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enumerable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//不能被枚举 表示  不能被循环</span></span>
<span class="line"><span style="color:#E1E4E8;">      configurable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//不能删除此属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(value)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//数组不用defineProperty拦截  性能不好</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//操作数组方法  push  shift  sort   我需要重写这些方法(一共7个)  增加更新逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//当是数组时  改写方法为自己重写后的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">      Object.</span><span style="color:#B392F0;">setPrototypeOf</span><span style="color:#E1E4E8;">(value, arrayMethods); </span><span style="color:#6A737D;">// 等价于value._proto_ = arrayMethods;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//观测数组中的每一项</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">observeArray</span><span style="color:#E1E4E8;">(value); </span><span style="color:#6A737D;">//处理原有数组中的对象  Object.freeze()冻结  冻结就不能被重写get和set了</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">walk</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//监测数组变化</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">observeArray</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//拿到数组每一项</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> value.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span><span style="color:#6A737D;">//如果数组中是对象的话  就会去递归观测  观测对的时候会增加__ob__属性</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(value[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//监测对象变化，类方便拓展 可直接在下面写方法 无需拆分 还是一个整体</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">walk</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//将对象中所有的key 重新用defineProperty定义成响应式数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(data).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">defineReactive</span><span style="color:#E1E4E8;">(data, key, data[key]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Observer</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//需要对val属性重新定义</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//value可能是对象 可能是数组，分类处理    数组不用defineProperty拦截</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//增加一个自定义属性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//value.__ob__=this;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dep </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dep</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">//给数组本身和对象本身增加一个dep属性</span></span>
<span class="line"><span style="color:#24292E;">    Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(value, </span><span style="color:#032F62;">&quot;__ob__&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      enumerable: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//不能被枚举 表示  不能被循环</span></span>
<span class="line"><span style="color:#24292E;">      configurable: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//不能删除此属性</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(value)) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//数组不用defineProperty拦截  性能不好</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//操作数组方法  push  shift  sort   我需要重写这些方法(一共7个)  增加更新逻辑</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//当是数组时  改写方法为自己重写后的方法</span></span>
<span class="line"><span style="color:#24292E;">      Object.</span><span style="color:#6F42C1;">setPrototypeOf</span><span style="color:#24292E;">(value, arrayMethods); </span><span style="color:#6A737D;">// 等价于value._proto_ = arrayMethods;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//观测数组中的每一项</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">observeArray</span><span style="color:#24292E;">(value); </span><span style="color:#6A737D;">//处理原有数组中的对象  Object.freeze()冻结  冻结就不能被重写get和set了</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">walk</span><span style="color:#24292E;">(value);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//监测数组变化</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">observeArray</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//拿到数组每一项</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> value.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span><span style="color:#6A737D;">//如果数组中是对象的话  就会去递归观测  观测对的时候会增加__ob__属性</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(value[i]);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//监测对象变化，类方便拓展 可直接在下面写方法 无需拆分 还是一个整体</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">walk</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//将对象中所有的key 重新用defineProperty定义成响应式数据</span></span>
<span class="line"><span style="color:#24292E;">    Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(data).</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">defineReactive</span><span style="color:#24292E;">(data, key, data[key]);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="数组的响应式处理-array-js" tabindex="-1">数组的响应式处理 array.js <a class="header-anchor" href="#数组的响应式处理-array-js" aria-label="Permalink to &quot;数组的响应式处理 array.js&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">//首先  我需要拿到原来数组原型上的方法  天生自带的方法</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> oldArrayProtoMethods </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//不能直接改写数组原有方法  不可靠  因为只有在vue data中定义的数组才需要改写</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//创建一个元素  让他指向原型   继承关系</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> arrayMethods </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//因为他指向数组原型链 所以 就可以拿到原型链上的方法</span></span>
<span class="line"><span style="color:#6A737D;">//arrayMethods.push===arrayMethods._proto_.push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//对数组方法进行重写  一般对改变原数组的操作进行重写</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> methods </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;push&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;pop&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;shift&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;unshift&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;splice&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;reverse&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;sort&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#6A737D;">//如果用户调用arrayMethods.push方法，会调取我重写后的 也就是下面这一坨</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">methods.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">methods</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span><span style="color:#6A737D;">//AOP切片编程   把原有的逻辑 割一刀 插入自己的逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">  arrayMethods[methods] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span><span style="color:#6A737D;">//重写数组方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//做些自己的事儿 </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;数组变化&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> oldArrayProtoMethods[methods].</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args);</span><span style="color:#6A737D;">//这里的this指向arrayMethods</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//有可能用户后增加的数据是对象格式，也需要进项拦截</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//做个判断  只对数组增加的方法进行判断</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> inserted;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> ob</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.__ob__;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (methods) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;push&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unshift&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            inserted</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">args;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;splice&#39;</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//splice(0,1,xxxx) </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//因为splice方法第三个才是新增的   </span></span>
<span class="line"><span style="color:#E1E4E8;">            inserted</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">args.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(inserted){</span><span style="color:#6A737D;">//如果有值 都需要调observeArray()  这里的this指向调用者 this.__ob__.observeArray(inserted) </span></span>
<span class="line"><span style="color:#E1E4E8;">       ob.</span><span style="color:#B392F0;">observeArray</span><span style="color:#E1E4E8;">(inserted)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ob.dep.</span><span style="color:#B392F0;">notify</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">//首先  我需要拿到原来数组原型上的方法  天生自带的方法</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> oldArrayProtoMethods </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//不能直接改写数组原有方法  不可靠  因为只有在vue data中定义的数组才需要改写</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//创建一个元素  让他指向原型   继承关系</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arrayMethods </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//因为他指向数组原型链 所以 就可以拿到原型链上的方法</span></span>
<span class="line"><span style="color:#6A737D;">//arrayMethods.push===arrayMethods._proto_.push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//对数组方法进行重写  一般对改变原数组的操作进行重写</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> methods </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;push&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;pop&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;shift&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;unshift&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;splice&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;reverse&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;sort&quot;</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#6A737D;">//如果用户调用arrayMethods.push方法，会调取我重写后的 也就是下面这一坨</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">methods.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">methods</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span><span style="color:#6A737D;">//AOP切片编程   把原有的逻辑 割一刀 插入自己的逻辑</span></span>
<span class="line"><span style="color:#24292E;">  arrayMethods[methods] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span><span style="color:#6A737D;">//重写数组方法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//做些自己的事儿 </span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;数组变化&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> oldArrayProtoMethods[methods].</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args);</span><span style="color:#6A737D;">//这里的this指向arrayMethods</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//有可能用户后增加的数据是对象格式，也需要进项拦截</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//做个判断  只对数组增加的方法进行判断</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> inserted;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> ob</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.__ob__;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (methods) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;push&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unshift&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            inserted</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">args;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;splice&#39;</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//splice(0,1,xxxx) </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//因为splice方法第三个才是新增的   </span></span>
<span class="line"><span style="color:#24292E;">            inserted</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">args.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(inserted){</span><span style="color:#6A737D;">//如果有值 都需要调observeArray()  这里的this指向调用者 this.__ob__.observeArray(inserted) </span></span>
<span class="line"><span style="color:#24292E;">       ob.</span><span style="color:#6F42C1;">observeArray</span><span style="color:#24292E;">(inserted)</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      ob.dep.</span><span style="color:#6F42C1;">notify</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="对象的响应式处理-definereactive" tabindex="-1">对象的响应式处理：defineReactive <a class="header-anchor" href="#对象的响应式处理-definereactive" aria-label="Permalink to &quot;对象的响应式处理：defineReactive&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineReactive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(value,</span><span style="color:#9ECBFF;">&#39;444&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//vue2中数据嵌套不要过深，过深浪费性能</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//value的值可能是个对象</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> childOb</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(value); </span><span style="color:#6A737D;">//对结果进行递归拦截</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//console.log(childOb.dep)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//defineProperty是重写了get，set方法，而proxy是设置一个代理  不用改写原对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dep </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Dep</span><span style="color:#6A737D;">//观察者模式  每次都会给属性创建个dep</span></span>
<span class="line"><span style="color:#E1E4E8;">  Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(data, key, {</span><span style="color:#6A737D;">//需要给每个属性都增加个dep</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (Dep.target) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dep.</span><span style="color:#B392F0;">depend</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">//让这个属性自己的dep记住这个watcher  也会让watcher记住这个dep   一个双向的过程</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//childOb有可能是对象  有可能是数组</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (childOb) {</span><span style="color:#6A737D;">//如果对数组取值 会将当前的watcher和数组进行关联</span></span>
<span class="line"><span style="color:#E1E4E8;">          childOb.dep.</span><span style="color:#B392F0;">depend</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(value)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">dependArray</span><span style="color:#E1E4E8;">(value)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newValue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (newValue </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> value) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(value); </span><span style="color:#6A737D;">//如果用户设置的是一个对象，就继续将用户设置的对象变为响应式的</span></span>
<span class="line"><span style="color:#E1E4E8;">      value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newValue;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      dep.</span><span style="color:#B392F0;">notify</span><span style="color:#E1E4E8;">()</span><span style="color:#6A737D;">//通知dep中记录的watcher让它去执行</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineReactive</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(value,</span><span style="color:#032F62;">&#39;444&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//vue2中数据嵌套不要过深，过深浪费性能</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//value的值可能是个对象</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> childOb</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(value); </span><span style="color:#6A737D;">//对结果进行递归拦截</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//console.log(childOb.dep)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//defineProperty是重写了get，set方法，而proxy是设置一个代理  不用改写原对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dep </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Dep</span><span style="color:#6A737D;">//观察者模式  每次都会给属性创建个dep</span></span>
<span class="line"><span style="color:#24292E;">  Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(data, key, {</span><span style="color:#6A737D;">//需要给每个属性都增加个dep</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Dep.target) {</span></span>
<span class="line"><span style="color:#24292E;">        dep.</span><span style="color:#6F42C1;">depend</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">//让这个属性自己的dep记住这个watcher  也会让watcher记住这个dep   一个双向的过程</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//childOb有可能是对象  有可能是数组</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (childOb) {</span><span style="color:#6A737D;">//如果对数组取值 会将当前的watcher和数组进行关联</span></span>
<span class="line"><span style="color:#24292E;">          childOb.dep.</span><span style="color:#6F42C1;">depend</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(value)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">dependArray</span><span style="color:#24292E;">(value)</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      } </span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newValue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (newValue </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> value) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(value); </span><span style="color:#6A737D;">//如果用户设置的是一个对象，就继续将用户设置的对象变为响应式的</span></span>
<span class="line"><span style="color:#24292E;">      value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newValue;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      dep.</span><span style="color:#6F42C1;">notify</span><span style="color:#24292E;">()</span><span style="color:#6A737D;">//通知dep中记录的watcher让它去执行</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="dep" tabindex="-1">dep <a class="header-anchor" href="#dep" aria-label="Permalink to &quot;dep&quot;">​</a></h2><blockquote><p>Dep在数据响应式中扮演的角色就是数据的依赖收集和变更通知</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//我们可以把当前watcher 放到一个全局变量上</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">//为了保持dep的唯一性</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Dep</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> id</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.subs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span><span style="color:#6A737D;">//属性要记住watcher</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">depend</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">//让watcher记住dep</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">//获取watcher</span></span>
<span class="line"><span style="color:#E1E4E8;">       Dep.target.</span><span style="color:#B392F0;">addDep</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//这里的this指的是Dep  name=&gt;watcher  </span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//让dep记住watcher  </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">addSub</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">watcher</span><span style="color:#E1E4E8;">) {</span><span style="color:#6A737D;">//存储watcher</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(watcher)</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">notify</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.subs.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">watcher</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> watcher.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">Dep.target </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">//类的静态属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//收集依赖</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pushTarget</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">watcher</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   Dep.watcher </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> watcher</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">popTarget</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">   Dep.target </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> Dep;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//我们可以把当前watcher 放到一个全局变量上</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">//为了保持dep的唯一性</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dep</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> id</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.subs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span><span style="color:#6A737D;">//属性要记住watcher</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">depend</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">//让watcher记住dep</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">//获取watcher</span></span>
<span class="line"><span style="color:#24292E;">       Dep.target.</span><span style="color:#6F42C1;">addDep</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//这里的this指的是Dep  name=&gt;watcher  </span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//让dep记住watcher  </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">addSub</span><span style="color:#24292E;">(</span><span style="color:#E36209;">watcher</span><span style="color:#24292E;">) {</span><span style="color:#6A737D;">//存储watcher</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.subs.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(watcher)</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">notify</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.subs.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">watcher</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> watcher.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">Dep.target </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">//类的静态属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//收集依赖</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pushTarget</span><span style="color:#24292E;">(</span><span style="color:#E36209;">watcher</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   Dep.watcher </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> watcher</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">popTarget</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">   Dep.target </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> Dep;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="watcher" tabindex="-1">watcher <a class="header-anchor" href="#watcher" aria-label="Permalink to &quot;watcher&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { popTarget, pushTarget } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./dep&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { queueWatcher } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./schedular&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//每个组件间有多个watcher  所以需要加一个唯一标识  </span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Watcher</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">exprOrFn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.vm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.cb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cb;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> id</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.getter </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> exprOrFn</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.drps </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.depsId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">//去重  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">//调用传入的函数 调用了render方法  此时会对模板中的数据进行取值</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {</span><span style="color:#6A737D;">//这个方法中会对属性进行取值操作</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">pushTarget</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">// 给Dep.target赋了值 =watcher</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getter</span><span style="color:#E1E4E8;">()</span><span style="color:#6A737D;">//会取值  执行了observer中index.js中的54行 </span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">popTarget</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">//Dep.target = null;</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">addDep</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dep</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dep.id;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.depsId.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(id)) {</span><span style="color:#6A737D;">//dep是非重复的</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.depsId.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(id)</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.deps.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(dep)</span></span>
<span class="line"><span style="color:#E1E4E8;">           dep.</span><span style="color:#B392F0;">addSub</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">       }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">() {</span><span style="color:#6A737D;">//如果多次更改，我希望合并一次  (可以看成防抖)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// this.get()//不停地重新渲染</span></span>
<span class="line"><span style="color:#E1E4E8;">       console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//此处this指向watcher</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">queueWatcher</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//此时可能有重复的</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//当属性取值时  需要记住这个watcher，稍后变化了  去执行自己记住的watcher即可     依赖收集</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> Watcher;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { popTarget, pushTarget } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./dep&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { queueWatcher } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./schedular&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//每个组件间有多个watcher  所以需要加一个唯一标识  </span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Watcher</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vm</span><span style="color:#24292E;">, </span><span style="color:#E36209;">exprOrFn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cb</span><span style="color:#24292E;">, </span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.vm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.cb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cb;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> id</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.getter </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> exprOrFn</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.drps </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.depsId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">//去重  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">//调用传入的函数 调用了render方法  此时会对模板中的数据进行取值</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {</span><span style="color:#6A737D;">//这个方法中会对属性进行取值操作</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">pushTarget</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">// 给Dep.target赋了值 =watcher</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getter</span><span style="color:#24292E;">()</span><span style="color:#6A737D;">//会取值  执行了observer中index.js中的54行 </span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">popTarget</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">//Dep.target = null;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">addDep</span><span style="color:#24292E;">(</span><span style="color:#E36209;">dep</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dep.id;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.depsId.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(id)) {</span><span style="color:#6A737D;">//dep是非重复的</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.depsId.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(id)</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.deps.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(dep)</span></span>
<span class="line"><span style="color:#24292E;">           dep.</span><span style="color:#6F42C1;">addSub</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">       }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">() {</span><span style="color:#6A737D;">//如果多次更改，我希望合并一次  (可以看成防抖)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// this.get()//不停地重新渲染</span></span>
<span class="line"><span style="color:#24292E;">       console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//此处this指向watcher</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">queueWatcher</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//此时可能有重复的</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//当属性取值时  需要记住这个watcher，稍后变化了  去执行自己记住的watcher即可     依赖收集</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> Watcher;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="queuewatcher" tabindex="-1">queueWatcher <a class="header-anchor" href="#queuewatcher" aria-label="Permalink to &quot;queueWatcher&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { nextTick } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../until/until&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> has </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> queue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flushSchedularQueue</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> queue.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> watcher </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue[i]</span></span>
<span class="line"><span style="color:#E1E4E8;">        watcher.</span><span style="color:#B392F0;">run</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    has </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    pending </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//vue更新操作是异步操作</span></span>
<span class="line"><span style="color:#6A737D;">//多次调用queueWatcher 如果watcher不是同一个</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> pending </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">queueWatcher</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">watcher</span><span style="color:#E1E4E8;">) {</span><span style="color:#6A737D;">//调度更新几次</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//更新时将watcher去重</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> watcher.id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (has[id] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        queue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(watcher);</span></span>
<span class="line"><span style="color:#E1E4E8;">        has[id] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(queue);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//让queue清空</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">pending) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pending </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(flushSchedularQueue);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { nextTick } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../until/until&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> has </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flushSchedularQueue</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> queue.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> watcher </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue[i]</span></span>
<span class="line"><span style="color:#24292E;">        watcher.</span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    has </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    pending </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//vue更新操作是异步操作</span></span>
<span class="line"><span style="color:#6A737D;">//多次调用queueWatcher 如果watcher不是同一个</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> pending </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">queueWatcher</span><span style="color:#24292E;">(</span><span style="color:#E36209;">watcher</span><span style="color:#24292E;">) {</span><span style="color:#6A737D;">//调度更新几次</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//更新时将watcher去重</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> watcher.id;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (has[id] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(watcher);</span></span>
<span class="line"><span style="color:#24292E;">        has[id] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(queue);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//让queue清空</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">pending) {</span></span>
<span class="line"><span style="color:#24292E;">            pending </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(flushSchedularQueue);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="数据响应式原理" tabindex="-1">数据响应式原理 <a class="header-anchor" href="#数据响应式原理" aria-label="Permalink to &quot;数据响应式原理&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">总结</p><ul><li>Vue的数据响应式原理其核心就是通过Object.defineProperty来拦截对数据的获取和设置 <ul><li>Vue的响应式数据分为两类：对象和数组 <ul><li>对象 <ul><li>遍历对象的所有属性，并为每个属性设置getter和setter，以便将来的获取和设置，如果属性的值也是对象，则递归为属性值上的每个key设置getter和setter</li><li>获取数据时：在dep中添加相关的watcher</li><li>设置数据时：再由dep通知相关的watcher去更新</li></ul></li><li>数组 <ul><li>覆盖了原有的7个改变了原数组的方法，并克隆了一份，然后在克隆的这一份上更改自身的原型方法，然后拦截对这些方法的操作</li><li>添加新数据时：需要进行数据响应式的处理，再由dep通知watcher去更新</li><li>删除数据时：也要由dep通知watcher去更新</li></ul></li></ul></li></ul></li></ul></div>`,20),e=[o];function c(r,t,E,y,i,b){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
