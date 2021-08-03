/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-07-17 16:09:16
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-07-25 10:19:46
 * @FilePath     : /webpack2021/webpack.config.js
 */


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');




module.exports = {
    // 如果是单入口， chunk 的就叫 main, 每个 chunk 一般会产生一个入口文件
    // entry: './src/index.js', // 入口文件
    entry: { // 多入口
        index: './src/index.js',
        // login: './src/login.js',
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'), // 输出目录，必须是绝对路径
        filename: '[name].[hash].js', // 三种 hash: hash, chunkHash, contentHash 
        publicPath: '/', // 资源根路径，浏览器访问资源的时候从什么路径访问 /
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // 这是我们产出的文件
    },
    // loader 配置
    module: {
        rules: [
            {
                test: /\.css$/,
                // 从右向左处理 css 文件， loader 是一个函数
                use: [
                    // 'style-loader', // 负责生成一个 <style /> 并插入到页面
                    MiniCssExtractPlugin.loader,
                    'css-loader', // 负责处理 css 文件，包括图片路径
                ],
            },
            {
                test: /\.png$/,
                use: ['file-loader'], // file loader 负责把文件拷到 dist 目录，然后返回一个 publicPath 下的路径
            },
            {
                test: /\.(jpg|png|jpeg|svg|gif)$/,
                use: {
                    loader: 'url-loader', // url-loader 内置了 file-loader
                    options: {
                        limit: 10 * 1024, // 如果图片小于 10kb 则将图片转成 base64 编码内联到 html 网页上
                    }
                }
            }
        ]
    },
    // plugin 配置
    plugins: [
        // 这个插件就是产出 html 文件, 在编译的时候， 会读取模板文件
        new HtmlWebpackPlugin({
            template: './src/index.html', // html 模板文件， 插入产出脚本 bundle.js
            filename: 'timo.html',
            hash: true, // 为了避免缓存，可在产出的后面加 hash
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    // optimization: {
    //     minimizer: [
    //         new TerserWebpackPlugin({
    //             parallel: true,
    //             cache: true
    //         })
    //     ]
    // }

}
