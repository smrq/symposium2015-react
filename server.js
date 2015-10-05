const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

config.entry.unshift(
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/dev-server'
);
config.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
	hot: true,
	contentBase: 'public',
	historyApiFallback: true
});
server.listen(8080);
