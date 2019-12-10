module.exports = {
  'env': {                                  //指定要启用的环境
    'browser': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': 'babel-eslint',
  'parserOptions': {                      //指定想要支持的JS语言选项
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    /**
     * off 或 0：表示不验证规则。
     * warn 或 1：表示验证规则，当不满足时，给警告
     * error 或 2 ：表示验证规则，不满足时报错
     */

    ///////////////////////////
    // 代码风格及规范限制.相关 //
    ///////////////////////////

    'no-console': 0,             //不禁用console
    'no-debugger': 2,            //禁用debugger
    'semi': 2,                   //强制使用分号
    'no-unused-vars': 0,         //允许出现未使用的变量
    'require-jsdoc': 0,          //不强制使用jsdoc
    'indent': ['error', 4],      //四个空格缩进
    'linebreak-style': ['error', 'windows'],    //强制使用统一的换行符

  },
  'settings': {
    'import/ignore': [
      'node_modules'
    ]
  }
};
