const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

module.exports = ({ PLATFORM, STAT }) => {
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
		plugins: [
			STAT
				? new BundleAnalyzerPlugin()
				: new HtmlWebpackPlugin({
						template: './index.html',
						favicon: './favicon.ico',
						removeComments: true,
						collapseWhitespace: true,
						removeRedundantAttributes: true,
						useShortDoctype: true,
						removeEmptyAttributes: true,
						removeStyleLinkTypeAttributes: true,
						keepClosingSlash: true,
						minifyJS: true,
						minifyCSS: true,
						minifyURLs: true,
				  }),
		],
	};
};
