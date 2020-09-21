<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsList[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <!-- <div class="cbody" v-if="item.price_info.current_price && item.price_info.old_price"> -->
          <div class="cbody">
            <div class="title" title="item.title">{{ item.title }}</div>
            <div class="sub-title" title="item.subTitle">{{ item.subTitle }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price }}</span>
              </span>
              <!-- <span class="old-price">门市价¥{{ item.price_info.old_price }}</span> -->
              <span class="sold bottom-rght-info">{{ item.address }}</span>
            </div>
          </div>

         <!-- <div class="cbody" v-else-if="!item.rentNum">
            <div class="title" title="item.title">{{ item.title }}</div>
            <div class="sub-title" title="item.sub_title">{{ item.sub_title }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
          </div>

           <div class="cbody" v-else-if="item.price_info.avg_price && item.rentNum">
            <div class="title" title="item.title">{{ item.title }}</div>
            <div class="sub-title" title="item.sub_title">{{ item.sub_title }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.avg_price }}
                    <span class="units">/{{ item.price_info.units }}</span>
                </span>
              </span>
            </div>
          </div> -->

        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      resultsList:{},
      kind: "all",
      // list: [
      //   {
      //     img:
      //       "https://img.meituan.net/phoenix/509495cea81b23b3c51393631a79053c1006871.jpg@740w_416h_1e_1c",
      //     title: "COSTA COFFEE(新国瑞店)",
      //     sub_title: "巧克力酥卷小美式,建议单人使用",
      //     price_info: {
      //       current_price: 18,
      //       old_price: 36,
      //       avg_price: null
      //     },
      //     rentNum: 10,
      //     addres: "崇文门"
      //   },
      //   {
      //     img:
      //       "https://img.meituan.net/phoenix/509495cea81b23b3c51393631a79053c1006871.jpg@740w_416h_1e_1c",
      //     title: "COSTA COFFEE(新国瑞店)",
      //     sub_title: "巧克力酥卷小美式,建议单人使用",
      //     price_info: {
      //       current_price: null,
      //       old_price: null,
      //       avg_price: null
      //     },
      //     rentNum: 0,
      //     addres: "崇文门"
      //   },
      //   {
      //     img:
      //       "https://img.meituan.net/phoenix/509495cea81b23b3c51393631a79053c1006871.jpg@740w_416h_1e_1c",
      //     title: "COSTA COFFEE(新国瑞店)",
      //     sub_title: "巧克力酥卷小美式,建议单人使用",
      //     price_info: {
      //       current_price: null,
      //       old_price: null,
      //       avg_price:18,
      //       units:'人均',
      //     },
      //     rentNum:10,
      //     addres: "崇文门"
      //   },
      // ]
    };
  },
  props: ["nav"],
  created(){
    api.getIStyle().then(res=>{
      console.log('res',res.data);
      this.resultsList = res.data.data
      console.log(this.resultsList);
    })
  },
  methods: {
    over(e) {
      //   console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      //   console.log(tagName);
      if (tagName != "dd") {
        return;
      }
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>