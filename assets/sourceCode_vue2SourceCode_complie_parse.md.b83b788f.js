import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.fd95ed2e.js";const l="/assets/4.c6d9ece6.png",b=JSON.parse('{"title":"模板解析阶段(整体运行流程)","description":"","frontmatter":{"title":"模板解析阶段(整体运行流程)"},"headers":[],"relativePath":"sourceCode/vue2SourceCode/complie/parse.md","filePath":"sourceCode/vue2SourceCode/complie/parse.md"}'),e={name:"sourceCode/vue2SourceCode/complie/parse.md"},o=p('<h2 id="_1-整体流程" tabindex="-1">1. 整体流程 <a class="header-anchor" href="#_1-整体流程" aria-label="Permalink to &quot;1. 整体流程&quot;">​</a></h2><p>上篇文章中我们说了，在模板解析阶段主要做的工作是把用户在<code>&lt;template&gt;&lt;/template&gt;</code>标签内写的模板使用正则等方式解析成抽象语法树（<code>AST</code>）。而这一阶段在源码中对应解析器（<code>parser</code>）模块。</p><p>解析器，顾名思义，就是把用户所写的模板根据一定的解析规则解析出有效的信息，最后用这些信息形成<code>AST</code>。我们知道在<code>&lt;template&gt;&lt;/template&gt;</code>模板内，除了有常规的<code>HTML</code>标签外，用户还会一些文本信息以及在文本信息中包含过滤器。而这些不同的内容在解析起来肯定需要不同的解析规则，所以解析器不可能只有一个，它应该除了有解析常规<code>HTML</code>的HTML解析器，还应该有解析文本的文本解析器以及解析文本中如果包含过滤器的过滤器解析器。</p><p>另外，文本信息和标签属性信息却又是存在于HTML标签之内的，所以在解析整个模板的时候它的流程应该是这样子的：HTML解析器是主线，先用HTML解析器进行解析整个模板，在解析过程中如果碰到文本内容，那就调用文本解析器来解析文本，如果碰到文本中包含过滤器那就调用过滤器解析器来解析。如下图所示：</p><p><img src="'+l+`" alt=""></p><h2 id="_2-回到源码" tabindex="-1">2. 回到源码 <a class="header-anchor" href="#_2-回到源码" aria-label="Permalink to &quot;2. 回到源码&quot;">​</a></h2><p>解析器的源码位于<code>/src/complier/parser</code>文件夹下，其主线代码如下：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 代码位置：/src/complier/parser/index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Convert HTML string to AST.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">template</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">parseHTML</span><span style="color:#E1E4E8;">(template, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    warn,</span></span>
<span class="line"><span style="color:#E1E4E8;">    expectHTML: options.expectHTML,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isUnaryTag: options.isUnaryTag,</span></span>
<span class="line"><span style="color:#E1E4E8;">    canBeLeftOpenTag: options.canBeLeftOpenTag,</span></span>
<span class="line"><span style="color:#E1E4E8;">    shouldDecodeNewlines: options.shouldDecodeNewlines,</span></span>
<span class="line"><span style="color:#E1E4E8;">    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,</span></span>
<span class="line"><span style="color:#E1E4E8;">    shouldKeepComment: options.comments,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">tag</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">attrs</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">unary</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">chars</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">comment</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> root</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 代码位置：/src/complier/parser/index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Convert HTML string to AST.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(</span><span style="color:#E36209;">template</span><span style="color:#24292E;">, </span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">parseHTML</span><span style="color:#24292E;">(template, {</span></span>
<span class="line"><span style="color:#24292E;">    warn,</span></span>
<span class="line"><span style="color:#24292E;">    expectHTML: options.expectHTML,</span></span>
<span class="line"><span style="color:#24292E;">    isUnaryTag: options.isUnaryTag,</span></span>
<span class="line"><span style="color:#24292E;">    canBeLeftOpenTag: options.canBeLeftOpenTag,</span></span>
<span class="line"><span style="color:#24292E;">    shouldDecodeNewlines: options.shouldDecodeNewlines,</span></span>
<span class="line"><span style="color:#24292E;">    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,</span></span>
<span class="line"><span style="color:#24292E;">    shouldKeepComment: options.comments,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">start</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">tag</span><span style="color:#24292E;">, </span><span style="color:#E36209;">attrs</span><span style="color:#24292E;">, </span><span style="color:#E36209;">unary</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">end</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">chars</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">comment</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> root</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>从上面代码中可以看到，<code>parse</code> 函数就是解析器的主函数，在<code>parse</code> 函数内调用了<code>parseHTML</code> 函数对模板字符串进行解析，在<code>parseHTML</code> 函数解析模板字符串的过程中，如果遇到文本信息，就会调用文本解析器<code>parseText</code>函数进行文本解析；如果遇到文本中包含过滤器，就会调用过滤器解析器<code>parseFilters</code>函数进行解析。</p><h2 id="_3-总结" tabindex="-1">3. 总结 <a class="header-anchor" href="#_3-总结" aria-label="Permalink to &quot;3. 总结&quot;">​</a></h2><p>本篇文章主要梳理了模板解析的整体运行流程，模板解析其实就是根据被解析内容的特点使用正则等方式将有效信息解析提取出来，根据解析内容的不同分为HTML解析器，文本解析器和过滤器解析器。而文本信息与过滤器信息又存在于HTML标签中，所以在解析器主线函数<code>parse</code>中先调用HTML解析器<code>parseHTML</code> 函数对模板字符串进行解析，如果在解析过程中遇到文本或过滤器信息则再调用相应的解析器进行解析，最终完成对整个模板字符串的解析。</p><p>了解了模板解析阶段的整体运行流程后，接下来，我们就对流程中所涉及到的三种解析器分别深入分析，逐个击破。</p>`,12),c=[o];function r(t,i,E,y,d,m){return n(),a("div",null,c)}const h=s(e,[["render",r]]);export{b as __pageData,h as default};
