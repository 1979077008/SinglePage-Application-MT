<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-25 17:27:20
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-09-02 10:21:07
-->
<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市" :list='hotList'/>
        </el-row>
        <el-row>
            <hot title="最近访问" :list='recentList'/>
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>
<script>
import api from '@/api/index.js'
import Province from "@/components/changeCity/province.vue"
import hot from "@/components/changeCity/hot.vue"
import Category from "@/components/changeCity/category.vue"
export default {
    components:{
        Province,
        hot,
        Category
    },
    data(){
        return{
            hotList:[
                // "哈尔滨", "佳木斯", "牡丹江", "鹤岗"
            ],
            recentList:[
                // "牡丹江", "鹤岗","哈尔滨", "佳木斯"
            ]
        }
    },
    created(){
        api.getHoCity().then(res=>{
            // console.log('res',res.data)
            this.hotList = res.data.data.map(item=>item.name);
        })
        api.getRecentList().then(res=>{
            // console.log('res',res.data)
            this.recentList = res.data.data.map(item=>item.name)
        })
    }
}
</script>
<style lang="scss">
    
</style>