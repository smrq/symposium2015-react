const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NpmImportPlugin = require('less-plugin-npm-import');

module.exports = {
	entry: [ './src/main' ],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js',
		sourceMapFilename: '[file].map',
		publicPath: '/'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.less$/, loader: 'style!css!less' }
		]
	},
	resolve: {
		extensions: [ '', '.js', '.jsx' ]
	},
	devtool: '#source-map',
	plugins: [],
	lessLoader: {
		lessPlugins: [
			new NpmImportPlugin()
		]
	}
};
