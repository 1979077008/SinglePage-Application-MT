<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-24 19:12:42
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-24 19:35:40
-->
<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="item in imgList" :key="item.img">
        <a :href="item.url" target="_blank"><img :src="item.img" alt=""></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data(){
        return{
            imgList: [{
                url: 'https://paidui.meituan.com/?activity_code=169_00038142',
                img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            }, {
                url: 'https://waimai.meituan.com/',
                img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
            }, {
                url: 'https://hotel.meituan.com/jinan/',
                img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
            },{
                url:'http://maoyan.com/',
                img:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
            }]
        }
    }
};
</script>