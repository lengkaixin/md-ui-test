# lerna_demo

1. 统一发布所有子包 `lerna publish`
2. 单独发布子包（lerna 可以只发布修改的子包） `lerna publish`
3. 发布整包

发布失败解决的两种方案

- `lerna publish from-git`
- `git reset --hard HEAD~1 && git tag -d $(git log --date-order --tags --simplify-by-decoration --pretty=format:'%d' | head -1 | tr -d '()' | sed 's/,* tag://g')`

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
