<template>
  <div :class="className" />
</template>

<script>
import resize from "../../../mixins/resize.js";
//init inactive data source， 保存非活跃数据，避免re setOption 带来的不必要计算开销
let chart = null;
const coordsSet = [
  {
    coords: [
      [120.161619, 30.253752],
      [17.478008046252885, -11.89758947644664],
    ],
    fromName: "杭州市",
    toName: "Angola",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [2.305714528830206, 9.503013199615893],
    ],
    fromName: "杭州市",
    toName: "Benin",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [12.948474142398263, 6.294168487480992],
    ],
    fromName: "杭州市",
    toName: "Cameroon",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [37.95309411262371, 0.6899182318376179],
    ],
    fromName: "杭州市",
    toName: "Kenya",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [23.85779956995608, -22.236609002062902],
    ],
    fromName: "杭州市",
    toName: "Botswana",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [-1.219233362526581, 7.94530467243628],
    ],
    fromName: "杭州市",
    toName: "Ghana",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [11.839410898545754, -0.628448459921234],
    ],
    fromName: "杭州市",
    toName: "Gabon",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [29.919439681764082, -2.014687460047154],
    ],
    fromName: "杭州市",
    toName: "Rwanda",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [-11.808781566553495, 8.543593293153963],
    ],
    fromName: "杭州市",
    toName: "Sierra Leone",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [34.93574264768485, -6.35360420423765],
    ],
    fromName: "杭州市",
    toName: "Tanzania",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [0.8990857571109684, 8.660743037717811],
    ],
    fromName: "杭州市",
    toName: "Togo",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [32.34371768463123, 1.2821729218416205],
    ],
    fromName: "杭州市",
    toName: "Uganda",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [18.16451345845268, -21.90858163281473],
    ],
    fromName: "杭州市",
    toName: "Namibia",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [35.208577031290176, -17.525230309488748],
    ],
    fromName: "杭州市",
    toName: "Mozambique",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [39.914902886544276, 8.729389557048396],
    ],
    fromName: "杭州市",
    toName: "Ethiopia",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [28.24475317864227, -29.60168116924817],
    ],
    fromName: "杭州市",
    toName: "Lesotho",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [46.68493466832544, -19.04163612493041],
    ],
    fromName: "杭州市",
    toName: "Madagascar",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [34.23441182298881, -13.128986464184024],
    ],
    fromName: "杭州市",
    toName: "Malawi",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [27.75521363430896, -13.162832953186246],
    ],
    fromName: "杭州市",
    toName: "Zambia",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [29.717829640720844, -18.92700121981475],
    ],
    fromName: "杭州市",
    toName: "Zimbabwe",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [-74.11416196781884, -8.522717984240291],
    ],
    fromName: "杭州市",
    toName: "Peru",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [105.79110320454193, 16.374291050391896],
    ],
    fromName: "杭州市",
    toName: "Vietnam",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [8.147632718717043, 9.609707376481591],
    ],
    fromName: "杭州市",
    toName: "Nigeria",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [118.73586057233209, -2.3079333544632434],
    ],
    fromName: "杭州市",
    toName: "Indonesia",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [2.936178131958199, 46.20410930340389],
    ],
    fromName: "杭州市",
    toName: "France",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [82.83375236985977, 20.688393643630018],
    ],
    fromName: "杭州市",
    toName: "India",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [12.246695926942852, 41.99599184660806],
    ],
    fromName: "杭州市",
    toName: "Italy",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [105.03973078680701, 12.699186865507775],
    ],
    fromName: "杭州市",
    toName: "Cambodia",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [24.255596388632085, 38.41864937016185],
    ],
    fromName: "杭州市",
    toName: "Greece",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [-1.6932816211842325, 12.108709036312737],
    ],
    fromName: "杭州市",
    toName: "Burkina Faso",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [-9.258988935497618, 6.52012979398834],
    ],
    fromName: "杭州市",
    toName: "Liberia",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [121.86964934640937, 10.803250497287834],
    ],
    fromName: "杭州市",
    toName: "Philippines",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [8.147632718717043, 9.609707376481591],
    ],
    fromName: "杭州市",
    toName: "Niger",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [8.147632718717043, 9.609707376481591],
    ],
    fromName: "杭州市",
    toName: "Nigeria",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [66.3759193479301, 47.641465195176835],
    ],
    fromName: "杭州市",
    toName: "Kazakhstan",
  },
  {
    coords: [
      [120.161619, 30.253752],
      [30.240135435012338, 26.60517034450628],
    ],
    fromName: "杭州市",
    toName: "Egypt",
  },
];
const normalItemStyle = {
  label: {
    show: false,
  },
  itemStyle: {
    borderColor: "rgba(145, 234, 248, 0.27)",
    borderWidth: 1,
    areaColor: {
      type: "radial",
      x: 0.5,
      y: 0.5,
      r: 0.8,
      colorStops: [
        {
          offset: 0,
          color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(145, 234, 248, 0.07)", // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },
    shadowColor: "rgba(129, 219, 248, 0.58)",
    shadowOffsetX: -2,
    shadowOffsetY: 2,
    shadowBlur: 10,
  },
  emphasis: {
    label: {
      show: false,
    },
    itemStyle: {
      borderColor: "rgba(145, 234, 248, 0.56)",
      borderWidth: 1,
      areaColor: {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(145, 234, 248, 0.13)", // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      shadowColor: "rgba(129, 219, 248, 0.58)",
      shadowOffsetX: -2,
      shadowOffsetY: 2,
      shadowBlur: 10,
    },
  },
};
const highlightItemStyle = {
  label: {
    fontSize: 14,
    color: "rgba(182, 242, 251, 0.9)",
    show: true,
    position: ["45%", "50%"],
  },
  itemStyle: {
    borderColor: "rgb(80, 224, 247)",
    borderWidth: 1,
    areaColor: {
      type: "radial",
      x: 0.5,
      y: 0.5,
      r: 0.8,
      colorStops: [
        {
          offset: 0,
          color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },
    shadowColor: "rgba(128, 217, 248, 1)",
    // shadowColor: 'rgba(255, 255, 255, 1)',
    shadowOffsetX: -2,
    shadowOffsetY: 2,
    shadowBlur: 10,
  },
  emphasis: {
    label: {
      color: "rgba(182, 242, 251, 0.9)",
    },
    itemStyle: {
      borderColor: "rgba(147, 235, 248, 1)",
      borderWidth: 1,
      areaColor: {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      shadowColor: "rgba(128, 217, 248, 1)",
      // shadowColor: 'rgba(255, 255, 255, 1)',
      shadowOffsetX: -2,
      shadowOffsetY: 2,
      shadowBlur: 10,
    },
  },
};
const chinaStyle = {
  itemStyle: {
    borderColor: "rgb(255, 10, 10)",
    borderWidth: 1,
    areaColor: {
      type: "radial",
      x: 0.5,
      y: 0.5,
      r: 0.8,
      colorStops: [
        {
          offset: 0,
          color: "rgba(255, 31, 31, 0.09)", // 0% 处的颜色
        },
        {
          offset: 0.2,
          color: "rgba(255, 31, 31, 0.23)", // 0% 处的颜色
        },
        {
          offset: 0.6,
          color: "rgba(255, 31, 31, 0.45)", // 0% 处的颜色
        },
        {
          offset: 0.7,
          color: "rgba(255, 31, 31, 0.77)", // 0% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(255, 0, 0, 0.77)", // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },
    shadowColor: "rgb(248, 129, 129)",
    // shadowColor: 'rgba(255, 255, 255, 1)',
    shadowOffsetX: -2,
    shadowOffsetY: 2,
    shadowBlur: 10,
  },
  emphasis: {
    itemStyle: {
      borderColor: "rgb(255, 10, 10)",
      borderWidth: 1,
      areaColor: {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: "rgb(255, 203, 31)", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(248, 145, 145, 0.87)", // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      shadowColor: "rgb(248, 129, 129)",
      // shadowColor: 'rgba(255, 255, 255, 1)',
      shadowOffsetX: -2,
      shadowOffsetY: 2,
      shadowBlur: 10,
    },
  },
};
const hangzhouStyle = {
  itemStyle: {
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 1,
    areaColor: "rgb(255, 235, 10)",
    shadowColor: "rgb(255, 252, 219)",
    shadowOffsetX: -2,
    shadowOffsetY: 2,
    shadowBlur: 10,
  },
  emphasis: {
    itemStyle: {
      borderColor: "rgb(255, 235, 10)",
      borderWidth: 1,
      areaColor: "rgb(255, 235, 10)",
      shadowColor: "rgb(255, 235, 10)",
      shadowOffsetX: -2,
      shadowOffsetY: 2,
      shadowBlur: 10,
    },
  },
};
//generate normal area
const strArr = [
  "Angola",
  "Benin",
  "Cameroon",
  "Kenya",
  "Botswana",
  "Ghana",
  "Gabon",
  "Rwanda",
  "Sierra Leone",
  "Swaziland",
  "Tanzania",
  "Togo",
  "Uganda",
  "Namibia",
  "Mozambique",
  "Ethiopia",
  "Lesotho",
  "Madagascar",
  "Malawi",
  "Zambia",
  "Zimbabwe",
  "Peru",
  "Vietnam",
  "Nigeria",
  "Indonesia",
  "France",
  "India",
  "Italy",
  "Cambodia",
  "Greece",
  "Burkina Faso",
  "Liberia",
  "Philippines",
  "Niger",
  "Kazakhstan",
  "Egypt",
];
const highlightArea = strArr.map((i) => {
  return {
    name: i,
    ...highlightItemStyle,
  };
});

const selectStyle = {
  itemStyle: {
    borderColor: "rgba(250, 25, 0, 0.75)",
    borderWidth: 1,
    areaColor: {
      type: "radial",
      x: 0.5,
      y: 0.5,
      r: 0.8,
      colorStops: [
        {
          offset: 0,
          color: "rgba(0, 250, 17, 0)", // 0% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(250, 0, 0, 0.28)", // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },
    shadowColor: "rgb(255, 158, 158)",
    shadowOffsetX: -2,
    shadowOffsetY: 2,
    shadowBlur: 8,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rgb(248, 255, 41)",
    show: true,
    position: ["45%", "50%"],
  },
};
let animationDurationUpdate = 2500; //默认动画时长
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    dataSource: {
      // 不直接传入轴数据 和 系列数据的原因是因为tooltip 需要展示额外的数据字段，ringRatio
      type: Array,
      default: () => [],
    },
    tooltipItem: {
      type: String,
      default: "Link Relative Ratio",
    },
  },
  data() {
    return {
      // chart: null,
      center: [120.153576, 30.287459],
      zoom: 1.5,
    };
  },
  computed: {
    xAxisData: function () {
      // 从props 中取出轴数据
      return this.dataSource.map((it) => it.time);
    },
    seriesData: function () {
      // 从props 中取出系列
      return this.dataSource.map((it) => it.volume);
    },
  },
  watch: {
    // 监听数据变化，触发图表绘制刷新
    // xAxisData: {
    //   handler(val) {
    //     this.drawChart();
    //   },
    // },
    // seriesData: {
    //   handler(val) {
    //     this.drawChart();
    //   },
    // },
  },

  mounted() {
    chart = this.$echarts.init(this.$el, "macarons");
    this.drawChart();
    this.carousel("translation");
    // this.carousel("wandering");
  },
  beforeDestroy() {
    if (!chart) {
      return;
    }
    chart.dispose();
    chart = null;
  },
  methods: {
    drawChart() {
      let _this = this;
      chart.setOption({
        animationDurationUpdate: animationDurationUpdate, //每次图形变换的动画时长，应当以最小的变化间隔为准
        animationEasingUpdate: "cubicInOut",
        geo: {
          // world map
          map: "worldmap",
          zoom: _this.zoom,
          roam: true,
          center: _this.center,
          ...normalItemStyle,
          regions: [
            // special regions
            {
              name: "China",
              ...chinaStyle,
            },
            {
              name: "杭州市",
              ...hangzhouStyle,
            },
            ...highlightArea,
          ],
          select: selectStyle,
          selectedMode: "single",
        },
        series: [
          {
            // fly lines
            type: "lines",
            zlevel: 2,
            effect: {
              show: false,
              period: 10, //箭头指向速度，值越小速度越快
              trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 4, //图标大小
              color: "#ffde38",
            },
            label: {
              color: "#ff1414",
              show: true,
              position: "middle",
            },
            lineStyle: {
              color: "#ffc91ad4",
              width: 2, //尾迹线条宽度
              opacity: 0, //尾迹线条透明度
              curveness: 0.3, //尾迹线条曲直度
              // shadowColor: "#000000",
              // shadowBlur: 2,
            },

            data: [...coordsSet],
          },
          {
            //startPoint
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            zlevel: 1,
            rippleEffect: {
              period: 10,
              scale: 3,
              brushType: "fill",
            },
            hoverAnimation: true,
            itemStyle: {
              color: "#fffd6b",
              shadowBlur: 10,
              shadowColor: "#333",
            },
            symbolSize: 12,
            data: [{ value: [120.161619, 30.253752] }],
          }, //地图线的动画
          {
            //endPoints
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            zlevel: 1,
            rippleEffect: {
              period: 10,
              scale: 4,
              brushType: "fill",
            },
            hoverAnimation: false,
            itemStyle: {
              color: "#ff0a0a85",
              shadowBlur: 2,
              shadowColor: "#ff0a0a85",
            },
            symbolSize: 3,
            data: coordsSet.map((i) => {
              return {
                value: i.coords[1],
              };
            }),
          },
        ],
      });

      // _this.resize(); //首次绘制 resize
      // 窗口缩放resize
      // window.addEventListener("resize", _this.resize()); //这个不加也可以，但是加了在resize的时候更加流畅
    },
    // resize() {
    //   chart.resize({
    //     //https://echarts.apache.org/zh/api.html#echartsInstance.resize
    //     //注意，将在每次查询时被执行
    //     width: "auto", //自动获取dom宽度
    //     height: (() => {
    //       // console.log(document.body.clientHeight * 0.3 + "px", "--line157");
    //       // return document.body.clientHeight * 0.3 + "px";
    //       return "auto";
    //     })(),
    //     //由于组件时层级嵌套的，外层容器高度由内层撑开。 所以要想动态生成高度，只能去获取一个动态计算出的高度，如viewport的高度（动态）
    //   });
    // },
    carousel(type) {
      let _this = this;
      let count = 0;
      let zoomIn = 6; //放大 （如果是‘平移’，则是默认的放大层级）
      let zoomOut = 2;

      // translation 单独配置
      let AnimateDuration = 5000;
      let AnimateWait = 1000;
      // wandering 单独配置
      let drillUpDur = 2000; //上浮的时长，也就是地图缩小到世界地图的时长
      let drillDownDur = 2000; //下钻的时长，也就是放大并移动视图中心ZoomIn + center
      let carouselWait = 3000; //轮播停留的时长;
      let carouselPeriod = drillUpDur + drillDownDur + carouselWait; //动画周期的时长, 也就是定时器轮播的间隔时长

      if (type === "translation") {
        translation();
      } else {
        wandering();
      }
      function translation() {
        // 视角平移 Only
        !(function loop() {
          setTimeout(function () {
            // logic here
            // recurse
            if (count < coordsSet.length) {
              _this.center = coordsSet[count].coords[1];
              chart.dispatchAction({
                type: "geoSelect",
                name: coordsSet[count].toName,
              });
              _this.zoom = zoomIn;
              _this.$emit("change", coordsSet[count].toName);
              animationDurationUpdate = AnimateDuration;
              _this.drawChart();
              count++;
            } else {
              count = 0;
            }
            loop();
          }, AnimateDuration + AnimateWait);
        })();
      }
      function wandering() {
        // 场景漫游 Zoom + Move
        !(function loop() {
          setTimeout(function () {
            // logic here
            // recurse
            if (count < coordsSet.length) {
              _this.zoom = zoomOut;
              animationDurationUpdate = drillUpDur;
              _this.drawChart();
              setTimeout(() => {
                _this.center = coordsSet[count].coords[1];
                chart.dispatchAction({
                  //高亮
                  type: "geoSelect",
                  name: coordsSet[count].toName,
                });
                _this.zoom = zoomIn;

                animationDurationUpdate = drillDownDur;
                _this.drawChart();
              }, drillDownDur);
              count++;
            } else {
              count = 0;
            }
            loop();
          }, carouselPeriod); //4000 - 1500 - 2000 = 停留时长
        })();
      }
    },
  },
};
</script>
<style scoped>
.tooltip-wrapper {
  background-color: aqua;
}
</style>
