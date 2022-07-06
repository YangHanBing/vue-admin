import Layout from '../../layout'

export default {
  path: '/tool',
  component: Layout,
  name: 'sys:dict:list',
  meta: {
    title: '系统工具',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/dicts',
      component: () => import('../../views/tool-dicts'),
      meta: {
        title: '系统工具',
        icon: 'dicts'
      }
    }
  ]
}