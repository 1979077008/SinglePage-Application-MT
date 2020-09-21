<!--
 * @Descripttion:
 * @version: X3版本
 * @Author: 苏纪涛
 * @Date: 2020-08-23 16:01:41
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-24 09:36:59
-->
<template>
  <div class="m-header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>
<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'
export default {
  // 组件是一个对象
  components: {
    topBar,
    searchBar
  }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
