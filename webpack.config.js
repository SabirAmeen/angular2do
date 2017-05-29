var webpack = require('webpack');
module.exports = {
	entry: {
		app:'./app/main.ts',
		vendor:'./app/vendor.ts',
		polyfills:'./app/polyfills.ts'
	},
	output: {
		path: './dist',
		filename: '[name].js'
	},
	module:{
		loaders:[
			{test: /\.ts$/, loader: 'ts'}
		]
	},
	resolve: {
		extensions: ['','.js','.ts']
	}
};