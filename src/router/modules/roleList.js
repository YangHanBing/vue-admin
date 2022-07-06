import Layout from '../../layout'

export default {
  path: '/sys',
  component: Layout,
  name: 'sysroles',
  meta: {
    title: '角色管理',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/roles',
      component: () => import('../../views/sys-users'),
      meta: {
        title: '角色管理',
        icon: 'role'
      }
    }
  ]
}