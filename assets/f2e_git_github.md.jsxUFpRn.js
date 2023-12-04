import{_ as s,o as a,c as n,R as i}from"./chunks/framework.aAb_t1_d.js";const g=JSON.parse('{"title":"使用 GitHub Actions 自动部署","description":"","frontmatter":{},"headers":[],"relativePath":"f2e/git/github.md","filePath":"f2e/git/github.md"}'),l={name:"f2e/git/github.md"},p=i(`<h1 id="使用-github-actions-自动部署" tabindex="-1">使用 GitHub Actions 自动部署 <a class="header-anchor" href="#使用-github-actions-自动部署" aria-label="Permalink to &quot;使用 GitHub Actions 自动部署&quot;">​</a></h1><p><a href="https://github.com/features/actions" target="_blank" rel="noreferrer">GitHub Actions</a> 是 GitHub 的持续集成服务</p><h3 id="配置-secrets" tabindex="-1">配置 Secrets <a class="header-anchor" href="#配置-secrets" aria-label="Permalink to &quot;配置 Secrets&quot;">​</a></h3><blockquote><p>Action 需要有操作仓库的权限</p></blockquote><p>GitHub 官方的帮助文档：<a href="https://help.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line" target="_blank" rel="noreferrer">创建用于命令行的个人访问令牌</a></p><p>打开需要配置 Actions 的仓库，进入 <code>Settings/Secrets</code> 页面，配置 <code>ACCESS_TOKEN</code> 变量，储存内容为刚刚创建的个人访问令牌</p><h3 id="编写-workflow-文件" tabindex="-1">编写 <code>workflow</code> 文件 <a class="header-anchor" href="#编写-workflow-文件" aria-label="Permalink to &quot;编写 \`workflow\` 文件&quot;">​</a></h3><ol><li>点击仓库的 <code>Actions</code> 按钮</li><li>点击 <code>Set up a workflow yourself</code> 按钮</li><li>复制如下内容</li></ol><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Github Pages Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 触发构建动作</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    push:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#        # 触发构建分支[默认分支]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#        branches: [ $default-branch ]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    pull_request:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 以下 分支有 push 时触发</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">master</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">feature/major-dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置环境变量</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    TZ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Asia/Shanghai</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 时区</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 作业是在同一运行服务器上执行的一组步骤</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 作业名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 运行器（这里是Ubuntu系统）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 步骤是可以在作业中运行命令的单个任务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 步骤可以是操作或 shell 命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 检出推送的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            -   </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout - 检出代码</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 使用pnpm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            -   </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup pnpm</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm/action-setup@v2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # Node版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            -   </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Node.js v16</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                    node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                    cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pnpm&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            -   </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install NodeModules - 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 打包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            -   </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build - 打包</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm run build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 打包结果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            -   </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build Status - 打包结果</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cd .vitepress/dist &amp;&amp; ls -ll</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 部署</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            -   </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy - 部署</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">peaceiris/actions-gh-pages@v3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 使用部署到 GitHub pages 的 action</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                    github_token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.GAOTER_TOKEN }}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # github_token，仓库secrets配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                    publish_dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.vitepress/dist</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 部署打包后的 dist 目录</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>详细教程可以参考阮一峰老师的<a href="http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html" target="_blank" rel="noreferrer">GitHub Actions 入门教程</a></p><p><a href="https://docs.github.com/cn/actions/reference" target="_blank" rel="noreferrer">GitHub Actions 中文文档</a></p>`,11),e=[p];function h(t,k,r,E,c,d){return a(),n("div",null,e)}const u=s(l,[["render",h]]);export{g as __pageData,u as default};