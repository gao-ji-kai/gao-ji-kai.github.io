import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.9dc859f3.js";const l="/assets/4.6fa5cd99.png",o="/assets/5.cf66b4b2.png",e="/assets/6.a695399b.png",F=JSON.parse('{"title":"挂载阶段","description":"","frontmatter":{"title":"挂载阶段"},"headers":[],"relativePath":"sourceCode/vue2SourceCode/lifecycle/mount.md","filePath":"sourceCode/vue2SourceCode/lifecycle/mount.md"}'),c={name:"sourceCode/vue2SourceCode/lifecycle/mount.md"},r=p('<h2 id="_1-前言" tabindex="-1">1. 前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1. 前言&quot;">​</a></h2><p>模板编译阶段完成之后，接下来就进入了挂载阶段，从官方文档给出的生命周期流程图中可以看到，挂载阶段所做的主要工作是创建<code>Vue</code>实例并用其替换<code>el</code>选项对应的<code>DOM</code>元素，同时还要开启对模板中数据（状态）的监控，当数据（状态）发生变化时通知其依赖进行视图更新。</p><p><img src="'+l+`" alt=""></p><h2 id="_2-挂载阶段分析" tabindex="-1">2. 挂载阶段分析 <a class="header-anchor" href="#_2-挂载阶段分析" aria-label="Permalink to &quot;2. 挂载阶段分析&quot;">​</a></h2><p>在上篇文章介绍模板编译阶段中我们说过，在完整版本的<code>$mount</code>方法中将模板编译完成之后，会回过头去调只包含运行时版本的<code>$mount</code>方法进入挂载阶段，所以要想分析挂载阶段我们必须从只包含运行时版本的<code>$mount</code>方法入手。</p><p>只包含运行时版本的<code>$mount</code>代码如下：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">hydrating</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  el </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> inBrowser </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">query</span><span style="color:#E1E4E8;">(el) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mountComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, el, hydrating)</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">el</span><span style="color:#24292E;">,</span><span style="color:#E36209;">hydrating</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> inBrowser </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">query</span><span style="color:#24292E;">(el) </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mountComponent</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, el, hydrating)</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>可以看到，在该函数内部首先获取到<code>el</code>选项对应的<code>DOM</code>元素，然后调用<code>mountComponent</code>函数并将<code>el</code>选项对应的<code>DOM</code>元素传入，进入挂载阶段。那么，下面我们来看下<code>mountComponent</code>函数内部都干了些什么。</p><p><code>mountComponent</code>函数的定义位于源码的<code>src/core/instance/lifecycle.js</code>中，如下：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mountComponent</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">hydrating</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm.$el </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">vm.$options.render) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        vm.$options.render </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> createEmptyVNode</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;beforeMount&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> updateComponent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">updateComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        vm.</span><span style="color:#B392F0;">_update</span><span style="color:#E1E4E8;">(vm.</span><span style="color:#B392F0;">_render</span><span style="color:#E1E4E8;">(), hydrating)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Watcher</span><span style="color:#E1E4E8;">(vm, updateComponent, noop, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">before</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (vm._isMounted) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;beforeUpdate&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/* isRenderWatcher */</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    hydrating </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (vm.$vnode </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        vm._isMounted </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;mounted&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> vm</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mountComponent</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">vm</span><span style="color:#24292E;">,</span><span style="color:#E36209;">el</span><span style="color:#24292E;">,</span><span style="color:#E36209;">hydrating</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    vm.$el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">vm.$options.render) {</span></span>
<span class="line"><span style="color:#24292E;">        vm.$options.render </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> createEmptyVNode</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">callHook</span><span style="color:#24292E;">(vm, </span><span style="color:#032F62;">&#39;beforeMount&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> updateComponent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">updateComponent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        vm.</span><span style="color:#6F42C1;">_update</span><span style="color:#24292E;">(vm.</span><span style="color:#6F42C1;">_render</span><span style="color:#24292E;">(), hydrating)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Watcher</span><span style="color:#24292E;">(vm, updateComponent, noop, {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">before</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (vm._isMounted) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">callHook</span><span style="color:#24292E;">(vm, </span><span style="color:#032F62;">&#39;beforeUpdate&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">/* isRenderWatcher */</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    hydrating </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (vm.$vnode </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        vm._isMounted </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">callHook</span><span style="color:#24292E;">(vm, </span><span style="color:#032F62;">&#39;mounted&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> vm</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>可以看到，在该函数中，首先会判断实例上是否存在渲染函数，如果不存在，则设置一个默认的渲染函数<code>createEmptyVNode</code>，该渲染函数会创建一个注释类型的<code>VNode</code>节点。如下：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">vm.$el </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">vm.$options.render) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm.$options.render </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> createEmptyVNode</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">vm.$el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">vm.$options.render) {</span></span>
<span class="line"><span style="color:#24292E;">    vm.$options.render </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> createEmptyVNode</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>然后调用<code>callHook</code>函数来触发<code>beforeMount</code>生命周期钩子函数，如下：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;beforeMount&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">callHook</span><span style="color:#24292E;">(vm, </span><span style="color:#032F62;">&#39;beforeMount&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该钩子函数触发后标志着正式开始执行挂载操作。</p><p>接下来定义了一个<code>updateComponent</code>函数，如下：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">updateComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm.</span><span style="color:#B392F0;">_update</span><span style="color:#E1E4E8;">(vm.</span><span style="color:#B392F0;">_render</span><span style="color:#E1E4E8;">(), hydrating)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">updateComponent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    vm.</span><span style="color:#6F42C1;">_update</span><span style="color:#24292E;">(vm.</span><span style="color:#6F42C1;">_render</span><span style="color:#24292E;">(), hydrating)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在该函数内部，首先执行渲染函数<code>vm._render()</code>得到一份最新的<code>VNode</code>节点树，然后执行<code> vm._update()</code>方法对最新的<code>VNode</code>节点树与上一次渲染的旧<code>VNode</code>节点树进行对比并更新<code>DOM</code>节点(即<code>patch</code>操作)，完成一次渲染。</p><p>也就是说，如果调用了<code>updateComponent</code>函数，就会将最新的模板内容渲染到视图页面中，这样就完成了挂载操作的一半工作，即图中的上半部分：</p><p><img src="`+o+'" alt=""></p><p>为什么说是完成了一半操作呢？这是因为在挂载阶段不但要将模板渲染到视图中，同时还要开启对模板中数据（状态）的监控，当数据（状态）发生变化时通知其依赖进行视图更新。即图中的下半部分：</p><p><img src="'+e+`" alt=""></p><p>继续往下看，接下来创建了一个<code>Watcher</code>实例，并将定义好的<code>updateComponent</code>函数传入。要想开启对模板中数据（状态）的监控，这一段代码是关键，如下：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Watcher</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    vm,                    </span><span style="color:#6A737D;">// 第一个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    updateComponent,       </span><span style="color:#6A737D;">// 第二个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    noop,                  </span><span style="color:#6A737D;">// 第三个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    {                      </span><span style="color:#6A737D;">// 第四个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">before</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (vm._isMounted) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">callHook</span><span style="color:#E1E4E8;">(vm, </span><span style="color:#9ECBFF;">&#39;beforeUpdate&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 第五个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Watcher</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    vm,                    </span><span style="color:#6A737D;">// 第一个参数</span></span>
<span class="line"><span style="color:#24292E;">    updateComponent,       </span><span style="color:#6A737D;">// 第二个参数</span></span>
<span class="line"><span style="color:#24292E;">    noop,                  </span><span style="color:#6A737D;">// 第三个参数</span></span>
<span class="line"><span style="color:#24292E;">    {                      </span><span style="color:#6A737D;">// 第四个参数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">before</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (vm._isMounted) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">callHook</span><span style="color:#24292E;">(vm, </span><span style="color:#032F62;">&#39;beforeUpdate&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 第五个参数</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>可以看到，在创建<code>Watcher</code>实例的时候，传入的第二个参数是<code>updateComponent</code>函数。回顾一下我们在数据侦测篇文章中介绍<code>Watcher</code>类的时候，<code>Watcher</code>类构造函数的第二个参数支持两种类型：函数和数据路径（如<code>a.b.c</code>）。如果是数据路径，会根据路径去读取这个数据；如果是函数，会执行这个函数。一旦读取了数据或者执行了函数，就会触发数据或者函数内数据的<code>getter</code>方法，而在<code>getter</code>方法中会将<code>watcher</code>实例添加到该数据的依赖列表中，当该数据发生变化时就会通知依赖列表中所有的依赖，依赖接收到通知后就会调用第四个参数回调函数去更新视图。</p><p>换句话说，上面代码中把<code>updateComponent</code>函数作为第二个参数传给<code>Watcher</code>类从而创建了<code>watcher</code>实例，那么<code>updateComponent</code>函数中读取的所有数据都将被<code>watcher</code>所监控，这些数据中只要有任何一个发生了变化，那么<code>watcher</code>都将会得到通知，从而会去调用第四个参数回调函数去更新视图，如此反复，直到实例被销毁。</p><p>这样就完成了挂载阶段的另一半工作。</p><p>如此之后，挂载阶段才算是全部完成了，接下来调用挂载完成的生命周期钩子函数<code>mounted</code>。</p><h2 id="_3-总结" tabindex="-1">3. 总结 <a class="header-anchor" href="#_3-总结" aria-label="Permalink to &quot;3. 总结&quot;">​</a></h2><p>本篇文章介绍了生命周期中的第三个阶段——挂载阶段。</p><p>在该阶段中所做的主要工作是创建<code>Vue</code>实例并用其替换<code>el</code>选项对应的<code>DOM</code>元素，同时还要开启对模板中数据（状态）的监控，当数据（状态）发生变化时通知其依赖进行视图更新。</p><p>我们将挂载阶段所做的工作分成两部分进行了分析，第一部分是将模板渲染到视图上，第二部分是开启对模板中数据（状态）的监控。两部分工作都完成以后挂载阶段才算真正的完成了。</p>`,32),t=[r];function E(y,i,d,u,m,b){return n(),a("div",null,t)}const h=s(c,[["render",E]]);export{F as __pageData,h as default};
