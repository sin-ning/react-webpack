
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: [
        "babel-polyfill",
        "./src/entry/index.jsx"
    ],
    // entry: {
    //     babel: "babel-polyfill",
    //     index: "./src/entry/index.jsx",
    //     react: ['react']
    // },
    output: {
        path: path.join(__dirname, '..', 'dist') ,
        filename: 'index.js',
        chunkFilename: '[id].chunk.js',
        publicPath: ''
    },
    module: {
        loaders: [
            { test: /\.less$/, loaders: ["less-loader", "less"] },
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ["react", "es2015", "stage-0"]
                }
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new DashboardPlugin(),
        new webpack.optimize.CommonsChunkPlugin('shared'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'src', 'entry', 'index.html'),
            inject: 'body',
            filename: 'index.html'
        }),
    ]
};


