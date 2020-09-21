<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-28 10:18:32
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-09-02 09:08:46
-->
<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="(item,index) in nav"
        :key="item.key"
        :class="{'s-nav-active':item.active}"
        @click="changeClass(item,index)"
      >{{ item.name }}</li>
    </ul>
    <el-row>
        <item v-for="(item,index) in productList" :key="index" :meta='item'/>
    </el-row>
  </div>
</template>
<script>
import Item from './item.vue'
import api from '@/api/index.js'
export default {
    components:{
        Item,
    },
  data() {
    return {
      nav: [
        {
          key: "s-deault",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: [
        // {
        //   image: "//p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@220w_125h_1e_1c",
        //   title: "火鸡老店",
        //   type: "food",
        //   score: 4.1,
        //   commentNum: 0,
        //   comment: [
        //     {
        //       username: "xxxx",
        //       evalaute: "好吃"
        //     }
        //   ],
        //   tab: ["火锅", "沙河"],
        //   address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
        //   avgPrice: 64,
        //   deal_Items: [
        //     {
        //       title: "火鸡宴，建议10-14人使用",
        //       price: 909,
        //       counterPrice: 1150,
        //       saleNum: 0,
        //       priceType: "元"
        //     },
        //      {
        //       title: "火鸡会，建议5-8人使用",
        //       price: 399,
        //       counterPrice: 500,
        //       saleNum: 0,
        //       priceType: "元"
        //     },
        //     {
        //       title: "火鸡约会，建议2-3人使用",
        //       price: 199,
        //       counterPrice: 300,
        //       saleNum: 0,
        //       priceType: "元"
        //     }
        //   ]
        // }
      ]
    };
  },
  created(){
    api.getProductList().then(res=>{
      console.log('res',res.data)
      this.productList = res.data.data
    })
  },
  methods: {
    changeClass(item) {
      for (var i = 0; i < this.nav.length; i++) {
        this.nav[i].active = false;
        // console.log(this.nav[i]);
      }
      item.active = true;
    }
  }
};
</script>