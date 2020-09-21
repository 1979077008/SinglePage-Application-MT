<!--
 * @Descripttion:
 * @version: X3版本
 * @Author: 苏纪涛
 * @Date: 2020-08-23 15:40:26
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-23 17:32:01
-->
<template>
    <el-row class="m-header m-header-topbar">
        <el-col :span="10">
            <geo />
        </el-col>
        <el-col :span="14">
            <m-nav />
        </el-col>
    </el-row>
</template>
<script>
import geo from './geo.vue'
import MNav from './nav.vue'
export default {
  components: {
    geo,
    MNav
  }
}
</script>
<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss';
</style>
