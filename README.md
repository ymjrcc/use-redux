# start_react_with_webpack

------

这是一个用 webpack 配置好的空项目。clone 后可以很方便用 React 直接开始写项目。

app 文件夹放置开发源代码。，main.js 为项目入口文件；
build 文件夹放置 webpack 生成的文件，build 中 bundle.js 为源代码打包文件，vendor.js 为第三方库打包文件。
clone 后进入项目根目录， npm install，再 npm run dev，浏览器打开 localhost:8083，就可以愉快地开始撸项目了！代码每次保存都可以实时热更新。
项目写完后，npm run build 自动打包。

该项目使用了 CSS Modules 实现 CSS 模块化。
打包时，CSS、第三方库、js 源代码分别打包。
项目依赖的其他第三方库参看 package.json。
