<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-27 15:01:32
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-31 10:52:32
-->
<template>
  <div class="page-product">
    <el-row class="m-crumbs">
        <crumbs />
    </el-row>
    <el-row>
        <el-col :span='19'>
            <!-- 顶部菜单区 -->
            <el-row>
                <categroy />
            </el-row>
            <!-- 货品展示区 -->
            <el-row>
                <list />
            </el-row>
        </el-col>
        <el-col :span='5'>
            map+fav
        </el-col>
    </el-row>
    <el-row>
        
        crumbs
    </el-row>
  </div>
</template>
<script>
import crumbs from '@/components/products/crumbs.vue'
import Categroy from '@/components/products/categroy.vue'
import List from '@/components/products/list.vue'
export default {
    components:{
        crumbs,
        Categroy,
        List,
    }
};
</script>
<style lang="scss">
    @import '@/assets/css/products/index.scss'
</style>

// 第504行 学号为2020501的专业代码不正确，没有找到对应维护的专业
// 第541行 学号为2020538的系部代码不正确，没有找到对应维护的系部
// 第806行 学号为2020804的所在系部没有创建学生岗位