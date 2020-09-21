<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-27 17:54:39
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-27 19:02:51
-->
<template>
    <div class="m-product-select">
            <dl class="tab">
                <dt> {{ name }}
                    <i class="el-icon-caret-bottom"></i>
                </dt>
                <dd>
                    <dt class="select-title">
                        {{ name }}
                    </dt>
                    <span v-for="(item,index) in list" :key="index"> {{ item.name }}</span>
                </dd>
            </dl>
    </div>
</template>
<script>
export default {
    props:[
        'name',
        'list',
    ]
}
</script>