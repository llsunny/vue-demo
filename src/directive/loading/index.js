/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \WechatPatientEnd\src\directive\loading\index.js
 * @
 */
// import Vue from 'vue'
import loading from './loading'

// if (window.Vue) {
//   window['loading'] = loading
//   Vue.use(install)
// }
// loading.install = install
export default {
  install(Vue) {
    Vue.directive('loading', loading)
  }
}
