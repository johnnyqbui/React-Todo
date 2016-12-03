const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		}),
		// new webpack.optimize.DedupePlugin(),
  //       new webpack.DefinePlugin({
  //           "process.env": {
  //               NODE_ENV: JSON.stringify("production")
  //           }
  //       }),
  //       new webpack.optimize.UglifyJsPlugin({
  //           compressor: {
  //               warnings: false
  //           }
  //       }),
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'./app/components',
			'./app/api'
		],
		alias: {
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			},
			exclude: /(node_modules|bower_components)/
		}]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	}
}