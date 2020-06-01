/*
 * @Author: zouzheng
 * @Date: 2020-06-01 14:05:42
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-01 17:55:53
 * @Description: 这是XXX组件（页面）
 */
import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
