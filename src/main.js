/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 苏纪涛
 * @Date: 2020-08-23 15:12:26
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-27 17:24:46
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'
Vue.use(ElementUI)
Vue.directive('document-click',{
  bind(el,binding,vnode){
    // console.log("-----bind");
    // 给绑定的元素的添加的事件,或者其他....
    document.addEventListener('click',binding.value,false);
  },
  inserted(){
    console.log('inserted')
  },
  updated() {
    console.log('update-----')
  },
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
