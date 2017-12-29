# www-phone

>云中实验室的vue手机版本

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 代码开发规范
## 命名规范
class 样式: 页面 + 信息 如 index-senction ，details-section 
只做js操作dom 的class： 具体的 className + hook  如 details-course-list-hook
变量命名采用小驼峰命名 如 courseList
## css
采用的是less,语法如下
 .parent {
   .children1 {...}
   .children2 {...}
   ...
 }
## js
采用es6
## eslint
可以用 tab 缩进
可以用 tab 和 space 混合打空格 
语句结束使用 ; 如 i++;
函数名字和 (), 要用空格 隔开，如 data () {...}
箭头函数，箭头符号两边 用空格隔开 如， (res) => {...}, 参数需要用 () 包住
定义变量要用空格隔开 如 courseList: []
空行最多不能超过3行 
变量声明就要使用
调用变量前必须声明
禁止使用行尾空格
圆括号內使用一致的空格


