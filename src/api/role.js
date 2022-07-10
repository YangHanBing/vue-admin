import request from "@/utils/request";
// 获取角色列表接口+搜索
const getRoleList = (data) => {
  return request({
    url: '/sys/role/list',
    method: 'GET',
    data
  })
}
export default {
  getRoleList
}
