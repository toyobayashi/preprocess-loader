const webpack = require('webpack')
const path = require('path')

webpack({
  mode:'development',
  entry: path.join(__dirname, 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: path.join(__dirname, '../loader.js'),
        options: {
          defines: {
            TEST_MACRO: 88,
            SUB: ''
          }
        }
      }
    ]
  }
}, (err, stat) => {
  console.log(stat.toString({colors:true}))
})
