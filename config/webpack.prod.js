// Plugins
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const prodConfig = () => {
	return {
		plugins: [new CleanWebpackPlugin()],
	};
};

module.exports = (env = {}) => {
	env.PLATFORM = 'prod';
	return merge(commonConfig(env), prodConfig());
};
