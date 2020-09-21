<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-27 09:05:33
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-27 14:31:20
-->
<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#' + 'city-' +item">{{ item }}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item,index) in cityGroup" :key="index" :id="'city-' + index">
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id">{{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // list:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityGroup: {}
    };
  },
  created() {
    var data = [
      {
        id: 1,
        name: "北京",
        pinyin: "beijing",
        acronym: "bj",
        rank: "s",
        firstChar: "b"
      },
      {
        id: 10,
        name: "上海",
        pinyin: "shanghai",
        acronym: "sh",
        rank: "s",
        firstChar: "s"
      },
      {
        id: 20,
        name: "广州",
        pinyin: "guangzhou",
        acronym: "gz",
        rank: "s",
        firstChar: "g"
      },
      {
        id: 30,
        name: "深圳",
        pinyin: "shenzhen",
        acronym: "sz",
        rank: "s",
        firstChar: "s"
      }
    ];
    var obj = {};
    data.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    console.log(obj, "obj");
    this.cityGroup = obj;
  },
  methods: {}
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>