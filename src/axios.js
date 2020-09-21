/*
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-31 19:20:23
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-31 19:36:44
 */
import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) { 
    // console.log(config);
    config.params = {
        ...config.params,
        appkey:'17853110726_1592816345052'
    };
    return config;
 },function (error) {
    // 对请求错误做些什么
      return Promise.reject(error)
    })
 export default axios;