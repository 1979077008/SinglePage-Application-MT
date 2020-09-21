<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-27 17:49:25
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-28 10:12:34
-->
<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in classicList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in areaList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>
<script>
import MSelect from "./select.vue";
export default {
  components: {
    MSelect
  },
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: "Japan"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",

          subList: [
            {
              name: "望京",

              id: 120000
            },
            {
              name: "昌平",

              id: 12222
            }
          ]
        }
      ]
    };
  }
};
</script>