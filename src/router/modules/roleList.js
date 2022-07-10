import Layout from '../../layout'

export default {
  path: '/sys',
  component: Layout,
  name: 'sys:role:list',
  meta: {
    title: '角色管理',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/roles',
      component: () => import('../../views/sys-roles'),
      meta: {
        title: '角色管理',
        icon: 'role'
      }
    }
  ]
}