/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \DoctorMobile\src\store\index.js
 * @
 */
// write your store here...
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import login from './modules/login'
import report from './modules/report'


Vue.use(Vuex)

const state = {
  account: {},
  auth: ''
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    login,
    report
  }
  // plugins: [createPersistedState()]
})
