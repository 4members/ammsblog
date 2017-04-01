var webpack = require('webpack')

module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: __dirname + "/dist/assets/",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        port: 8080,
        contentBase: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: ["babel-loader"],
        }]
    },
    resolve: {
        alias: {
            'pg-native': 'aliases/pg-native.js'
        }
    },
    node: {
        tls: "empty",
        net: "empty",
        dns: "empty",
        fs: "empty"
    }
}
