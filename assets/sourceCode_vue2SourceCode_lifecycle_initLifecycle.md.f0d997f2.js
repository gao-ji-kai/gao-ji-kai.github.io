import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.9dc859f3.js";const b=JSON.parse('{"title":"初始化阶段(initLifecycle)","description":"","frontmatter":{"title":"初始化阶段(initLifecycle)"},"headers":[],"relativePath":"sourceCode/vue2SourceCode/lifecycle/initLifecycle.md","filePath":"sourceCode/vue2SourceCode/lifecycle/initLifecycle.md"}'),l={name:"sourceCode/vue2SourceCode/lifecycle/initLifecycle.md"},e=p(`<h2 id="_1-前言" tabindex="-1">1. 前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1. 前言&quot;">​</a></h2><p>在上篇文章中，我们介绍了生命周期初始化阶段的整体工作流程，以及在该阶段都做了哪些事情。我们知道了，在该阶段会调用一些初始化函数，对<code>Vue</code>实例的属性、数据等进行初始化工作。那这些初始化函数都初始化了哪些东西以及都怎么初始化的呢？接下来我们就把这些初始化函数一一展开介绍，本篇文章介绍第一个初始化函数<code>initLifecycle</code>。</p><h2 id="_2-initlifecycle函数分析" tabindex="-1">2. initLifecycle函数分析 <a class="header-anchor" href="#_2-initlifecycle函数分析" aria-label="Permalink to &quot;2. initLifecycle函数分析&quot;">​</a></h2><p><code>initLifecycle</code>函数的定义位于源码的<code>src/core/instance/lifecycle.js</code>中，其代码如下：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initLifecycle</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">vm</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vm.$options</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// locate first non-abstract parent</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.parent</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (parent </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">options.abstract) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (parent.$options.abstract </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> parent.$parent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent.$parent</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent.$children.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  vm.$parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm.$root </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> parent.$root </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> vm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  vm.$children </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm.$refs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  vm._watcher </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm._inactive </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm._directInactive </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm._isMounted </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm._isDestroyed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  vm._isBeingDestroyed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initLifecycle</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">vm</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vm.$options</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// locate first non-abstract parent</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.parent</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (parent </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">options.abstract) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (parent.$options.abstract </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> parent.$parent) {</span></span>
<span class="line"><span style="color:#24292E;">      parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent.$parent</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    parent.$children.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(vm)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  vm.$parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent</span></span>
<span class="line"><span style="color:#24292E;">  vm.$root </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> parent.$root </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> vm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  vm.$children </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">  vm.$refs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  vm._watcher </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">  vm._inactive </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">  vm._directInactive </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  vm._isMounted </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  vm._isDestroyed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  vm._isBeingDestroyed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>可以看到，<code>initLifecycle</code>函数的代码量并不多，逻辑也不复杂。其主要是给<code>Vue</code>实例上挂载了一些属性并设置了默认值，值得一提的是挂载<code>$parent</code> 属性和<code>$root</code>属性， 下面我们就来逐个分析。</p><p>首先是给实例上挂载<code>$parent</code>属性，这个属性有点意思，我们先来看看代码：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.parent</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (parent </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">options.abstract) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (parent.$options.abstract </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> parent.$parent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent.$parent</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  parent.$children.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">vm.$parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.parent</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (parent </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">options.abstract) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (parent.$options.abstract </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> parent.$parent) {</span></span>
<span class="line"><span style="color:#24292E;">    parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent.$parent</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  parent.$children.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(vm)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">vm.$parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>从代码中可以看到，逻辑是这样子的：如果当前组件不是抽象组件并且存在父级，那么就通过<code>while</code>循环来向上循环，如果当前组件的父级是抽象组件并且也存在父级，那就继续向上查找当前组件父级的父级，直到找到第一个不是抽象类型的父级时，将其赋值<code>vm.$parent</code>，同时把该实例自身添加进找到的父级的<code>$children</code>属性中。这样就确保了在子组件的<code>$parent</code>属性上能访问到父组件实例，在父组件的<code>$children</code>属性上也能访问子组件的实例。</p><p>接着是给实例上挂载<code>$root</code>属性，如下：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">vm.$root </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> parent.$root </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> vm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">vm.$root </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> parent.$root </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> vm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>实例的<code>$root</code>属性表示当前实例的根实例，挂载该属性时，首先会判断如果当前实例存在父级，那么当前实例的根实例<code>$root</code>属性就是其父级的根实例<code>$root</code>属性，如果不存在，那么根实例<code>$root</code>属性就是它自己。这很好理解，举个例子：假如有一个人，他如果有父亲，那么他父亲的祖先肯定也是他的祖先，同理，他的儿子的祖先也肯定是他的祖先，我们不需要真正的一层一层的向上递归查找到他祖先本人，只需要知道他父亲的祖先是谁然后告诉他即可。如果他没有父亲，那说明他自己就是祖先，那么他后面的儿子、孙子的<code>$root</code>属性就是他自己了。</p><p>这就是一个自上到下将根实例的<code>$root</code>属性依次传递给每一个子实例的过程。</p><p>最后，再初始化了一些其它属性，因为都是简单的赋初始值，这里就不再一一介绍，等后面内容涉及到的时候再介绍。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">vm.$children </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">vm.$refs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">vm._watcher </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">vm._inactive </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">vm._directInactive </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">vm._isMounted </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">vm._isDestroyed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">vm._isBeingDestroyed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">vm.$children </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">vm.$refs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">vm._watcher </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">vm._inactive </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">vm._directInactive </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">vm._isMounted </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">vm._isDestroyed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">vm._isBeingDestroyed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-总结" tabindex="-1">3. 总结 <a class="header-anchor" href="#_3-总结" aria-label="Permalink to &quot;3. 总结&quot;">​</a></h2><p>本篇文章介绍了初始化阶段调用的第一个初始化函数——<code>initLifecycle</code>函数。该函数的逻辑非常简单，就是给实例初始化了一些属性，包括以<code>$</code>开头的供用户使用的外部属性，也包括以<code>_</code>开头的供内部使用的内部属性。</p>`,17),o=[e];function c(r,t,i,E,y,d){return n(),a("div",null,o)}const u=s(l,[["render",c]]);export{b as __pageData,u as default};
