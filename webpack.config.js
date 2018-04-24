const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline",
    devServer: {
        contentBase: __dirname + '/dist/index.html',
        hot: true,
        port: 9000
    },
    entry: {
        app:"./src/app.tsx",
        // vendor: ["react", "react-dom"]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'babel-loader',
                    options: { plugins: ['react-hot-loader/babel'] }
                }, {
                    loader: 'ts-loader',
                    options: { transpileOnly: true }
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: { sourceMaps: true }
                }, {
                    loader: "sass-loader",
                    options: { sourceMaps: true }
                }]
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader',
                    options: { limit: 100000 }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Rouge Like',
            template: './src/index.html',
            filename: 'index.html',
            // favicon: 'src/favicon.ico'
        }),
        // For HMR, makes it easier to see which dependencies are being patched
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

}