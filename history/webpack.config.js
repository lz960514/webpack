const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: "./src/index.js", // string | object | array  // 这里应用程序开始执行
    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname, "dist", "script"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "bundle.[hash:8].js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 8088,
        progress: true,
        hotOnly: true,
        open: true,
        https: false,
        compress: true //  gzip压缩
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', //模板文件
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true, //删除所有注释及双引号
                collapseWhitespace: true,
            },
            hash: true
        })
    ]
}