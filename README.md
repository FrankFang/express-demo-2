# 使用方法

```
git clone git@github.com:FrankFang/express-starter-1.git <你的目录名>
cd <你的目录名>
yarn install
yarn global add ts-node
node app.js # or ts-node app2.ts
```

注意，如果你需要初始化当前目录，直接用 `.` 代替 `<你的目录名>` 即可。如果当前目录不是空目录，需要先清空当前目录。

# 上传到其他仓库

```
git remote set-url origin 新仓库的地址
git push -u origin master
```
