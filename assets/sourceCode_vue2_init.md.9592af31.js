import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.01af844e.js";const b=JSON.parse('{"title":"Vue2源码：Vue初始化🔥🔥","description":"","frontmatter":{},"headers":[],"relativePath":"sourceCode/vue2/init.md","filePath":"sourceCode/vue2/init.md"}'),l={name:"sourceCode/vue2/init.md"},o=p(`<h1 id="vue2源码-vue初始化🔥🔥" tabindex="-1">Vue2源码：Vue初始化🔥🔥 <a class="header-anchor" href="#vue2源码-vue初始化🔥🔥" aria-label="Permalink to &quot;Vue2源码：Vue初始化🔥🔥&quot;">​</a></h1><ul><li>init.js</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { compileToFunctions } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./compiler/index&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { callHook, mountComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./lifecycle&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { initState } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./state&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mergeOptions, nextTick } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./until/until&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initMixin</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">Vue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">_init</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(options);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// vm.$options = options; //在实例上有个属性$options 表示的是用户传入的所有属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm.$options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mergeOptions</span><span style="color:#E1E4E8;">(vm.</span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;">.options, options)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(vm.$options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;beforeCreate&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//初始化状态   可能初始化很多东西 逻辑很多  一个功能写一个方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initState</span><span style="color:#E1E4E8;">(vm);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (vm.$options.el) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//说明数据可以挂载到页面上</span></span>
<span class="line"><span style="color:#E1E4E8;">      vm.</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;">(vm.$options.el);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.$nextTick </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nextTick</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(el);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm.$options;</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm.$el </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el;</span><span style="color:#6A737D;">//id=&quot;app&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//如果有render直接使用render即可，没有render看有没有template属性，没有template就接着找外部模板</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">options.render) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> template </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.template;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">template </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> el) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        template </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.outerHTML; </span><span style="color:#6A737D;">//火狐不兼容 document.createElement(&#39;div&#39;).appendChild(&#39;app&#39;).innerHTML</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(template);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//如何将模板编译成render函数</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">render</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">compileToFunctions</span><span style="color:#E1E4E8;">(template); </span><span style="color:#6A737D;">//将模板编译成一个函数</span></span>
<span class="line"><span style="color:#E1E4E8;">      options.render </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> render;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mountComponent</span><span style="color:#E1E4E8;">(vm, el) </span><span style="color:#6A737D;">//组件挂载  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   Vue.prototype.$mount = function (el){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     el =document.querySelector(el);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     const vm =this;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     const options = vm.$options</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// //如果有render直接使用render即可，没有render看有没有template属性，没有template就接着找外部模板</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     if(!options.render){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       let template = options.template;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       if(!template &amp;&amp; el){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         template = el.outHTML</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       console.log(template)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { compileToFunctions } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./compiler/index&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { callHook, mountComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./lifecycle&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { initState } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./state&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mergeOptions, nextTick } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./until/until&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initMixin</span><span style="color:#24292E;">(</span><span style="color:#E36209;">Vue</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">_init</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(options);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// vm.$options = options; //在实例上有个属性$options 表示的是用户传入的所有属性</span></span>
<span class="line"><span style="color:#24292E;">    vm.$options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mergeOptions</span><span style="color:#24292E;">(vm.</span><span style="color:#005CC5;">constructor</span><span style="color:#24292E;">.options, options)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(vm.$options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">callHook</span><span style="color:#24292E;">(vm, </span><span style="color:#032F62;">&#39;beforeCreate&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//初始化状态   可能初始化很多东西 逻辑很多  一个功能写一个方法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initState</span><span style="color:#24292E;">(vm);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (vm.$options.el) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//说明数据可以挂载到页面上</span></span>
<span class="line"><span style="color:#24292E;">      vm.</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;">(vm.$options.el);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.$nextTick </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nextTick</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(el);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm.$options;</span></span>
<span class="line"><span style="color:#24292E;">    vm.$el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el;</span><span style="color:#6A737D;">//id=&quot;app&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//如果有render直接使用render即可，没有render看有没有template属性，没有template就接着找外部模板</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">options.render) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> template </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.template;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">template </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> el) {</span></span>
<span class="line"><span style="color:#24292E;">        template </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.outerHTML; </span><span style="color:#6A737D;">//火狐不兼容 document.createElement(&#39;div&#39;).appendChild(&#39;app&#39;).innerHTML</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(template);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//如何将模板编译成render函数</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">render</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">compileToFunctions</span><span style="color:#24292E;">(template); </span><span style="color:#6A737D;">//将模板编译成一个函数</span></span>
<span class="line"><span style="color:#24292E;">      options.render </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> render;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mountComponent</span><span style="color:#24292E;">(vm, el) </span><span style="color:#6A737D;">//组件挂载  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   Vue.prototype.$mount = function (el){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     el =document.querySelector(el);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     const vm =this;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     const options = vm.$options</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// //如果有render直接使用render即可，没有render看有没有template属性，没有template就接着找外部模板</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     if(!options.render){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       let template = options.template;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       if(!template &amp;&amp; el){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         template = el.outHTML</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       console.log(template)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><ul><li>state.js</li></ul><blockquote><p>initState(),对props,methods,data,computed,watch进行初始化</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { observe } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./observer/index.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//初始化状态函数中，主要是针对不同情况做不同的初始化。</span></span>
<span class="line"><span style="color:#6A737D;">//例如传入data，传入props，传入methods等等，需要分别初始化。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//vue的数据   data props computed  watch...</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initState</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//将所有数据都定义在vm属性上，并且后续更改需要触发视图更新</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//拿到用户定义的参数 如data methods等</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">opts</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm.$options; </span><span style="color:#6A737D;">//获取用户属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   if (opts.props) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   if (opts.methods) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   if (opts.data) {//数据的初始化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   if (opts.computed) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   if (opts.watch) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (opts.data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//数据的初始化</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">initData</span><span style="color:#E1E4E8;">(vm);</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">proxy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(vm, key, {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> vm[source][key];</span></span>
<span class="line"><span style="color:#E1E4E8;">   },</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newValue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">     vm[source][key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">   },</span></span>
<span class="line"><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//一层套一层  粒度会越来越小</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//console.log(vm);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//进行数据劫持  Object.defineProperty</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//拿到用户传来的数据</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm.$options.data; </span><span style="color:#6A737D;">//拿到的data有两种情况  一种是对象，一种是函数 根实例可以是对象，可以是函数，组件中data必须是函数</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//对data类型进行判断  如果是函数  获取函数返回值作为对象</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//用call是为了保证date中如果写了this  保证this永远指向当前的实例</span></span>
<span class="line"><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm._data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;function&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> data.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(vm) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//通过vm._data获取劫持后的数据，用户就可以拿到_data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//data = vm._data = typeof data === &quot;functions&quot; ? data.call(vm) : data;这样很麻烦   所以就需要代理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//将_data中的数据全部放到vm上</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> key </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">proxy</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;_data&#39;</span><span style="color:#E1E4E8;">, key); </span><span style="color:#6A737D;">//如果用户使用  vm.name 等价于 vm._data.name</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//观测这个数据    Vue响应式的核心方法</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { observe } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./observer/index.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//初始化状态函数中，主要是针对不同情况做不同的初始化。</span></span>
<span class="line"><span style="color:#6A737D;">//例如传入data，传入props，传入methods等等，需要分别初始化。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//vue的数据   data props computed  watch...</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initState</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vm</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//将所有数据都定义在vm属性上，并且后续更改需要触发视图更新</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//拿到用户定义的参数 如data methods等</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">opts</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm.$options; </span><span style="color:#6A737D;">//获取用户属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   if (opts.props) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   if (opts.methods) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   if (opts.data) {//数据的初始化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   if (opts.computed) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   if (opts.watch) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (opts.data) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//数据的初始化</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">initData</span><span style="color:#24292E;">(vm);</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">proxy</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vm</span><span style="color:#24292E;">, </span><span style="color:#E36209;">source</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(vm, key, {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> vm[source][key];</span></span>
<span class="line"><span style="color:#24292E;">   },</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newValue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">     vm[source][key] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newValue;</span></span>
<span class="line"><span style="color:#24292E;">   },</span></span>
<span class="line"><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//一层套一层  粒度会越来越小</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initData</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vm</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//console.log(vm);</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//进行数据劫持  Object.defineProperty</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//拿到用户传来的数据</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm.$options.data; </span><span style="color:#6A737D;">//拿到的data有两种情况  一种是对象，一种是函数 根实例可以是对象，可以是函数，组件中data必须是函数</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//对data类型进行判断  如果是函数  获取函数返回值作为对象</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//用call是为了保证date中如果写了this  保证this永远指向当前的实例</span></span>
<span class="line"><span style="color:#24292E;"> data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm._data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;function&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> data.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(vm) </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//通过vm._data获取劫持后的数据，用户就可以拿到_data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//data = vm._data = typeof data === &quot;functions&quot; ? data.call(vm) : data;这样很麻烦   所以就需要代理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//将_data中的数据全部放到vm上</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> data) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">proxy</span><span style="color:#24292E;">(vm, </span><span style="color:#032F62;">&#39;_data&#39;</span><span style="color:#24292E;">, key); </span><span style="color:#6A737D;">//如果用户使用  vm.name 等价于 vm._data.name</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//观测这个数据    Vue响应式的核心方法</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h2 id="vue初始化都做了什么" tabindex="-1">Vue初始化都做了什么 <a class="header-anchor" href="#vue初始化都做了什么" aria-label="Permalink to &quot;Vue初始化都做了什么&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">总结</p><ul><li><p>选项合并，处理组件的配置内容，将传入的options与构造函数本身的options进行合并(用户选项和系统默认的选项进行合并)</p></li><li><p>初始化vue实例生命周期相关的属性，定义了比如：root、parent、children、refs</p></li><li><p>初始化自定义组件事件的监听,若存在父监听事件,则添加到该实例上</p></li><li><p>初始化render渲染所需的slots、渲染函数等。其实就两件事：插槽的处理 和 $createElm的声明，也就是 render 函数中的 h 的声明</p></li><li><p>调用 beforeCreate 钩子函数，在这里就能看出一个组件在创建前和后分别做了哪些初始化</p></li><li><p>初始化注入数据，隔代传参时 先inject。作为一个组件，在要给后辈组件提供数据之前，需要先把祖辈传下来的数据注入进来</p></li><li><p>对props,methods,data,computed,watch进行初始化，包括响应式的处理</p></li><li><p>在把祖辈传下来的数据注入进来以后 再初始化provide</p></li><li><p>调用 created 钩子函数，初始化完成，可以执行挂载了</p></li><li><p>挂载到对应DOM元素上。如果组件构造函数设置了el选项，会自动挂载，所以就不用再手动调用$mount去挂载</p></li></ul></div>`,8),e=[o];function c(t,r,E,y,i,m){return n(),a("div",null,e)}const d=s(l,[["render",c]]);export{b as __pageData,d as default};
