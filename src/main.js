/**
 * @file:
 * @author: llsunny
 * @lastEditor: llsunny
 * @update: 2022-11-08 17:19:34
 */
/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \vue-demo\src\main.js
 * @
 */
import Vue from 'vue'
import './style/mixin/reset.css'
import 'normalize.css'
import Es6Promise from 'es6-promise'
import App from './App.vue'
import router from './router/index'
import store from './store'
// import {Table, TableColumn, Button} from 'element-ui'
import elementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/packages/theme-chalk/src/index.scss'
import winDesign from 'win-design'
import 'win-design/lib/themes/default.css'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
// import './theme/#eb507e/index.css'
// import './theme/#2bae85/index.css'
// import '../element-var.scss'

Vue.use(VXETable)

// Vue.prototype.$ = $
// Vue.use(Table)
// Vue.use(Button)
// Vue.use(TableColumn)
Vue.use(elementUI)
Vue.use(winDesign)
Es6Promise.polyfill()
/*
   毫秒数 转 年月日
   使用： (new Date(data[i].creationTime)).Format("yyyy-MM-dd hh:mm:ss.S")
*/
Date.prototype.Format = function (fmt) { //author: meizz
  let o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o)
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  return fmt
}

Vue.config.productionTip = false
new Vue({
  router,
  store,
  data: {
    eventBus: new Vue()
  },
  render: h => h(App)
}).$mount('#app')
