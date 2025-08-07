import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import { BuildMode, BuildPaths, BuildPlatform } from './config/build/types/types'

interface EnvVariables {
	mode: BuildMode;
	analyzer?: boolean;
	port: number;
	platform: BuildPlatform;
}

export default (env: EnvVariables) => {
	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		src: path.resolve(__dirname, 'src')
	}

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		paths,
		analyzer: env.analyzer,
		platform: env.platform ?? 'desktop'
	})
	return config;

}


	// const config: webpack.Configuration = {
	// 	mode: env.mode ?? 'development',
	// 	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	// 	output: {
	// 		path: path.resolve(__dirname, 'build'),
	// 		filename: '[name].[contenthash].js',
	// 		clean: true 
	// 	},
	// 	plugins: [
	// 		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
	// 		isDev && new webpack.ProgressPlugin(),
	// 		isProd && new MiniCssExtractPLugin({
	// 			filename: 'css/[name], [contenthash:8].css',
	// 			chunkFilename: 'css/[name].[contenthash:0].css',
	// 		})
	// 	].filter(Boolean),
	// 	module: {
	// 		rules: [
	// 			{
	// 				test: /\.s[ac]ss$/i,
	// 				use: [
	// 					isDev ? 'style-loader' : MiniCssExtractPLugin.loader,
	// 					'css-loader',
	// 					'sass-loader',
	// 				],
	// 			},
	// 			{
	// 				test: /\.tsx?$/,
	// 				use: 'ts-loader',
	// 				exclude: /node_modules/,
	// 			},
	// 		],
	// 	},
	// 	resolve: {
	// 		extensions: ['.tsx', '.ts', '.js'],
	// 	},
	// 	devtool: isDev && 'source-map',
	// 	devServer: isDev ? {
	// 		port: env.port ?? 3000,
	// 		open: true
	// 	} : undefined,
	// }