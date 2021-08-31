/*
 * @Author: jayce
 * @Date: 2021-05-25 16:17:14
 * @LastEditTime: 2021-07-14 14:50:54
 * @Description: 
 * @FilePath: \demo-vue\src\main.js
 *  
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils'
import Antd, { version } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'


Vue.use(Antd);
Vue.config.productionTip = false

import KFormDesign from 'k-form-design'
import 'k-form-design/lib/k-form-design.css'
Vue.use(KFormDesign)



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')