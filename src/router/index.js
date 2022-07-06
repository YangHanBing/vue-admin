import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import userList from './modules/userList'
import roleList from './modules/roleList'
import menuList from './modules/menuList'
import dictList from './modules/dictList'
// 公共路由表
export const publicRoutes = [{
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
// 私有路由表
export const privateRoutes = [
  userList,
  roleList,
  menuList,
  dictList
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router

// {
//   path: '/sys',
//   name: 'sys',
//   component: Layout,
//   redirect: '/sys/users',
//   meta: {
//     title: '系统管理',
//     icon: 'personnel'
//   },
//   children: [{
//       path: '/sys/users',
//       component: () => import('../views/sys-users'),
//       name: 'sysusers',
//       meta: {
//         title: '用户管理',
//         icon: 'article'
//       },
//     },
//     {
//       path: '/sys/roles',
//       component: () => import('../views/sys-roles'),
//       name: 'sysroles',
//       meta: {
//         title: '角色管理',
//         icon: 'article'
//       },
//     },
//     {
//       path: '/sys/menus',
//       component: () => import('../views/sys-menus'),
//       name: 'sysmenus',
//       meta: {
//         title: '菜单管理',
//         icon: 'article'
//       },
//     },
//   ]
// },
// {
//   path: '/tool/dicts',
//   name: 'tooldicts',
//   component: Layout,
//   meta: {
//     title: '系统工具',
//     icon: 'personnel'
//   },
//   children: [{
//     path: '/tool/dicts',
//     component: () => import('../views/tool-dicts'),
//     name: 'tooldicts',
//     meta: {
//       title: '数字字典',
//       icon: 'article'
//     },
//   }]
// },
