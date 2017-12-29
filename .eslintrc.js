// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'indent':[0, 'tab'],
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    "semi": [0,';'],
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': 0,
    // 强制箭头函数的箭头前后使用一致的空格
    "arrow-spacing": 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle':0,
    // 空行最多不超过三行
    "no-multiple-empty-lines": [0, {"max": 3}],
    // 变量声明就要使用
    "no-unused-vars": 2,
    // 调用变量前必须声明
    "no-use-before-define": 2,
    // 禁止使用行尾空格
    "no-trailing-spaces": 2,
    // 圆括号內使用一致的空格
    "space-in-parens": 0,
  }
}
