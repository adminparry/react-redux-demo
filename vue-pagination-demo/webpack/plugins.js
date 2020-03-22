const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const root = path.join(__dirname, '..')
module.exports = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(root, 'index.html'),
        inject: 'false',
    })
]
