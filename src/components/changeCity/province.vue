<!--
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-25 17:49:13
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-09-03 18:35:17
-->
<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change='changeProvince'
      className="province"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change='changeCity'
      :disabled='cityDisabled'
      className="city"
    />
    <span>
      直接搜索:
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in searchList"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </span>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import api from '@/api/index.js'
import MSelect from "./select.vue"
export default {
  components: {
    MSelect
  },
  data() {
    return {
      provinceList: [
        // "山东", "甘肃", "黑龙江", "浙江", "北京"
        ],
      province: "省份",
      cityList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList:["山东", "甘肃", "黑龙江", "浙江", "北京"],
      searchWord:'',
      loading:false,
      cityDisabled:true,
    };
  },
  created(){
    api.getProvinceList().then(res=>{
      // console.log('res',res.data.data);
      this.provinceList = res.data.data.map((item)=>{

        item.name = item.provinceName;
        // console.log('item.name',item.name);
        // console.log('item',item)
        return item;

        })

    })
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      console.log(flag);
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(query){
        console.log(e)
        // 接口需要
    },
    changeProvince(item){
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCity(item){
      this.city = item.name;
      // this.$store.state.position = this.city;
      // console.log(this.$store.state);
      // this.$store.dispatch('setPosition',item);
      // this.$store.dispatch('setPosition', item);
      this.$store.dispatch('setPosition', item);
      console.log(this.$store.state,'这世上只有一种人');
    }

  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>