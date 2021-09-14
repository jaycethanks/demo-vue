import { Loader } from "@googlemaps/js-api-loader";
import MarkerClusterer from "@googlemaps/markerclustererplus"; //cluster markers
const apiKey = "AIzaSyBD8DB4sY3_BCp0Eivuc6_MavQrw4Bb3mU";

export default {
  currentInstance: null,
  markers:[],
  marker:null,
  /*******
   * @description: 地图初始化函数
   * @param { Object } options - 用于初始化的选项
   * @param { String } domId - 承载地图实例的容器id
   * @param { Function } callback - 地图加载之后的回调函数，其参数为地图实例
   * @return { Object } Map Instance 将返回一个地图实例
   */
  initMap: function(options, domId, callback = () => {}) {
    this.currentInstance = null; //init
    const loader = new Loader({
      apiKey,
      // version: "weekly"
    });
    loader.load().then(() => {
      this.currentInstance = new google.maps.Map(
        document.getElementById(domId),
        {
          ...options,
        },
      );
      callback(this.currentInstance);
    });
  },

  /*******
   * @description:
   * @param { Object } options
   * @param { file } options.icon - 点图标
   * @param { Object } options.position - 单点坐标 exg:{lat:xxxx ,lng:xxx}
   * @param { Object } options.map - 地图实例
   * @return {*}
   */
  addMarker(options) {
    let map = options.map;
    delete options.map;
    this.marker = null,//init
    this.marker = new google.maps.Marker({
      ...options,
    });
    this.marker.setMap(map);
    return this.marker;
  },

  /*******
   * @description:
   * @param { Object } options
   * @param { Array<Object> } options.locations - 一系列的点坐标
   * @param { Object } options.map - 地图实例
   * @param { file } options.icon
   * @return {*}
   */
  addMarkers(options) {
    let locations = options.locations
    delete options.locations;
    this.markers = [];
    locations.map((position, i) => {
      this.addMarker(Object.assign(options,{position}));
      this.markers.push(this.marker);
    });
    return this.markers;
  },
  /******* 
   * @description: 
   * @param {*} options
   * @param {*} instance
   * @return {*}
   */
   setCenterZoom(options,instance){
    instance.setCenter(options.center);
    instance.setZoom(options.zoom)
  },
  clearAllMarker(instance){
    this.markers.forEach(it=>{
      it.setMap(null);
    })
  }
};
