# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？

请直接在这里作答。

答：
1.克隆远程仓库
git clone url [dirname]
如果没有.gitignore,新建一个,我这边项目就往里面写了/.idea/   /.gitignore  /target/
2.自己仓库写了代码之后
    git add .
    git commit -m '提交信息'   想覆盖上次提交就git commit --amend -m '提交信息'   暂存和合并步骤合并git commit -am '提交信息'(没有跟踪过的这两步不能一起)
    git pull origin master 只有一个分支就git pull
    出现冲突就修改，然后git add 修改的文件(我一般直接.)
    git push

    其他使用：
    git log查看每次提交详情  参数--oneline简化提交详情   --pretty=oneline稍微多一点的提交详情
    git rm --cached [-r]忽略的文件，只删除跟踪索引，不删除文件   加上-r表示递归删除文件夹索引
    当gitignore无效时，往往是因为添加的忽略项已经被跟踪，这时候就要删除索引，用到git rm --cached [-r]
    git reset HEAD^ 回档，HEAD表示上一次提交，一个^表示再上一次，^^就继续再上一次，也可以HEAD~2
    git remote -v查看远程仓库地址
    git remote get-url origin 查看远程origin仓库地址
    git remote set-url origin url 设置远程origin仓库
    git branch查看本地分支
    git branch name新建本地分支
    git checkout name切换本地分支  或者git checkout -b name新建并切换本地分支   git checkout origin/name切换远程分支
    git branch -d name
目前差不多就只会这些,其他使用里面，大部分也都很少用


## Q2

你知道和用过哪些 Git 的方法论和技巧

答：
印象深刻一点的就是之前为了添加gitignore内容，直接用了git rm --cached .然后所有索引都没了。。结果提交了几百个文件上去，把同事吓了一跳

idea里面我记得在工作区可以看每一行代码的历史提交状态，包括什么时候最新提交，谁提交的
不知道vscode有没有这个功能或者插件

其他的在Q1中提到了些，都是些命令的基本使用
目前的公司提倡使用sourcetree,不过我还是觉得应该先用好git基本命令，所以版本管理工具的功能了解的还是很少