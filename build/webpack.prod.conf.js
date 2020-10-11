'use strict';

process.env.NODE_ENV = 'production';

const argv = require('minimist')(process.argv.slice(2));

const withConsole = !!argv.c ? 1 : 0;

const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: config.build.productionSourceMap ? '#cheap-module-source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[contenthash].js'),
    chunkFilename: utils.assetsPath('js/[id].[contenthash].js')
  },
  performance: {
    // entry point warning solution : https://stackoverflow.com/a/41167614
    hints: false,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: withConsole == 0
          }
        },
        parallel: true,
        sourceMap: true,
        cache: true,
        cacheKeys: (defaultCacheKeys, file) => Object.assign({}, defaultCacheKeys, {path: file}),
      }),
      new OptimizeCSSPlugin()
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        // css: {
        //   test: /\.(css|sass|scss)$/,
        //   name: 'commons',
        //   chunks: 'all',
        //   minChunks: 2
        // }
      }
    }
  },
  plugins: [
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: 'production',
    // }),
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../static'),
          to: config.build.assetsSubDirectory,
          globOptions: {
            ignore: ['.*']
          }
        }
      ]
    })
  ]
});

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;