//定义compiler 
class Compiler {
  constructor(options) {
    const { entry, output } = options
    this.entry = entry;
    this.output = output;
    this.module = [];
  }
  //构建
  run () { }
  //重写require函数， 输出bundle
  generate () { }
}

//解析入口文件，获取ast
//webpack.config.js
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  }
}



