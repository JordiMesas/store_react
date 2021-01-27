const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: 	{
		home: path.resolve(__dirname, "src/index.js"),
	},	
	
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},	
	devServer: {
		//activamos el metodo HotModuleReplacementPlugin() de webpack
		hot: true,
		open: true,
		historyApiFallback: true,
		port: 3005,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},		
			{
				test: /\.css$/,
				use: [
					
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
				  
				  'style-loader',
				  "css-loader",
				  "sass-loader",
				],
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: 'url-loader',
					options:{
						limit: 90000,
					}
				}				
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].css',
		})
	],	
	
	
};
