// Plugins
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const devConfig = () => {
	return {
		devServer: {
			historyApiFallback: true,
			contentBase: '.',
			port: 3000,
			stats: 'minimal',
			overlay: true,
			open: true,
			hot: true,
		},
	};
};

module.exports = (env = { PLATFORM: 'dev' }) => {
	return merge(commonConfig(env), devConfig());
};
