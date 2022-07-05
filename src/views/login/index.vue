<template>
  <div>
    <p @click="send">发送</p>
  </div>
</template>
<script setup>
import User from '../../api/user'
const send = async() => {
  const response = await User.login()
  console.log(response)
}
</script>
<style scoped lang="scss"></style>
