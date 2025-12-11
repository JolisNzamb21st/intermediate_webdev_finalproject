const HtmlWebpackPlugin = require('html-webpack-plugin');
const { library } = require('webpack');
module.exports = {
    mode: "development",
    entry: "./src/script.js",
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          favicon: './src/favicon.ico',   
        }),
    ],
    output: {
        clean: true,
        libraryTarget: 'window'
    },
    module: {
        rules:[
            {
                test:/\.(css)$/i,
                type:"asset/resource",
                generator: {
                    filename: "[name][ext]",
                },
            },
        ],
    },
};