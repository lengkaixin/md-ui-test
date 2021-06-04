# lerna_demo

> 在发布前所有的改动都必须提交 git commit

1. 统一发布所有子包 `lerna publish`
2. 单独发布子包（lerna 可以只发布修改的子包） `lerna publish`
3. 发布整包

## 发布失败解决的两种方案

- `lerna publish from-git`
- `git reset --hard HEAD~1 && git tag -d $(git log --date-order --tags --simplify-by-decoration --pretty=format:'%d' | head -1 | tr -d '()' | sed 's/, * tag://g')`

## Getting Started

Install dependencies,

```bash
$ npm i
```

```
// 为 packages 安装依赖

npm run bootstrap
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build` ,

```bash
$ npm run build
```

publish

```bash
$ npm run pub
```

## Notes

### workspace

原文地址： https://juejin.cn/post/6844903749232623629

lerna 与 yarn 的 workspace 特性很好的融合在了一起，前者负责版本管理与发布，后者负责依赖管理。

workspace 的特点：在所有 workspaces 所匹配的项目路径下会执行统一的 yarn 命令，包含测试、安装依赖或执行脚本。

在 lerna 中启用 workspace：

```
lerna.json中lerna的设置
{
  ...
  "npmClient": "yarn",
  "useWorkspaces": true,
  ...
}
```

lerna 与 yarn workspace 有很好的相性，设置 useWorkspaces 等价于使用 bootstrap 命令的--use-workspaces 选项，详情见[bootstrap](https://github.com/lerna/lerna/blob/main/commands/bootstrap/README.md#--use-workspaces)

```
根目录下的package.json
{
  ...
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  ...
}
```
