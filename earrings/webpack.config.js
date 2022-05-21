const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');



module.exports = {
    entry: './earrings3D/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './tryon.html'}),
        new webpack.ProvidePlugin({
            THREE: 'three'
        }),
        new CopyWebpackPlugin([
            './earrings3D/assets/**',
            './webar/**',
            './neuralNets/**',
            './libs/**',
            './helpers/**'

        ])
    ]
};