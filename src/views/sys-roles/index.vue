<template>
  <div class="role">
    <el-form :inline="true" :model="roleInfo" class="demo-form-inline">
      <el-form-item>
        <el-input v-model.trim="roleInfo.name" placeholder="名称" />
      </el-form-item>
      <el-form-item>
        <el-button @click="search">搜索</el-button>
        <el-button type="primary" @click="addRole">新增</el-button>
        <el-button type="danger" @click="delRole" disabled>批量删除</el-button>
      </el-form-item>
    </el-form>
    <el-table
      border
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column label="名称" type="name" />
      <el-table-column label="唯一编码" type="statu" />
      <el-table-column label="描述" type="remark" />
      <el-table-column label="状态" type="statu">
        <template #default="scope">{{ scope.row.statu }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
import Role from '../../api/role'
import { ref, reactive } from 'vue'
const roleInfo = reactive({
  name: '',
  current: 1,
  size: 10
})
const roleList = ref('')
// 获取角色列表数据
const getRoleList = async () => {
  const response = await Role.getRoleList(roleInfo)
  roleList.value = response.records
  console.log(roleList.value)
}
getRoleList()
// 搜索角色事件
const search = () => {}
// 新增角色事件
const addRole = () => {}
// 删除角色事件
const delRole = () => {}
</script>
<style scoped lang="scss"></style>
