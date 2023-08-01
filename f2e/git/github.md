# 使用 GitHub Actions 自动部署

[GitHub Actions](https://github.com/features/actions) 是 GitHub 的持续集成服务

### 配置 Secrets

> Action 需要有操作仓库的权限

GitHub 官方的帮助文档：[创建用于命令行的个人访问令牌](https://help.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

打开需要配置 Actions 的仓库，进入 `Settings/Secrets` 页面，配置 `ACCESS_TOKEN` 变量，储存内容为刚刚创建的个人访问令牌

### 编写 `workflow` 文件

1. 点击仓库的 `Actions` 按钮
2. 点击 `Set up a workflow yourself` 按钮
3. 复制如下内容

```yml

name: Github Pages Deploy

# 触发构建动作
#    push:
#        # 触发构建分支[默认分支]
#        branches: [ $default-branch ]
#    pull_request:
on:
    push:
        # 以下 分支有 push 时触发
        branches:
            - master
            - main
            - feature/major-dev

env: # 设置环境变量
    TZ: Asia/Shanghai # 时区

# 作业是在同一运行服务器上执行的一组步骤
jobs:
    # 作业名称
    deploy:
        # 运行器（这里是Ubuntu系统）
        runs-on: ubuntu-latest
        # 步骤是可以在作业中运行命令的单个任务
        # 步骤可以是操作或 shell 命令
        steps:
            # 检出推送的代码
            -   name: Checkout - 检出代码
                uses: actions/checkout@v3

            # 使用pnpm
            -   name: Setup pnpm
                uses: pnpm/action-setup@v2

            # Node版本
            -   name: Setup Node.js v16
                uses: actions/setup-node@v3
                with:
                    node-version: 16
                    cache: 'pnpm'

            # 安装依赖
            -   name: Install NodeModules - 安装依赖
                run: pnpm install

            # 打包
            -   name: Build - 打包
                run: pnpm run build

            # 打包结果
            -   name: Build Status - 打包结果
                run: cd .vitepress/dist && ls -ll

            # 部署
            -   name: Deploy - 部署
                uses: peaceiris/actions-gh-pages@v3 # 使用部署到 GitHub pages 的 action
                with:
                    github_token: ${{ secrets.GAOTER_TOKEN }} # github_token，仓库secrets配置
                    publish_dir: .vitepress/dist  # 部署打包后的 dist 目录

```

详细教程可以参考阮一峰老师的[GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

[GitHub Actions 中文文档](https://docs.github.com/cn/actions/reference)