/*
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-31 19:38:03
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-09-02 10:25:22
 */
import axios from '@/axios.js'
const api = {
  searchHotWords(params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  searchList() {
    return axios.get('/api/meituan/header/search.json')
  },
  getmenuList(){
      return axios.get('/api/meituan/index/nav.json')
  },
  getIStyle(){
    return  axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductList(){
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHoCity(){
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentList(){
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList(){
    return axios.get('/api/meituan/city/province.json')
  }
}
export default api;
