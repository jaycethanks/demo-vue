/*
 * @Author: jayce
 * @Date: 2021-05-25 16:17:14
 * @LastEditTime: 2021-07-14 14:50:54
 * @Description:
 * @FilePath: \demo-vue\src\main.js
 *
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils";
import "normalize.css/normalize.css";
import Axios from "axios";

import Antd, { version } from "ant-design-vue";
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
// import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

import dataV from "@jiaminghi/data-view";

Vue.use(dataV);

Vue.prototype.$axios = Axios;
Vue.use(Antd);
Vue.config.productionTip = false;

// import KFormDesign from "k-form-design";
// import 'k-form-design/lib/k-form-design.css'
// Vue.use(KFormDesign);

// ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import chinaGeo from "@/views/Echarts/BigScreen/assets/lib/china.json";
Vue.use(ElementUI);

import * as echarts from "echarts";
// import "echarts-gl";
import "echarts-liquidfill";
import "echarts-gl/src/chart/bar3D";
// import "echarts-gl/src/component/geo3D";
echarts.registerMap("chinamap", { geoJSON: chinaGeo });
Vue.prototype.$echarts = echarts;

new Vue({
  data() {
    return {
      name: "$root",
    };
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
