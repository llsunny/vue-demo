/**
 * @file:
 * @author: llsunny
 * @lastEditor: llsunny
 * @update: 2022-10-31 15:15:30
 */
/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \vue-demo\src\router\routes.js
 * @
 */
import demo from './modules/demo'
const myRoute = [].concat(demo)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "main" */ '@/views/main/Index.vue'),
    redirect: '/Demo2',
    meta: { requireAuth: true },
    children: myRoute
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    meta: { requireAuth: true }
  }
  // {
  //   path: '/mBoneAgePlatform',
  //   name: 'mBoneAgePlatform',
  //   component: () => import('@/views/mobile/mBoneAgePlatform/Index.vue'),
  //   meta: { title: '骨龄诊断平台', requireAuth: true }
  // },
  // {
  //   path: '/Login',
  //   name: '登录',
  //   component: () =>
  //     import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
  // }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  //   meta: {
  //     title: '相关配置'
  //   },
  //   children: []
  // },
  // {
  //   path: '/Example',
  //   name: 'Example',
  //   component: () =>
  //     import(/* webpackChunkName: "Example" */ '@/views/Example.vue'),
  //   meta: {
  //     title: '示例'
  //   },
  //   children: []
  // }
]
export default routes
