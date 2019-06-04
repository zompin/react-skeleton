const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = (_, { mode }) => {
  const isDevelopment = mode === 'development';

  return {
    entry: './src/js/index.tsx',

    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
        new TerserWebpackPlugin(),
      ],
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: isDevelopment ? '/' : '/dist/',
    },

    resolve: {
      extensions: ['.tsx', '.jsx', '.ts', '.js', '.less'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: ['babel-loader', 'eslint-loader'],
          exclude: '/node_modules/',
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: path.resolve(__dirname, 'node_modules'),
        },
        {
          test: /\.less$/,
          loaders: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer],
              },
            },
            'less-loader',
          ],
        },
      ],
    },

    plugins: [
      new DefinePlugin({
        NODE_ENV: isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        hash: true,
      }),
      new HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin(),
    ],

    devServer: {
      contentBase: isDevelopment ? __dirname : path.join(__dirname, 'dist'),
      port: 3000,
      hot: true,
      open: true,
    },

    devtool: isDevelopment ? 'inline-cheap-module-source-map' : false,
  };
};
