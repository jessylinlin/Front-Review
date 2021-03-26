
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.export = {
  //单页面入口
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  //loader
  modlues: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }]
  },
  //plugins
  plugins: [new HtmlWebpackPlugin([{ template: './src/index.html' }])],
  mode: 'production',
  pollifill: ''
}

//单页面
module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js'
  }
}


//app和第三方库入口

//entry
module.exports = {
  entry: {
    main: './src/app.js',
    vendor: './src/search.js'
  }
}
//webpack.prod.js
module.exports = {
  output: {
    filename: '[name].[contenthash].bundle.js'
  }
}

//webpack.dev.js
module.exports = {
  output: {
    filename: '[name].bundle.js'
  }
}

//多页应用
//webpack.config.js
module.exports = {
  entry: {
    page1: './src/page1/index.js',
    page2: './src/page2/index.js',
    page3: './src/page3/index.js'
  }
}

//输出
//多入口
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  // 写入到硬盘：./dist/app.js, ./dist/search.js
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}

//cdn + hash
//config.js
module.exports = {
  output: {
    path: '/home/proj/cdn/assets/[fullhash]',
    publicPath: 'https://cdn.example.com/assets/[fullhash]'
  }
}


//loader
//npm install --save-dev css-loader ts-loader
//指示 webpack 对每个 .css 使用 css-loader，以及对所有 .ts 文件使用 ts-loader：
//webpack.config.js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
}

//从右往左执行
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}

//plugin
//webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\css.js$/,
        use: 'css-loader'
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

//部署目标
//webpack.config.js
const path = require('path')
const serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  }
}
const clientConfig = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js'
  }

}
module.exports = {
  serverConfig,
  clientConfig
}