import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const publicRoutes = [{
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../layout'),
    redirect: '/home',
    children: [{
        path: '/home',
        name: 'home',
        component: () => import('../views/home'),
        meta: {
          title: '首页',
          icon: 'personnel'
        }
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
