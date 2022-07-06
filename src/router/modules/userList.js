import Layout from '../../layout'
export default {
  path: '/sys',
  component: Layout,
  name: 'sysusers',
  meta: {
    title: '系统管理',
    icon: 'personnel'
  },
  children: [{
      path: '/sys/users',
      component: () => import('../../views/sys-users'),
      meta: {
        title: '用户管理',
        icon: 'personnel-manage'
      }
    }
  ]
}