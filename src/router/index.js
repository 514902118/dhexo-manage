import Vue from 'vue'
import VueRouter from 'vue-router'

// 重写vue-router的push方法，避免冗余导航到当前位置，err给屏蔽了
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/account/Login.vue')
  },
  {
    path: '/manage',
    name: 'manageIndex',
    component: () => import(/* webpackChunkName: "manageIndex" */ '../views/manage/index.vue'),
    children: [
      {
        path: '/leaveMessage',
        name: 'leaveMessage',
        component: () => import(/* webpackChunkName: "leaveMessage" */ '../views/manage/LeaveMessage.vue')
      },
    ]
  },
  {
    path: '*',
    redirect: '/login',
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
