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
          <el-form-item label="验证码:" prop="cname">
            <el-input v-model="loginForm.cname" type="password" class="cname" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="send">提交</el-button>
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
const loginForm = reactive({
  username: 'test',
  password: '',
  cname: ''
})
const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  cname: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}
// 使用ref定义dom对象
const loginform = ref(null)

// 定义提交按钮函数
const send = () => {
  // 通过ref的值触发验证
  loginform.value.validate(async (valid) => {
    if (valid) {
      console.log('通过')
      // 触发成功验证表单，调用接口；
      const response = await User.login(loginForm.value)
      console.log(response)
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
      .cname{
        width: 152px;
      }
    }
  }
}
</style>
