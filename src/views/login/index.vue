<template>
  <div class="container">
    <div class="con">
      <div class="left">
        <img src="@/assets/gzh.png" alt="" />
      </div>
      <div class="right">
        <el-form
          ref="loginform"
          :model="loginForm"
          status-icon
          label-width="120px"
          :rules="rules"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名:" prop="username">
            <el-input v-model="loginForm.username" type="text" />
          </el-form-item>
          <el-form-item label="密码: " prop="password">
            <el-input v-model="loginForm.password" type="password" />
          </el-form-item>
          <el-form-item label="验证码:" prop="code">
            <el-input v-model="loginForm.code" type="text" class="code" />
            <img :src="codeImg" class="code_img" @click="getNewcode" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button>获取密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import User from '../../api/user'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
const codeImg = ref('')
const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}
// 使用ref定义dom对象
const loginform = ref(null)

// 直接获取token和验证码
const getInfo = async () => {
  const response = await User.getToken()
  codeImg.value = response.captchaImg
  loginForm.token = response.token
}
getInfo()
// 获取新的验证码
const getNewcode = () => {
  getInfo()
}
// 定义提交按钮函数
const submit = () => {
  // 通过ref的值触发验证
  loginform.value.validate(async (valid) => {
    if (valid) {
      // 调用登录接口
      await User.login({
        username: loginForm.username,
        password: loginForm.password,
        code: loginForm.code,
        token: loginForm.token
      })
      if (store.getters.token) {
        // 调用获取用户信息接口
        await store.dispatch('user/getUserInfo')
        // 调用获取路由数据接口
        await store.dispatch('user/getRoutes')
      }
      router.push('/')
    } else {
      console.log('未通过')
    }
  })
}
</script>
<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  .con {
    display: flex;
    margin-top: 150px;
    .left {
      width: 400px;
      height: 325px;
      margin-right: 30px;
      img {
        width: 480px;
        height: 325px;
      }
    }
    .right {
      width: 400px;
      height: 325px;
      margin-left: 20px;
      box-sizing: border-box;
      padding-top: 60px;
      .el-form-item {
        margin: 30px 0;
      }
      .code {
        width: 152px;
      }
      .code_img {
        margin-left: 8px;
      }
    }
  }
}
</style>
