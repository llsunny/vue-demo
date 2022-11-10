/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \DoctorMobile\src\router\index.js
 *
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'


Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
router.beforeEach((to, from, next) => {
  // if (to.path === '/login') {
  next()
  // } else {
  //   let token = localStorage.getItem('Authorization')
  //   if (token === null || token === '') {
  //     next({
  //       path: '/login'
  //     })
  //   } else {
  //     next()
  //   }
  // }
})
export default router
