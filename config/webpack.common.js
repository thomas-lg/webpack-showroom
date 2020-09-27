const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ PLATFORM }) => {
	return {
		mode: PLATFORM === 'prod' ? 'production' : 'development',
		devtool: PLATFORM === 'prod' ? 'source-map' : 'eval-source-map',
		entry: path.resolve(__dirname, '..', 'src', 'index.ts'),
		output: {
			filename:
				PLATFORM === 'prod' ? '[name].[hash].bundle.js' : '[name].bundle.js',
			path: path.resolve(__dirname, '..', 'dist/'),
			publicPath: '/',
		},
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
			filename: 'bundle.js',
			path: path.resolve(__dirname, '..', 'dist'),
		},
		plugins: [new HtmlWebpackPlugin()],
	};
};
