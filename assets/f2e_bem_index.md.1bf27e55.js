import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fd95ed2e.js";const m=JSON.parse('{"title":"BEM 理论知识点","description":"","frontmatter":{},"headers":[],"relativePath":"f2e/bem/index.md","filePath":"f2e/bem/index.md"}'),p={name:"f2e/bem/index.md"},e=l(`<h1 id="bem-理论知识点" tabindex="-1">BEM 理论知识点 <a class="header-anchor" href="#bem-理论知识点" aria-label="Permalink to &quot;BEM 理论知识点&quot;">​</a></h1><h2 id="bem-架构是什么" tabindex="-1">BEM 架构是什么？ <a class="header-anchor" href="#bem-架构是什么" aria-label="Permalink to &quot;BEM 架构是什么？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">什么是BEM？</p><p>BEM 架构是对前端样式命名的规范化，顾名思义，BEM 由 块【block】、元素【element】、修饰符【modifier】组成，其主要作用是方便开发团队对前端项目的样式命名进行统一化处理，加强后期的维护工作。</p></div><h2 id="浅谈-bem-架构组成" tabindex="-1">浅谈 BEM 架构组成 <a class="header-anchor" href="#浅谈-bem-架构组成" aria-label="Permalink to &quot;浅谈 BEM 架构组成&quot;">​</a></h2><blockquote><p>BEM代表 “块（block）,元素（element）,修饰符（modifier）”,我们常用这三个实体开发组件。</p></blockquote><h3 id="块【block】" tabindex="-1">块【block】 <a class="header-anchor" href="#块【block】" aria-label="Permalink to &quot;块【block】&quot;">​</a></h3><ul><li>块 可以理解为一个作用域标签，附有独立实体的意义，例如我们常常将一个页面的头部命名为 header、内容命名为 content 等等，这在 BEM 架构中采用 - 横杠来连接，常见的有 ElementUI 中用来代表一个表单块的 el-form。</li></ul><h3 id="元素【element】" tabindex="-1">元素【element】 <a class="header-anchor" href="#元素【element】" aria-label="Permalink to &quot;元素【element】&quot;">​</a></h3><ul><li>元素 可以理解为 块 中的子项，没有独立实体的意义，但有一定的语义，例如我们常常将一个列表项命名为 item、头部的标题命名为 title 等等，这在 BEM 架构中采用 __ 双下划线来连接，常见的有 ElementUI 中用来代表一个表单项的 el-form__item。</li></ul><h3 id="修饰符【modifier】" tabindex="-1">修饰符【modifier】 <a class="header-anchor" href="#修饰符【modifier】" aria-label="Permalink to &quot;修饰符【modifier】&quot;">​</a></h3><ul><li>修饰符 可以理解为 块 或 元素 的一个额外标记，主要用来表示一个特定的外观或行为，例如我们常常用绿色来表示一个成功的提示、黄色来表示一个警告的提示等等，这在 BEM 架构中采用 -- 双横杠来连接，常见的有 ElementUI 中用来代表一个成功的按钮 el-button--success。</li></ul><h2 id="bem命名规则" tabindex="-1">BEM命名规则 <a class="header-anchor" href="#bem命名规则" aria-label="Permalink to &quot;BEM命名规则&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">命名规则</p><ul><li>[block]</li><li>[block]__[element]--[modifier]</li><li>[block]--[modifier]</li><li>[block]__[element]</li></ul></div><ul><li>__ 双下划线用于连接 block 与 element</li><li>-- 双连字符用于连接 modifier</li><li>-单连字符用于连接由多单词组成的名字，如.box__goods-image--big</li></ul><h2 id="bem命名的优势" tabindex="-1">BEM命名的优势 <a class="header-anchor" href="#bem命名的优势" aria-label="Permalink to &quot;BEM命名的优势&quot;">​</a></h2><p>可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联。</p><div class="tip custom-block"><p class="custom-block-title">优势</p><ul><li>样式隔离，避免样式污染</li><li>代码更容易覆盖</li><li>代码易读</li></ul></div><h2 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h2><ul><li>mixins.scss</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$namespcae: &#39;qw&#39; !default;</span></span>
<span class="line"><span style="color:#E1E4E8;">$</span><span style="color:#85E89D;">block-sel</span><span style="color:#E1E4E8;">: &quot;-&quot; !default;</span></span>
<span class="line"><span style="color:#E1E4E8;">$</span><span style="color:#85E89D;">elem-sel</span><span style="color:#E1E4E8;">: &quot;__&quot; !default;</span></span>
<span class="line"><span style="color:#E1E4E8;">$</span><span style="color:#85E89D;">mod-sel</span><span style="color:#E1E4E8;">: &quot;--&quot; !default;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// BEM</span></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> b($block, $selector: &quot;&quot;) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> $</span><span style="color:#85E89D;">B</span><span style="color:#E1E4E8;">: $namespace </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> $</span><span style="color:#85E89D;">common-separator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> $block !global;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> .#{$</span><span style="color:#79B8FF;">B</span><span style="color:#E1E4E8;"> + $</span><span style="color:#79B8FF;">selector</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">   @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> e($element) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> $E: $</span><span style="color:#85E89D;">element</span><span style="color:#E1E4E8;"> !global;</span></span>
<span class="line"><span style="color:#E1E4E8;"> $selector: &amp;;</span></span>
<span class="line"><span style="color:#E1E4E8;"> $currentSelector: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@each</span><span style="color:#E1E4E8;"> $unit in $element {</span></span>
<span class="line"><span style="color:#E1E4E8;">   $currentSelector: #{$</span><span style="color:#79B8FF;">currentSelector</span><span style="color:#E1E4E8;"> +</span></span>
<span class="line"><span style="color:#E1E4E8;">     &quot;.&quot; +</span></span>
<span class="line"><span style="color:#E1E4E8;">     $</span><span style="color:#79B8FF;">B</span><span style="color:#E1E4E8;"> +</span></span>
<span class="line"><span style="color:#E1E4E8;">     $</span><span style="color:#79B8FF;">element-separator</span><span style="color:#E1E4E8;"> +</span></span>
<span class="line"><span style="color:#E1E4E8;">     $</span><span style="color:#79B8FF;">unit</span><span style="color:#E1E4E8;"> +</span></span>
<span class="line"><span style="color:#E1E4E8;">     &quot;,&quot;};</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@if</span><span style="color:#E1E4E8;"> hitAllSpecialNestRule($selector) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">     #{$</span><span style="color:#79B8FF;">selector</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">       #{$</span><span style="color:#79B8FF;">currentSelector</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">         @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       }</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">@else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">     #{$</span><span style="color:#79B8FF;">currentSelector</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">       @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> m($modifier) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> $selector: &amp;;</span></span>
<span class="line"><span style="color:#E1E4E8;"> $currentSelector: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@each</span><span style="color:#E1E4E8;"> $unit in $modifier {</span></span>
<span class="line"><span style="color:#E1E4E8;">   $currentSelector: #{$</span><span style="color:#79B8FF;">currentSelector</span><span style="color:#E1E4E8;"> +</span></span>
<span class="line"><span style="color:#E1E4E8;">     $</span><span style="color:#79B8FF;">selector</span><span style="color:#E1E4E8;"> +</span></span>
<span class="line"><span style="color:#E1E4E8;">     $</span><span style="color:#79B8FF;">modifier-separator</span><span style="color:#E1E4E8;"> +</span></span>
<span class="line"><span style="color:#E1E4E8;">     $</span><span style="color:#79B8FF;">unit</span><span style="color:#E1E4E8;"> +</span></span>
<span class="line"><span style="color:#E1E4E8;">     &quot;,&quot;};</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   #{$</span><span style="color:#79B8FF;">currentSelector</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">     @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> configurable-m($modifier, $E-flag: false) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> $selector: &amp;;</span></span>
<span class="line"><span style="color:#E1E4E8;"> $interpolation: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@if</span><span style="color:#E1E4E8;"> $E-flag {</span></span>
<span class="line"><span style="color:#E1E4E8;">   $interpolation: $</span><span style="color:#85E89D;">element-separator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> $E-flag;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   #{$</span><span style="color:#79B8FF;">selector</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">     .#{$</span><span style="color:#79B8FF;">B</span><span style="color:#E1E4E8;"> + $</span><span style="color:#79B8FF;">interpolation</span><span style="color:#E1E4E8;"> + $</span><span style="color:#79B8FF;">modifier-separator</span><span style="color:#E1E4E8;"> + $</span><span style="color:#79B8FF;">modifier</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">       @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> spec-selector(</span></span>
<span class="line"><span style="color:#E1E4E8;"> $specSelector: &quot;&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;"> $element: $E,</span></span>
<span class="line"><span style="color:#E1E4E8;"> $modifier: false,</span></span>
<span class="line"><span style="color:#E1E4E8;"> $block: $B</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> $modifierCombo: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@if</span><span style="color:#E1E4E8;"> $modifier {</span></span>
<span class="line"><span style="color:#E1E4E8;">   $modifierCombo: $</span><span style="color:#85E89D;">modifier-separator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> $modifier;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   #{&amp;}#{$</span><span style="color:#79B8FF;">specSelector</span><span style="color:#E1E4E8;">}.#{$</span><span style="color:#79B8FF;">block</span></span>
<span class="line"><span style="color:#E1E4E8;">     + $</span><span style="color:#79B8FF;">element-separator</span></span>
<span class="line"><span style="color:#E1E4E8;">     + $</span><span style="color:#79B8FF;">element</span></span>
<span class="line"><span style="color:#E1E4E8;">     + $</span><span style="color:#79B8FF;">modifierCombo</span></span>
<span class="line"><span style="color:#E1E4E8;">     } {</span></span>
<span class="line"><span style="color:#E1E4E8;">     @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> meb($modifier: false, $element: $E, $block: $B) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> $selector: &amp;;</span></span>
<span class="line"><span style="color:#E1E4E8;"> $modifierCombo: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@if</span><span style="color:#E1E4E8;"> $modifier {</span></span>
<span class="line"><span style="color:#E1E4E8;">   $modifierCombo: $</span><span style="color:#85E89D;">modifier-separator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> $modifier;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   #{$</span><span style="color:#79B8FF;">selector</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">     .#{$</span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;"> + $</span><span style="color:#79B8FF;">element-separator</span><span style="color:#E1E4E8;"> + $</span><span style="color:#79B8FF;">element</span><span style="color:#E1E4E8;"> + $</span><span style="color:#79B8FF;">modifierCombo</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">       @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> when($state) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   &amp;.#{$</span><span style="color:#79B8FF;">state-prefix</span><span style="color:#E1E4E8;"> + $</span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">     @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> extend-rule($name) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@extend</span><span style="color:#E1E4E8;"> #{&quot;%shared-&quot; + $name} !optional;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> share-rule($name) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> $</span><span style="color:#85E89D;">rule-name</span><span style="color:#E1E4E8;">: &quot;%</span><span style="color:#85E89D;">shared-</span><span style="color:#E1E4E8;">&quot; </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> $name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> #{$</span><span style="color:#85E89D;">rule-name</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">   @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> pseudo($pseudo) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> #{&amp;}#{&quot;:#{$pseudo}&quot;} {</span></span>
<span class="line"><span style="color:#E1E4E8;">   @</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> picker-popper($background, $border, $box-shadow) {</span></span>
<span class="line"><span style="color:#E1E4E8;"> &amp;.#{$</span><span style="color:#79B8FF;">namespace</span><span style="color:#E1E4E8;">}-popper {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: $</span><span style="color:#FDAEB7;font-style:italic;">background</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: $</span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">box-shadow</span><span style="color:#E1E4E8;">: $box-shadow;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   .#{$</span><span style="color:#79B8FF;">namespace</span><span style="color:#E1E4E8;">}-popper__arrow {</span></span>
<span class="line"><span style="color:#E1E4E8;">     &amp;::before {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: $</span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">@each</span><span style="color:#E1E4E8;"> $placement,</span></span>
<span class="line"><span style="color:#E1E4E8;">     $adjacency</span></span>
<span class="line"><span style="color:#E1E4E8;">       in (&quot;top&quot;: &quot;left&quot;, &quot;bottom&quot;: &quot;right&quot;, &quot;left&quot;: &quot;bottom&quot;, &quot;right&quot;: &quot;top&quot;)</span></span>
<span class="line"><span style="color:#E1E4E8;">   {</span></span>
<span class="line"><span style="color:#E1E4E8;">     &amp;[</span><span style="color:#B392F0;">data-popper-placement</span><span style="color:#F97583;">^=</span><span style="color:#9ECBFF;">&quot;#{$placement}&quot;</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#E1E4E8;">       .#{$</span><span style="color:#79B8FF;">namespace</span><span style="color:#E1E4E8;">}-popper__arrow</span><span style="color:#B392F0;">::before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#79B8FF;">border-</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">placement</span><span style="color:#E1E4E8;">}-color: transparent;</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#85E89D;">border-</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">adjacency</span><span style="color:#E1E4E8;">}-color: transparent;</span></span>
<span class="line"><span style="color:#E1E4E8;">       }</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">$namespcae: &#39;qw&#39; !default;</span></span>
<span class="line"><span style="color:#24292E;">$</span><span style="color:#22863A;">block-sel</span><span style="color:#24292E;">: &quot;-&quot; !default;</span></span>
<span class="line"><span style="color:#24292E;">$</span><span style="color:#22863A;">elem-sel</span><span style="color:#24292E;">: &quot;__&quot; !default;</span></span>
<span class="line"><span style="color:#24292E;">$</span><span style="color:#22863A;">mod-sel</span><span style="color:#24292E;">: &quot;--&quot; !default;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// BEM</span></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> b($block, $selector: &quot;&quot;) {</span></span>
<span class="line"><span style="color:#24292E;"> $</span><span style="color:#22863A;">B</span><span style="color:#24292E;">: $namespace </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> $</span><span style="color:#22863A;">common-separator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> $block !global;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> .#{$</span><span style="color:#005CC5;">B</span><span style="color:#24292E;"> + $</span><span style="color:#005CC5;">selector</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">   @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> e($element) {</span></span>
<span class="line"><span style="color:#24292E;"> $E: $</span><span style="color:#22863A;">element</span><span style="color:#24292E;"> !global;</span></span>
<span class="line"><span style="color:#24292E;"> $selector: &amp;;</span></span>
<span class="line"><span style="color:#24292E;"> $currentSelector: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@each</span><span style="color:#24292E;"> $unit in $element {</span></span>
<span class="line"><span style="color:#24292E;">   $currentSelector: #{$</span><span style="color:#005CC5;">currentSelector</span><span style="color:#24292E;"> +</span></span>
<span class="line"><span style="color:#24292E;">     &quot;.&quot; +</span></span>
<span class="line"><span style="color:#24292E;">     $</span><span style="color:#005CC5;">B</span><span style="color:#24292E;"> +</span></span>
<span class="line"><span style="color:#24292E;">     $</span><span style="color:#005CC5;">element-separator</span><span style="color:#24292E;"> +</span></span>
<span class="line"><span style="color:#24292E;">     $</span><span style="color:#005CC5;">unit</span><span style="color:#24292E;"> +</span></span>
<span class="line"><span style="color:#24292E;">     &quot;,&quot;};</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@if</span><span style="color:#24292E;"> hitAllSpecialNestRule($selector) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">     #{$</span><span style="color:#005CC5;">selector</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">       #{$</span><span style="color:#005CC5;">currentSelector</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">         @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       }</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> } </span><span style="color:#D73A49;">@else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">     #{$</span><span style="color:#005CC5;">currentSelector</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">       @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> m($modifier) {</span></span>
<span class="line"><span style="color:#24292E;"> $selector: &amp;;</span></span>
<span class="line"><span style="color:#24292E;"> $currentSelector: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@each</span><span style="color:#24292E;"> $unit in $modifier {</span></span>
<span class="line"><span style="color:#24292E;">   $currentSelector: #{$</span><span style="color:#005CC5;">currentSelector</span><span style="color:#24292E;"> +</span></span>
<span class="line"><span style="color:#24292E;">     $</span><span style="color:#005CC5;">selector</span><span style="color:#24292E;"> +</span></span>
<span class="line"><span style="color:#24292E;">     $</span><span style="color:#005CC5;">modifier-separator</span><span style="color:#24292E;"> +</span></span>
<span class="line"><span style="color:#24292E;">     $</span><span style="color:#005CC5;">unit</span><span style="color:#24292E;"> +</span></span>
<span class="line"><span style="color:#24292E;">     &quot;,&quot;};</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   #{$</span><span style="color:#005CC5;">currentSelector</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">     @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> configurable-m($modifier, $E-flag: false) {</span></span>
<span class="line"><span style="color:#24292E;"> $selector: &amp;;</span></span>
<span class="line"><span style="color:#24292E;"> $interpolation: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@if</span><span style="color:#24292E;"> $E-flag {</span></span>
<span class="line"><span style="color:#24292E;">   $interpolation: $</span><span style="color:#22863A;">element-separator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> $E-flag;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   #{$</span><span style="color:#005CC5;">selector</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">     .#{$</span><span style="color:#005CC5;">B</span><span style="color:#24292E;"> + $</span><span style="color:#005CC5;">interpolation</span><span style="color:#24292E;"> + $</span><span style="color:#005CC5;">modifier-separator</span><span style="color:#24292E;"> + $</span><span style="color:#005CC5;">modifier</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">       @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> spec-selector(</span></span>
<span class="line"><span style="color:#24292E;"> $specSelector: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292E;"> $element: $E,</span></span>
<span class="line"><span style="color:#24292E;"> $modifier: false,</span></span>
<span class="line"><span style="color:#24292E;"> $block: $B</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;"> $modifierCombo: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@if</span><span style="color:#24292E;"> $modifier {</span></span>
<span class="line"><span style="color:#24292E;">   $modifierCombo: $</span><span style="color:#22863A;">modifier-separator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> $modifier;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   #{&amp;}#{$</span><span style="color:#005CC5;">specSelector</span><span style="color:#24292E;">}.#{$</span><span style="color:#005CC5;">block</span></span>
<span class="line"><span style="color:#24292E;">     + $</span><span style="color:#005CC5;">element-separator</span></span>
<span class="line"><span style="color:#24292E;">     + $</span><span style="color:#005CC5;">element</span></span>
<span class="line"><span style="color:#24292E;">     + $</span><span style="color:#005CC5;">modifierCombo</span></span>
<span class="line"><span style="color:#24292E;">     } {</span></span>
<span class="line"><span style="color:#24292E;">     @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> meb($modifier: false, $element: $E, $block: $B) {</span></span>
<span class="line"><span style="color:#24292E;"> $selector: &amp;;</span></span>
<span class="line"><span style="color:#24292E;"> $modifierCombo: &quot;&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@if</span><span style="color:#24292E;"> $modifier {</span></span>
<span class="line"><span style="color:#24292E;">   $modifierCombo: $</span><span style="color:#22863A;">modifier-separator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> $modifier;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   #{$</span><span style="color:#005CC5;">selector</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">     .#{$</span><span style="color:#005CC5;">block</span><span style="color:#24292E;"> + $</span><span style="color:#005CC5;">element-separator</span><span style="color:#24292E;"> + $</span><span style="color:#005CC5;">element</span><span style="color:#24292E;"> + $</span><span style="color:#005CC5;">modifierCombo</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">       @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> when($state) {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   &amp;.#{$</span><span style="color:#005CC5;">state-prefix</span><span style="color:#24292E;"> + $</span><span style="color:#005CC5;">state</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">     @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> extend-rule($name) {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@extend</span><span style="color:#24292E;"> #{&quot;%shared-&quot; + $name} !optional;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> share-rule($name) {</span></span>
<span class="line"><span style="color:#24292E;"> $</span><span style="color:#22863A;">rule-name</span><span style="color:#24292E;">: &quot;%</span><span style="color:#22863A;">shared-</span><span style="color:#24292E;">&quot; </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> $name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> #{$</span><span style="color:#22863A;">rule-name</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">   @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> pseudo($pseudo) {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> #{&amp;}#{&quot;:#{$pseudo}&quot;} {</span></span>
<span class="line"><span style="color:#24292E;">   @</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> picker-popper($background, $border, $box-shadow) {</span></span>
<span class="line"><span style="color:#24292E;"> &amp;.#{$</span><span style="color:#005CC5;">namespace</span><span style="color:#24292E;">}-popper {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: $</span><span style="color:#B31D28;font-style:italic;">background</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: $</span><span style="color:#005CC5;">border</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">box-shadow</span><span style="color:#24292E;">: $box-shadow;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   .#{$</span><span style="color:#005CC5;">namespace</span><span style="color:#24292E;">}-popper__arrow {</span></span>
<span class="line"><span style="color:#24292E;">     &amp;::before {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: $</span><span style="color:#005CC5;">border</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">@each</span><span style="color:#24292E;"> $placement,</span></span>
<span class="line"><span style="color:#24292E;">     $adjacency</span></span>
<span class="line"><span style="color:#24292E;">       in (&quot;top&quot;: &quot;left&quot;, &quot;bottom&quot;: &quot;right&quot;, &quot;left&quot;: &quot;bottom&quot;, &quot;right&quot;: &quot;top&quot;)</span></span>
<span class="line"><span style="color:#24292E;">   {</span></span>
<span class="line"><span style="color:#24292E;">     &amp;[</span><span style="color:#6F42C1;">data-popper-placement</span><span style="color:#D73A49;">^=</span><span style="color:#032F62;">&quot;#{$placement}&quot;</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">       .#{$</span><span style="color:#005CC5;">namespace</span><span style="color:#24292E;">}-popper__arrow</span><span style="color:#6F42C1;">::before</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#005CC5;">border-</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">placement</span><span style="color:#24292E;">}-color: transparent;</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#22863A;">border-</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">adjacency</span><span style="color:#24292E;">}-color: transparent;</span></span>
<span class="line"><span style="color:#24292E;">       }</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br></div></div><ul><li>tag.scss</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> &quot;./mixins/mixins.scss&quot; as *;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@include</span><span style="color:#E1E4E8;"> b(tag) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: 64px;</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: 29px;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">margin-right</span><span style="color:#E1E4E8;">: 15px;</span></span>
<span class="line"><span style="color:#E1E4E8;">  color: </span><span style="color:#FDAEB7;font-style:italic;">#e8f4ff;</span></span>
<span class="line"><span style="color:#E1E4E8;">  background: </span><span style="color:#FDAEB7;font-style:italic;">#0c2647</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">box-shadow</span><span style="color:#E1E4E8;">: inset 0px 0px 3px 0px </span><span style="color:#FDAEB7;font-style:italic;">#277cf0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">border-radius</span><span style="color:#E1E4E8;">: 6px;</span></span>
<span class="line"><span style="color:#E1E4E8;">  border: 1px solid </span><span style="color:#FDAEB7;font-style:italic;">#277cf0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@include</span><span style="color:#E1E4E8;"> m(success) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#FDAEB7;font-style:italic;">#e8f4ff;</span></span>
<span class="line"><span style="color:#E1E4E8;">    background: rgba(0, 255, 83, 0</span><span style="color:#B392F0;">.3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">box-shadow</span><span style="color:#E1E4E8;">: inset 0px 0px 2px 0px </span><span style="color:#FDAEB7;font-style:italic;">#00ff53</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">border-radius</span><span style="color:#E1E4E8;">: 6px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    border: 1px solid </span><span style="color:#FDAEB7;font-style:italic;">#00ff53</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@include</span><span style="color:#E1E4E8;"> m(info) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#FDAEB7;font-style:italic;">#e8f4ff;</span></span>
<span class="line"><span style="color:#E1E4E8;">    background: rgba(75, 75, 75, 0</span><span style="color:#B392F0;">.68</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">box-shadow</span><span style="color:#E1E4E8;">: inset 0px 0px 2px 0px </span><span style="color:#FDAEB7;font-style:italic;">#76b2c9</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">border-radius</span><span style="color:#E1E4E8;">: 6px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    border: 1px solid </span><span style="color:#FDAEB7;font-style:italic;">#cacaca;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@include</span><span style="color:#E1E4E8;"> m(danger) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#FDAEB7;font-style:italic;">#e8f4ff;</span></span>
<span class="line"><span style="color:#E1E4E8;">    background: rgba(255, 58, 0, 0</span><span style="color:#B392F0;">.52</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">box-shadow</span><span style="color:#E1E4E8;">: inset 0px 0px 2px 0px </span><span style="color:#FDAEB7;font-style:italic;">#ff3a00;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">border-radius</span><span style="color:#E1E4E8;">: 6px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    border: 1px solid </span><span style="color:#FDAEB7;font-style:italic;">#ff3a00;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> &quot;./mixins/mixins.scss&quot; as *;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@include</span><span style="color:#24292E;"> b(tag) {</span></span>
<span class="line"><span style="color:#24292E;">  width: 64px;</span></span>
<span class="line"><span style="color:#24292E;">  height: 29px;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">margin-right</span><span style="color:#24292E;">: 15px;</span></span>
<span class="line"><span style="color:#24292E;">  color: </span><span style="color:#B31D28;font-style:italic;">#e8f4ff;</span></span>
<span class="line"><span style="color:#24292E;">  background: </span><span style="color:#B31D28;font-style:italic;">#0c2647</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">box-shadow</span><span style="color:#24292E;">: inset 0px 0px 3px 0px </span><span style="color:#B31D28;font-style:italic;">#277cf0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">border-radius</span><span style="color:#24292E;">: 6px;</span></span>
<span class="line"><span style="color:#24292E;">  border: 1px solid </span><span style="color:#B31D28;font-style:italic;">#277cf0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@include</span><span style="color:#24292E;"> m(success) {</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#B31D28;font-style:italic;">#e8f4ff;</span></span>
<span class="line"><span style="color:#24292E;">    background: rgba(0, 255, 83, 0</span><span style="color:#6F42C1;">.3</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">box-shadow</span><span style="color:#24292E;">: inset 0px 0px 2px 0px </span><span style="color:#B31D28;font-style:italic;">#00ff53</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">border-radius</span><span style="color:#24292E;">: 6px;</span></span>
<span class="line"><span style="color:#24292E;">    border: 1px solid </span><span style="color:#B31D28;font-style:italic;">#00ff53</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@include</span><span style="color:#24292E;"> m(info) {</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#B31D28;font-style:italic;">#e8f4ff;</span></span>
<span class="line"><span style="color:#24292E;">    background: rgba(75, 75, 75, 0</span><span style="color:#6F42C1;">.68</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">box-shadow</span><span style="color:#24292E;">: inset 0px 0px 2px 0px </span><span style="color:#B31D28;font-style:italic;">#76b2c9</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">border-radius</span><span style="color:#24292E;">: 6px;</span></span>
<span class="line"><span style="color:#24292E;">    border: 1px solid </span><span style="color:#B31D28;font-style:italic;">#cacaca;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@include</span><span style="color:#24292E;"> m(danger) {</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#B31D28;font-style:italic;">#e8f4ff;</span></span>
<span class="line"><span style="color:#24292E;">    background: rgba(255, 58, 0, 0</span><span style="color:#6F42C1;">.52</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">box-shadow</span><span style="color:#24292E;">: inset 0px 0px 2px 0px </span><span style="color:#B31D28;font-style:italic;">#ff3a00;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">border-radius</span><span style="color:#24292E;">: 6px;</span></span>
<span class="line"><span style="color:#24292E;">    border: 1px solid </span><span style="color:#B31D28;font-style:italic;">#ff3a00;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,22),o=[e];function c(r,t,E,i,y,b){return n(),a("div",null,o)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
