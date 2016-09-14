/**
 *
 *
 * @type {webpack}
 */

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

config.entry.unshift("webpack-dev-server/client?http://localhost:3000/");
config.entry.unshift("webpack/hot/only-dev-server");

var compiler = webpack(config);

// config.entry.unshift("webpack/hot/only-dev-server");
var server = new webpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './src/entry',
    stats: { colors: true },
    // proxy: {
    //     "*": "http://localhost:9000" // 用于转发api数据，但webpack自己提供的并不太好用
    // },
});



server.listen(3000, "127.0.0.1", function(err) {
    if(err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000...');
});
