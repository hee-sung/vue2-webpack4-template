'use strict';

const path = require('path');
const utils = require('./utils');
const config = require('../config');
const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const _config = isProd ? config.build : config.dev;
const extractCSS = _config.extractCss;

const commonCssLoaders = [
  // TODO: remove style-loader: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/34
  extractCSS ? MiniCssExtractPlugin.loader : 'style-loader',
  { loader: 'css-loader', options: { sourceMap: true } },
];

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['@babel/polyfill',
      'core-js/modules/es6.promise',
      'core-js/modules/es6.array.iterator',
      './src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash].js',
    publicPath: _config.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: commonCssLoaders.concat([
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: !isProd
            }
          }
        ])
      },
      {
        test: /\.vue$/,
        include: [
          resolve('src'),
          resolve('test')
        ],
        exclude: isProd ? [resolve('src/components/test')] : [],
        use: [
          { loader: 'vue-loader' },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.js$/,
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client')
        ],
        exclude: file => (/node_modules/.test(file) && !/\.vue\.js/.test(file)),
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /.s[ca]ss$/,
        use: commonCssLoaders.concat([
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              // sourceMap: !isProd
              sourceMap: true, // true: 상대경로 인식. false: these relative modules were not found error.
              sassOptions: {
                outputStyle: 'compressed',
                includePaths: [
                  resolve('src'),
                  // resolve('node_modules')
                ],
              },
              additionalData: `
                @import "@/assets/scss/mixin.scss";
                @import "@/assets/scss/main.scss";
              `
            }
          }
        ])
      },
      {
        test: /\.css$/,
        use: commonCssLoaders
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        // loader: 'url-loader',
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath("css/[name].[contenthash].css"),
      chunkFilename: utils.assetsPath("css/[id].[contenthash].css")
    }),
    new webpack.NamedChunksPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};