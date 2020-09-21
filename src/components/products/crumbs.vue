<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-27 15:12:26
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-27 17:48:55
-->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>{{ $store.state.position}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $store.state.position}}{{ $route.params.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    created(){
        // console.log('$route.params',this.$route.params);
    }
};
</script>