/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \mobile-office\vue.config.js
 * @
 */
'use strict'
const path = require('path')
// const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

function resolve (dir) {
  return path.join(__dirname, dir)
}
// function addStyleResource(rule) {
//   rule
//     .use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [path.resolve(__dirname, './src/style/index.styl')]
//     })
// }
module.exports = {
  filenameHashing: true,
  publicPath: './',
  transpileDependencies: ['element-ui'],
  chainWebpack: (config) => {
    // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // types.forEach((type) =>
    //   addStyleResource(config.module.rule('stylus').oneOf(type))
    // )
    // const oneOfsMap = config.module.rule('scss').oneOfs.store
    // oneOfsMap.forEach((item) => {
    //   item
    //     .use('sass-resources-loader')
    //     .loader('sass-resources-loader')
    //     .end()
    // })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|jfif|JPG|gif|svg)(\?.*)?$/)
    //   .use('url-loader')
    //   .loader('url-loader')
  },
  devServer: {
    headers: {
      'Access-control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        // target: 'http://192.168.24.50:8080',
        target: 'http://172.17.1.211:8080',
        changeOrigin: true
        // pathRewrite: {
        //   "^/api": ""
        // }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new ProgressBarPlugin({
        format: ' build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
        clear: false
      })
      // new webpack.ProvidePlugin({
      //   jQuery: 'jquery',
      //   $: 'jquery',
      //   'window.jQuery': 'jquery'
      // })
    ]
  }
}
