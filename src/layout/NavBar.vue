<template>
  <div class="navbar">
    <div class="title">
      <p class="big">VueAdmin后台管理系统</p>
      <div class="action">
        <img :src="userInfo.avatar" alt="" />
        <div class="navbar_right">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              <p>{{ userInfo.username }}</p>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="home">个人中心</el-dropdown-item>
                <el-dropdown-item divided command="logout"
                  >退出</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="tagsview"></div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const userInfo = store.getters.userInfo
// 功能事件
const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleTohome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
// 回到首页
const handleTohome = () => {
  router.push('/')
}
// 退出
const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>
<style scoped lang="scss">
.navbar {
  position: relative;
  .title {
    height: 55px;
    background-color: #17b3a3;
    line-height: 55px;
    text-align: center;
    position: relative;
    .big {
      font-weight: 600;
    }
    .action {
      display: flex;
      align-items: center;
      position: absolute;
      right: 30px;
      top:0;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .navbar_right {
        position: relative;
        top: 18px;
      }
    }
  }
  .tagsview {
    position: absolute;
    bottom: 0;
    height: 40px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
