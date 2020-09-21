/*
 * @Descripttion: 3.0以下vuecli脚手架搭建
 * @version: vue 2.9.6
 * @Author: 苏纪涛
 * @Date: 2020-08-23 15:12:26
 * @LastEditors: 苏纪涛
 * @LastEditTime: 2020-08-27 15:09:50
 */
import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import BlankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from  '@/page/changeCity.vue'
import goodList from '@/page/goodList.vue'
Vue.use(Router)
// path路径以打开的网页的父子级关系进行设置,只要把网页组件引入,path可以随意调
export default new Router({
  // 每次跳转的时候会刷新页面
  mode:'history',
  routes: [{
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect:'/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity,
      },
      {
        path: 's/:name',
        name: 'goods',
        component: goodList,
      },
    ]
    },
    {
      path: '/blank',
      name: 'BlankPage',
      component: BlankPage
    }
  ]
})
