import Layout from '../../layout'

export default {
  path: '/sys',
  component: Layout,
  name: 'sysmenus',
  meta: {
    title: '菜单管理',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/menus',
      component: () => import('../../views/sys-menus'),
      meta: {
        title: '菜单管理',
        icon: 'menu'
      }
    }
  ]
}