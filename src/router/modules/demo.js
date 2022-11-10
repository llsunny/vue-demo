/**
 * @file:
 * @author: llsunny
 * @lastEditor: llsunny
 * @update: 2022-11-09 13:10:23
 */
/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \vue-demo\src\router\modules\demo.js
 *
 */
export default [
  {
    path: '/Demo',
    props: true,
    name: 'Demo',
    component: () => import('@/views/main/demo/Demo.vue'),
    meta: { title: 'demo', requireAuth: true }
  },
  {
    path: '/Demo2',
    props: true,
    name: 'Demo2',
    component: () => import('@/views/main/demo/Demo2.vue'),
    meta: { title: 'demo', requireAuth: true }
  },
  // {
  //   path: '/Demo3',
  //   props: true,
  //   name: 'Demo3',
  //   component: () => import('@/views/main/demo/CommentText.vue'),
  //   meta: { title: 'demo', requireAuth: true }
  // },
  {
    path: '/Demo4',
    props: true,
    name: 'Demo4',
    component: () => import('@/views/main/demo/Demo4.vue'),
    meta: { title: 'demo', requireAuth: true }
  }
]