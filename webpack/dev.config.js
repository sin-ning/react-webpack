
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        // "webpack-dev-server/client?http://0.0.0.0:8080/",
        // "webpack/hot/only-dev-server",
        // "webpack/hot/dev-server",
        "babel-polyfill",
        "./src/entry/index.jsx"
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        chunkFilename: '[id].chunk.js',
        // publicPath: '/assets/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.less/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[name]_[hash:base64:5]',
                    'less?sourceMap'
                ]
            },
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=stage-0&presets[]=react'], // 'babel-loader' is also a legal name to reference
                // query: {
                //     presets: ["react", "es2015", "stage-0"]
                // }
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        // }),
        new webpack.optimize.CommonsChunkPlugin('shared.js'),
        // extract inline css into separate 'styles.css'
        // new ExtractTextPlugin('styles.css')
    ]
};


