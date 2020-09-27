const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '..', 'src', 'index.ts'),
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename:
			PLATFORM === 'prod' ? '[name].[hash].bundle.js' : '[name].bundle.js',
		path: path.resolve(__dirname, '..', 'dist/'),
		publicPath: '/',
	},
	plugins: [new HtmlWebpackPlugin()],
};
