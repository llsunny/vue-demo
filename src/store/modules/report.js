/*
 * @Author: yxx
 * @Description:
 * @FilePath: \vue-demo\src\store\modules\report.js
 * @
 */
import getUrl from '@/api'
import { postRequest, getRequest } from '@/service/request'
import formatUtils from '@/utils/formatUtils'

export default {
  namespaced: true,
  state: {
    hospitalCode: '', // 当前医院机构代码
    isThird: false, // 是否是第三方
    thirdParams: null, // 第三方入参
    fullscreenLoading: false, // 全局loading
    loadingText: '加载中...', // 加载文案，默认为加载中
    userInfo: {} // 用户相关信息
  },
  actions: {
    /**
     * @description: 登录
     * @param {params}
     * @return:
     */
    async login({ commit }, params) {
      const url = getUrl('report', 'login')
      const res = await postRequest(url, params)
      return res
    },
    
  },
  mutations: {
    
  },
  getters: {
    
  }
}
