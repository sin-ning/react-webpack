# react-webpack


## 环境准备

先安装依赖

```bash
$ npm install
```

想要更好的开发体验，还需安装两个 Chrome 插件：[Redux DevTools](https://chrome.google.com/webstore/detail/lmhkpmbekcpmknklioeibfkpmmfibljd) 和 [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) 。

## 启动调试

```bash
$ npm start
$ open http://localhost:3000/
```

## 构建代码

```bash
$ npm run build

// 构建但不压缩
$ npm run build -- --no-compress
```


## 目录结构

```
.
├── /dist/               # 构建输出的文件会在这里
├── /node_modules/       # 第三方类库和工具
├── /webpack/                # 应用源码
├── /src/                # 应用源码
│ ├── /components/       # React components
│ ├── /entries/          # 应用入口
│ ├── /layouts/          # 布局信息
│ ├── /reducers/         # reducers
│ ├── /routes/           # 路由信息
│ ├── /sagas/            # redux-sagas
│ └── /services/         # 处理和服务器的交互
├── proxy.config.js      # 配置 dora-plugin-proxy，用于 mock 和在线调试
├── webpack.config.js    # 扩展 webpack 配置
└── package.json         # 配置入口文件、依赖和 scripts
```

## 系统组织

![](https://camo.githubusercontent.com/068c4ff126977b861cff3338428bdde6927f7dad/68747470733a2f2f6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f43684d775a42755a6c614c725377652e706e67)

详见：[React + Redux 最佳实践](https://github.com/sorrycc/blog/issues/1)

## 内置类库

- [react](https://github.com/facebook/react)
- [redux](https://github.com/reactjs/redux)
- [redux-saga](https://github.com/yelouafi/redux-saga)
- [redux-actions](https://github.com/acdlite/redux-actions)
- [react-router](https://github.com/reactjs/react-router)
- [classnames](https://github.com/JedWatson/classnames)
- [react-host-loader](https://github.com/matthew-andrews/isomorphic-fetch)
- [react-router](https://github.com/reactjs/react-router)
- [react-router-redux](https://github.com/reactjs/react-router-redux)


热替换和 LiveReload

> 基于 [Webpack Vanilla HMR](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)，支持 `components`, `reducers`, `routers`, `sagas`, `layouts` 目录的模块热替换，其余目录的修改则会自动刷新页面。

> CSS 的自动刷新需通过 [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) Chrome 插件配合使用。

> - [Why Vanilla HMR](https://github.com/reactjs/redux/pull/1455)

支持 css-modules

> 所有 less 文件会被解析为 css-modules


自动引入 `reducer` 和 `saga`

> 通过 webpack 的 `require.context` 黑魔法批量引入 `reducer` 和 `saga`，新增、删除和重命名时会更方便

