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
// import chinaGeo from "@/views/Echarts/BigScreen/assets/lib/china.json";
import worldGeo from "@/views/Echarts/BigScreen/assets/lib/wordGeoWithCenter.json";
// import countries from "@/views/Echarts/BigScreen/assets/lib/countries.json";
Vue.use(ElementUI);

// let strArr = [
//   "Angola",
//   "Benin",
//   "Cameroon",
//   "Kenya",
//   "Botswana",
//   "Ghana",
//   "Gabon",
//   "Rwanda",
//   "Sierra Leone",
//   "Swaziland",
//   "Tanzania",
//   "Togo",
//   "Swaziland",
//   "Uganda",
//   "Namibia",
//   "Mozambique",
//   "Ethiopia",
//   "Lesotho",
//   "Madagascar",
//   "Malawi",
//   "Zambia",
//   "Zimbabwe",
//   "Peru",
//   "Vietnam",
//   "Nigeria",
//   "Indonesia",
//   "France",
//   "India",
//   "Italy",
//   "Cambodia",
//   "Greece",
//   "Burkina Faso",
//   "Liberia",
//   "Philippines",
//   "Niger",
//   "Kazakhstan",
//   "Egypt",
// ];
// let temp = [];
// console.log(strArr.length, "--line81");
// strArr.forEach((i) => {
//   worldGeo.features.forEach((j) => {
//     if (j.properties.name.includes(i)) {
//       // console.log(i, "--line84");
//       if (!!j.properties.center) {
//         temp.push({
//           coords: [[120.161619, 30.253752], j.properties.center],
//           fromName: "杭州市",
//           toName: j.properties.name,
//         });
//       } else {
//         console.log(j, "--line89");
//       }
//     } else {
//       // console.log("not exsit", "--line86");
//     }
//   });
// });
// console.log(temp, "--line92");

// console.log(worldGeo, "--line39");
// console.log(countries, "--line41");
// let temp = [];
// worldGeo.features.forEach((i) => {
//   countries.features.forEach((j) => {
//     // j.geometry.coordinates
//     if (j.properties.COUNTRY.includes(i.properties.name)) {
//       i.properties.center = j.geometry.coordinates;
//     } else {
//       // console.log("not contain", "--line48");
//     }
//   });
// });
// console.log(worldGeo, "--line54");

// try {
//   let org = worldGeo.features.map((i) => {
//     return {
//       targetName: i.properties.name,
//       targetCoord: i.geometry.coordinates[0][0],
//     };
//   });
//   let strArr = [
//     "Angola",
//     "Benin",
//     "Cameroon",
//     "Kenya",
//     "Botswana",
//     "Ghana",
//     "Gabon",
//     "Rwanda",
//     "Sierra Leone",
//     "Swaziland",
//     "Tanzania",
//     "Togo",
//     "Swaziland",
//     "Uganda",
//     "Namibia",
//     "Mozambique",
//     "Ethiopia",
//     "Lesotho",
//     "Madagascar",
//     "Malawi",
//     "Zambia",
//     "Zimbabwe",
//     "Peru",
//     "Vietnam",
//     "Nigeria",
//     "Indonesia",
//     "France",
//     "India",
//     "Italy",
//     "Cambodia",
//     "Greece",
//     "Burkina Faso",
//     "Liberia",
//     "Philippines",
//     "Niger",
//     "Kazakhstan",
//     "Egypt",
//   ];
//   console.log(org, "--line86");
//   let temp = [];
//   strArr.forEach((j) => {
//     org.forEach((i) => {
//       if (i.targetName == j) {
//         temp.push(i);
//       } else {
//         // console.log("not contain:", j, "--line93");
//       }
//     });
//   });
//   console.log(temp, "--line98");
// } catch (e) {
//   console.log(e, "--line99");
// }

import * as echarts from "echarts";
import "echarts-gl";
import "echarts-liquidfill";
import "echarts-gl/src/chart/bar3D";
// import "echarts-gl/src/component/geo3D";
// echarts.registerMap("chinamap", { geoJSON: chinaGeo });

echarts.registerMap("worldmap", { geoJSON: worldGeo });
Vue.prototype.$echarts = echarts;

let a = new Vue({
  data() {
    return {
      name: "$root",
    };
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
