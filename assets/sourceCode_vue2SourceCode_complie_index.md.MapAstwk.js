import{_ as n,o as t,c as l,k as e,a as s,t as p,R as a}from"./chunks/framework.aAb_t1_d.js";const o="/assets/1.TllqC3H1.png",d="/assets/2.KSt1bhoH.png",c="/assets/3.m49uZidI.png",M=JSON.parse('{"title":"模板编译篇综述","description":"","frontmatter":{"title":"模板编译篇综述"},"headers":[],"relativePath":"sourceCode/vue2SourceCode/complie/index.md","filePath":"sourceCode/vue2SourceCode/complie/index.md"}'),r={name:"sourceCode/vue2SourceCode/complie/index.md"},h=a('<h2 id="_1-前言" tabindex="-1">1. 前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1. 前言&quot;">​</a></h2><p>在前几篇文章中，我们介绍了<code>Vue</code>中的虚拟<code>DOM</code>以及虚拟<code>DOM</code>的<code>patch</code>(DOM-Diff)过程，而虚拟<code>DOM</code>存在的必要条件是得先有<code>VNode</code>，那么<code>VNode</code>又是从哪儿来的呢？这就是接下来几篇文章要说的模板编译。你可以这么理解：把用户写的模板进行编译，就会产生<code>VNode</code>。</p><h2 id="_2-什么是模板编译" tabindex="-1">2. 什么是模板编译 <a class="header-anchor" href="#_2-什么是模板编译" aria-label="Permalink to &quot;2. 什么是模板编译&quot;">​</a></h2>',3),k=e("code",null,"<template></template>",-1),g=e("code",null,"HTML",-1),E=e("code",null,"HTML",-1),m=e("code",null,"HTML",-1),u=e("code",null,"<template></template>",-1),b=e("code",null,"HTML",-1),_=e("code",null,"Vue",-1),y=e("code",null,"v-on",-1),F=e("code",null,"v-if",-1),A=e("code",null,"HTML",-1),C=a('<p>这就归功于<code>Vue</code>的模板编译了，<code>Vue</code>会把用户在<code>&lt;template&gt;&lt;/template&gt;</code>标签中写的类似于原生<code>HTML</code>的内容进行编译，把原生<code>HTML</code>的内容找出来，再把非原生<code>HTML</code>找出来，经过一系列的逻辑处理生成渲染函数，也就是<code>render</code>函数，而<code>render</code>函数会将模板内容生成对应的<code>VNode</code>，而<code>VNode</code>再经过前几篇文章介绍的<code>patch</code>过程从而得到将要渲染的视图中的<code>VNode</code>，最后根据<code>VNode</code>创建真实的<code>DOM</code>节点并插入到视图中， 最终完成视图的渲染更新。</p><p>而把用户在<code>&lt;template&gt;&lt;/template&gt;</code>标签中写的类似于原生<code>HTML</code>的内容进行编译，把原生<code>HTML</code>的内容找出来，再把非原生<code>HTML</code>找出来，经过一系列的逻辑处理生成渲染函数，也就是<code>render</code>函数的这一段过程称之为模板编译过程。</p><h2 id="_3-整体渲染流程" tabindex="-1">3. 整体渲染流程 <a class="header-anchor" href="#_3-整体渲染流程" aria-label="Permalink to &quot;3. 整体渲染流程&quot;">​</a></h2><p>所谓渲染流程，就是把用户写的类似于原生<code>HTML</code>的模板经过一系列处理最终反应到视图中称之为整个渲染流程。这个流程在上文中其实已经说到了，下面我们以流程图的形式宏观的了解一下，流程图如下： <img src="'+o+'" alt=""></p><p>从图中我们也可以看到，模板编译过程就是把用户写的模板经过一系列处理最终生成<code>render</code>函数的过程。</p><h2 id="_4-模板编译内部流程" tabindex="-1">4. 模板编译内部流程 <a class="header-anchor" href="#_4-模板编译内部流程" aria-label="Permalink to &quot;4. 模板编译内部流程&quot;">​</a></h2><p>那么模板编译内部是怎么把用户写的模板经过处理最终生成<code>render</code>函数的呢？这内部的过程是怎样的呢？</p><h3 id="_4-1-抽象语法树ast" tabindex="-1">4.1 抽象语法树AST <a class="header-anchor" href="#_4-1-抽象语法树ast" aria-label="Permalink to &quot;4.1 抽象语法树AST&quot;">​</a></h3><p>我们知道，用户在<code>&lt;template&gt;&lt;/template&gt;</code>标签中写的模板对<code>Vue</code>来说就是一堆字符串，那么如何解析这一堆字符串并且从中提取出元素的标签、属性、变量插值等有效信息呢？这就需要借助一个叫做抽象语法树的东西。</p><p>所谓抽象语法树，在计算机科学中，<strong>抽象语法树</strong>（<strong>A</strong>bstract<strong>S</strong>yntax<strong>T</strong>ree，AST），或简称<strong>语法树</strong>（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。之所以说语法是“抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。比如，嵌套括号被隐含在树的结构中，并没有以节点的形式呈现；而类似于if-condition-then这样的条件跳转语句，可以使用带有两个分支的节点来表示。——来自百度百科</p><p>我就知道，这段话贴出来也是白贴，因为看了也看不懂，哈哈。那么我们就以最直观的例子来理解什么是抽象语法树。请看下图： <img src="'+d+`" alt=""></p><p>从图中我们可以看到，一个简单的<code>HTML</code>标签的代码被转换成了一个<code>JS</code>对象，而这个对象中的属性代表了这个标签中一些关键有效信息。如图中标识。 有兴趣的同学可以在这个网站在线转换试试：<a href="https://astexplorer.net/" target="_blank" rel="noreferrer">https://astexplorer.net/</a></p><h3 id="_4-2-具体流程" tabindex="-1">4.2 具体流程 <a class="header-anchor" href="#_4-2-具体流程" aria-label="Permalink to &quot;4.2 具体流程&quot;">​</a></h3><p>将一堆字符串模板解析成抽象语法树<code>AST</code>后，我们就可以对其进行各种操作处理了，处理完后用处理后的<code>AST</code>来生成<code>render</code>函数。其具体流程可大致分为三个阶段：</p><ol><li>模板解析阶段：将一堆模板字符串用正则等方式解析成抽象语法树<code>AST</code>；</li><li>优化阶段：遍历<code>AST</code>，找出其中的静态节点，并打上标记；</li><li>代码生成阶段：将<code>AST</code>转换成渲染函数；</li></ol><p>这三个阶段在源码中分别对应三个模块，下面给出三个模块的源代码在源码中的路径：</p><ol><li>模板解析阶段——解析器——源码路径：<code>src/compiler/parser/index.js</code>;</li><li>优化阶段——优化器——源码路径：<code>src/compiler/optimizer.js</code>;</li><li>代码生成阶段——代码生成器——源码路径：<code>src/compiler/codegen/index.js</code>; 其对应的源码如下：</li></ol><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 源码位置: /src/complier/index.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> createCompiler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createCompilerCreator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> baseCompile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CompilerOptions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CompiledResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 模板解析阶段：用正则等方式解析 template 模板中的指令、class、style等数据，形成AST</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ast</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(template.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), options)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (options.optimize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 优化阶段：遍历AST，找出其中的静态节点，并打上标记；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    optimize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ast, options)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 代码生成阶段：将AST转换成渲染函数；</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> code</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ast, options)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ast,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    render: code.render,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    staticRenderFns: code.staticRenderFns</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>可以看到 <code>baseCompile</code> 的代码非常的简短主要核心代码。</p><ul><li><strong>const ast =parse(template.trim(), options)</strong>:<code>parse</code> 会用正则等方式解析 <code>template</code> 模板中的指令、<code>class</code>、<code>style</code>等数据，形成<code>AST</code>。</li><li><strong>optimize(ast, options)</strong>: <code>optimize</code> 的主要作用是标记静态节点，这是 <code>Vue</code> 在编译过程中的一处优化，挡在进行<code>patch</code> 的过程中， <code>DOM-Diff</code> 算法会直接跳过静态节点，从而减少了比较的过程，优化了 <code>patch</code> 的性能。</li><li><strong>const code =generate(ast, options)</strong>: 将 <code>AST</code> 转化成 <code>render</code>函数字符串的过程，得到结果是 <code>render</code>函数 的字符串以及 <code>staticRenderFns</code> 字符串。</li></ul><p>最终 <code>baseCompile</code> 的返回值</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 	ast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ast,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 	render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: code.render,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 	staticRenderFns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: code.staticRenderFns</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>最终返回了抽象语法树( ast )，渲染函数( render )，静态渲染函数( staticRenderFns )，且<code>render</code> 的值为<code>code.render </code>，<code>staticRenderFns</code> 的值为<code>code.staticRenderFns </code>，也就是说通过 <code>generate </code>处理 <code>ast </code>之后得到的返回值 <code>code</code> 是一个对象。</p><p>下面再给出模板编译内部具体流程图，便于理解。流程图如下： <img src="`+c+'" alt=""></p><h2 id="_5-总结" tabindex="-1">5. 总结 <a class="header-anchor" href="#_5-总结" aria-label="Permalink to &quot;5. 总结&quot;">​</a></h2><p>本篇文章首先引出了为什么会有模板编译，因为有了模板编译，才有了虚拟<code>DOM</code>，才有了后续的视图更新。接着介绍了什么是模板编译，以及介绍了把用户所写的模板经过层层处理直到最终渲染的视图中这个整体的渲染流程；最后介绍了模板编译过程中所需要使用的抽象语法树的概念以及分析了模板编译的具体实施流程，其流程大致分为三个阶段，分别是模板解析阶段、优化阶段和代码生成阶段。那么接下来的几篇文章将会把这三个阶段逐一进行分析介绍。</p>',26);function T(i,D,S,f,x,v){return t(),l("div",null,[h,e("p",null,[s("我们知道，在日常开发中，我们把写在"),k,s("标签中的类似于原生"),g,s("的内容称之为模板。这时你可能会问了，为什么说是“类似于原生"),E,s("的内容”而不是“就是"),m,s("的内容”？因为我们在开发中，在"),u,s("标签中除了写一些原生"),b,s("的标签，我们还会写一些变量插值，如"+p(i.xxx)+"，或者写一些",1),_,s("指令，如"),y,s("、"),F,s("等。而这些东西都是在原生"),A,s("语法中不存在的，不被接受的。但是事实上我们确实这么写了，也被正确识别了，页面也正常显示了，这又是为什么呢？")]),C])}const V=n(r,[["render",T]]);export{M as __pageData,V as default};
