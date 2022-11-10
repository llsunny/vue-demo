/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \DoctorMobile\src\config\index.js
 * @
 */
const ev = {
  dev: '',
  // dev: "http://192.168.33.216:",
  sit: location.origin
}
export default {
  /**
     * @description 配置显示在浏览器标签的title
     */
  title: 'pacs-company-admin',
  /**
     * @description 是否使用国际化，默认为false
     *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
     *              用来在菜单中显示文字
     */
  useI18n: true,
  /**`
     * @description api请求基础路径
     */
  baseUrl: {
    dev: {
      default: `${ev.dev}`,
      login: `${ev.dev}20080`
    },
    pro: {
      default: `${ev.sit}`,
      login: `${ev.sit}`
    }
  },

  /**
     * @description 默认打开的首页的路由name值，默认为home
     */
  homeName: 'home'
}
