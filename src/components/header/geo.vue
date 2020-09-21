<!--
 * @Descripttion:
 * @version: X3版本
 * @Author: 苏纪涛
 * @Date: 2020-08-23 17:15:17
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-09-03 18:01:37
-->
<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{ this.$store.state.position.name }}
            <router-link class="changeCity" :to="{name: 'changeCity'}">
                切换城市
            </router-link>
            [
                <a href="#">大厂回族自治县</a>
                <a href="#">廊坊</a>
                <a href="#">固安县</a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name:'login'}">
                立即登陆
            </router-link>
            <router-link class="register" :to="{name:'register'}">
                注册
            </router-link>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
