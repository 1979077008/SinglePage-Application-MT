<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-24 15:18:16
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-09-01 18:25:24
-->
<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.items">
        <h4 :key="index">{{ item.title }}</h4>
        <span v-for="(v, i) in item.items" :key="v + '_' + i">{{ v }}</span>
      </template>
    </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      curDetail: null,
      timer: "",
      menuList: [
      ]
    };
  },
  created(){
    api.getmenuList().then(res=>{
      // console.log('res-fuck',res.data)
      this.menuList = res.data.data
    })
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
      //   console.log(this.curDetail, "this");
    },

    mouseLeave() {
      var self = this;
      this.timer = setTimeout(function() {
        self.curDetail = null;
      }, 200);
    },

    detailEnter() {
      clearInterval(this.timer);
    },
    detailLeave() {
        this.curDetail = null;
    }
  }
};
</script>