<!--
 * @Descripttion:
 * @version: X3版本
 * @Author: 苏纪涛
 * @Date: 2020-08-23 15:19:56
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-24 14:45:12
-->
<template>
  <div class="layout-default">
    <el-container>
      <el-header height='100%'>
          <my-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height='100%'>
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/index.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
// <style lang="scss">
// scss 语法
    @import '@/assets/css/public/layout.scss'
</style>
