<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <div class="fiexed-header">
        <Navbar></Navbar>
      </div>
      <AppMain class="app-main"></AppMain>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './SideBar'
import Navbar from './NavBar'
import AppMain from './AppMain'
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .sidebar-container {
    width: 210px;
    height: 100%;
    background-color: #545c64;
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .main-container {
    width: calc(100% - 210px);
    margin-left: 210px;
    position: relative;
    .fiexed-header {
      width: calc(100% - 210px);
      position: fixed;
      top: 0;
      right: 0;
      z-index: 999;
      height: 95px;
    }
    .app-main {
      box-sizing: border-box;
      padding: 20px;
      position: fixed;
      bottom: 0;
      right: 0;
      width: calc(100% - 210px);
      height: calc(100% - 95px);
      z-index: 999;
    }
  }
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
