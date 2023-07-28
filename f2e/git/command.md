# git 命令大全


## 各区域理解
::: tip 各区域理解

- 工作区（working directory）：本地工作目录，进行代码书写和编辑的地方，例如 vscode 打开的工作目录

- 暂存区（stage area，又称索引区 index）：每次执行git add后会存储到该区域，用来与本地仓库之间做一个缓存

- 本地仓库（local repository）：当执行git commit命令后，会将暂存区内容提交到该仓库。工作区的.git 目录下的 refs/heads 目录，存储的就是本地分支的代码信息。这里可以使用git merge或git rebase将远程仓库副本合并到本地仓库

- 远程仓库副本：存储在本地的远程仓库缓存。工作区的.git 目录下的 refs/remotes 目录，存储的就是远程仓库的分支信息。如需更新，通过git fetch或git pull实现，git fetch获取时，并未合并到本地仓库，需要通过git merge/rebase操作实现远程仓库副本和本地仓库的合并

- 远程仓库（remote repository）：代码提交最终的归宿，通过 pull/push 实现本地仓库与远程仓库的交互

:::
## git stash
用于想要保存当前的修改，又想回到之前最后一次提交的干净的工作仓库进行操作的情况。（执行该代码后，所有 commit 代码都会从暂存的工作区移除，回到上次 commit 时的状态）例如你在修改本地代码，突然另一个分支存在问题，可以先暂存，然后修改另一个分支，最后通过 git stash pop 恢复代码，继续搬砖

```sh
## 暂时保存没有提交的工作
git stash save xxx  
## 列出所有暂时保存的工作
git stash list 
## 用于检查/校验
git stash show  
## {0}获取最新存储，{1}获取次新，{2.hour.ago}获取两小时之前的
git stash apply stash@{0}   
## 恢复最近一次 stash 文件
git stash pop   
## 丢弃最近一次 stash 文件
git stash drop   
## 丢弃某次 stash 文件
git stash drop stash@{1}   
## 删除所有 stash
git stash clear    
```

# 命令解析
## git --version
```sh
## 查看版本
git --version 
```
## git config
```sh 
## 提交人姓名 配置提交人信息
 git config --global user.name 
 ## 提交人邮箱 配置提交人邮箱
 git config --global user.email 
 ## 查看 git 配置信息，或者查看 C:\Users\dell' 目录下的 .gitconfig 文件，并进行编辑保存
 git config --list 

```

## git clone
```sh
## 仓库代码到本地，默认停留在 master 分支
git clone xxx.git clone 
## 仓库代码到本地，自动切换到 branch1 分支
git clone xxx.git -b branch1 clone 
```
## git init
```sh
## 初始化 git 仓库，除了从远程仓库 clone 代码，我们也可以初始化一个 git 仓库，此时 init 的仓库无法和远程仓库进行交互
git init 

 ```
## git remote
```sh
## 添加一个远程版本库关联
git remote add [alias] [url]  
## 删除某个远程版本库关联
git remote rm [alias]  
## 比如此时有个本地初始好的仓库，和一个创建好的远程仓库，两者进行关联
git remote add origin xxx.git   git push -u origin master
```

## git branch
```sh
## 查看本地所有分支信息
git branch 
## 查看远程仓库所有分支
git branch -r 
## 查看本地和远程仓库所有分支
git branch -a 
## 创建分支
git branch 分支名称 
## 切换分支
git checkout 分支名称 
## 以当前分支为基准，创建一个新的分支，并切换过去
git echeckout -b branch1 
## 合并分支
git merge 来源分支 
## 分支被合并后删除
git branch -d 分支名称   
## 分支没有被合并，想要强制删除
git branch -D 分支名称   
```
## git add
```sh
## 添加一个或多个文件到暂存区
git add [file1] [file2]  
## 把当前目录所有改动的文件都添加到暂存区
git add .  
## 把当前仓库所有改动的文件都添加到暂存区
git add -A   
```

## git commit
```sh
## 将暂存区的内容提交到本地 git 仓库中。
## 如果没有强制要求git add和git commit一定要分开，可以使用git commit -am提交，方便快捷

git commit [file1] ... -m [message] 
```

## git push
```sh
## 推送到远程仓库
git push 
## 将本地刚建好的分支推送到远端并建立关联关系（如果远端存在相同分支：没有冲突，可以关联成功并提交你的改动；有冲突，提交命令报错，需要先 git pull(git pull origin branch1)同名分支代码，解决冲突，再提交）
git push --set-upstream origin branch1 
```

## git pull、git fetch
```sh
## 从远程获取最新版本到本地，不会自动合并
git fetch 
## 从远程获取最新版本并 merge 到本地
git pull 
```
## git status
```sh
## 查看当前文件状态
git status 

```
## git diff
```sh

##查看尚未缓存的改动
git diff  
## 查看已缓存的改动
git diff --cached  
## 查看未缓存和已缓存的所有改动
git diff HEAD  
## 显示摘要而非整个 diff
git diff --stat  

```


## git rm
```sh

## 如果某个需要被 git 忽略的文件不小心提交到了 git 本地仓库，需要从本地仓库中删除提交记录；如果只是简单的手动从本地工作目录中删除，执行git status时会报错
## 从 git 仓库中删除文件
git rm 文件名称  
## 如果删除之前修改过，并已经提交放入缓存区，使用-f 强制删除
git rm -f 文件名称  
## 把文件从缓存区删除，仍希望文件保存在工作目录
git rm --cached 文件名称  
## 从 git 仓库中删除某个目录，如果需要删除某个目录，添加上-r (递归删除，删除某个目录的所有子目录及文件)修饰就可以了
git rm -r dist  


```
## git mv
```sh
## 用于移动或重命名一个文件、目录或软链接
git mv test.txt newtest.txt  

```
## git log

```sh
## 查看提交历史
git log --oneline  
         --oneline,历史记录的简洁版本；
         --graph，查看历史记录中什么时候出现了分支，什么时候出现了合并；
         -reverse，逆向显示所有日志；
         --author，查找指定用户的提交日志；
         --since/--before/--until/--after 执行筛选日期；
         --no-merges,选项以隐藏
## 在使用 git log 查看日志找不到的情况下
git reflog  

```
## git reset、git revert
```sh
## 取消之前git add提交的缓存内容(HEAD，当前版本; HEAD^，上一版本; HEAD^^，上上一版本;HEAD^^^，上上上一版本; HEAD~n，撤回 n 个版本)
git reset HEAD 
## 版本号 回退版本库。撤回后所有目录都放入缓存区(发现之前的提交有错误的代码，推荐使用--soft 命令处理)
git reset --soft
## 回退版本库、暂存区。撤回后所有目录都放入工作区 
git reset --mixed 版本号 
## 回退版本库、暂存区、工作区。撤回并清空工作目录及缓存区所有修改
git reset --hard 版本号
## 取消之前提交的 test.txt
git reset HEAD test.tx  
##  回滚到对应的 commit-id，删除该 commit-id 之后的所有提交，并不会产生新的提交记录，推送到远程服务器的话，需要使用-f 强制推送
git reset   
## 反做撤销 commit-id，重新生成一个新的 commit-id,并不会对之前的提交记录产生影响，推送到远程服务器直接使用 git push 即可
git revert   


```
## git cherry-pick
```sh
## 在 master 分支上改了代码，并提交到本地仓库，使用该命令执行分支的指定提交合并到当前分支
git cherry-pick 忘记切换分支，

```

## git tag
```sh
## 轻量级标签
git tag v1.0.0 
## 注释标签
git tag -a v1.0.1 -m '发布的版本1.0.1'   

````

