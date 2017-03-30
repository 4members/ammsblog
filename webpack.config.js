var webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: __dirname + "/dist/assets/",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: 'index.js',
        port: 8080

    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ["babel-loader"],

          }

        ]
    },
    resolve:{
      alias: {
   'pg-native': path.join(__dirname, 'aliases/pg-native.js')
  }
},


    node:{
      tls: "empty",
      net: "empty",
      dns : "empty",
      fs: "empty"

    }

}
