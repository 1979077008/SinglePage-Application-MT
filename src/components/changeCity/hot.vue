<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-26 19:36:50
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-26 19:51:47
-->
<template>
    <div class="m-hcity">
        <dl>
            <dt>{{ title }}</dt>
            <dd v-for="(item,index) in list" :key="index">{{ item }}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:[
        "title",
        'list',
    ]
}
</script>
<style lang="scss">
    @import "@/assets/css/changecity/hot.scss";
</style>