<template>
  <div :class="className" />
</template>

<script>
import resize from "../mixins/resize.js";

const animationDuration = 1000;

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
      chart: null,
    };
  },
  computed: {
    xAxisData: function() {
      // 从props 中取出轴数据
      return this.dataSource.map((it) => it.time);
    },
    seriesData: function() {
      // 从props 中取出系列
      return this.dataSource.map((it) => it.volume);
    },
  },
  watch: {
    // 监听数据变化，触发图表绘制刷新
    xAxisData: {
      handler(val) {
        this.drawChart();
      },
    },
    seriesData: {
      handler(val) {
        this.drawChart();
      },
    },
  },
  mounted() {
    this.chart = this.$echarts.init(this.$el, "macarons");
    this.drawChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    drawChart() {
      let normalItemStyle = {
        normal: {
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
        emphasis: {
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
      };
      let highlightItemStyle = {
        normal: {
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
      };
      let chinaStyle = {
        normal: {
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
      };
      let hangzhouStyle = {
        normal: {
          borderColor: "rgb(255, 255, 255)",
          borderWidth: 1,
          areaColor: "rgb(255, 235, 10)",
          shadowColor: "rgb(255, 252, 219)",
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10,
        },
        emphasis: {
          borderColor: "rgb(255, 235, 10)",
          borderWidth: 1,
          areaColor: "rgb(255, 235, 10)",
          shadowColor: "rgb(255, 235, 10)",
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10,
        },
      };
      //generate normal area
      let strArr = [
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
        "Swaziland",
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
      let highlightArea = strArr.map((i) => {
        return {
          name: i,
          itemStyle: highlightItemStyle,
        };
      });

      let coordsSet = [
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

      // console.log(...normalArea, "--line306");
      let _this = this;
      this.chart.setOption({
        geo: {
          map: "worldmap",
          roam: true,
          itemStyle: normalItemStyle,
          regions: [
            {
              name: "China",
              itemStyle: chinaStyle,
            },
            {
              name: "杭州市",
              itemStyle: hangzhouStyle,
            },
            ...highlightArea,
          ],
        },
        series: [
          {
            // name: item[2],
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 5, //箭头指向速度，值越小速度越快
              trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 6, //图标大小
            },

            lineStyle: {
              normal: {
                color: "#ffde24",
                width: 1, //尾迹线条宽度
                opacity: 0.2, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
              },
            },

            label: {
              normal: {
                show: true,
                position: "middle",
                formatter: "{b}",
              },
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
            // label: {
            //   normal: {
            //     formatter: "{b}",
            //     position: "right",
            //     offset: [15, 0],
            //     color: "#1DE9B6",
            //     show: true,
            //   },
            // },
            itemStyle: {
              normal: {
                color: "#fffd6b",
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            symbolSize: 12,
            data: [{ value: [120.161619, 30.253752] }],
            //   data: coordsSet.map((i) => {
            // return {
            //   value: i.coords[1],
            // };
          }, //地图线的动画
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            zlevel: 1,
            rippleEffect: {
              period: 10,
              scale: 2,
              brushType: "fill",
            },
            hoverAnimation: true,
            // label: {
            //   normal: {
            //     formatter: "{b}",
            //     position: "right",
            //     offset: [15, 0],
            //     color: "#1DE9B6",
            //     show: true,
            //   },
            // },
            itemStyle: {
              normal: {
                color: "rgb(80, 224, 247)",
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            symbolSize: 5,
            data: coordsSet.map((i) => {
              return {
                value: i.coords[1],
              };
            }),
          },
        ],
      });

      _this.resize(); //首次绘制 resize
      // 窗口缩放resize
      window.addEventListener("resize", _this.resize()); //这个不加也可以，但是加了在resize的时候更加流畅
    },
    resize() {
      this.chart.resize({
        //https://echarts.apache.org/zh/api.html#echartsInstance.resize
        //注意，将在每次查询时被执行
        width: "auto", //自动获取dom宽度
        height: (() => {
          // console.log(document.body.clientHeight * 0.3 + "px", "--line157");
          // return document.body.clientHeight * 0.3 + "px";
          return "auto";
        })(),
        //由于组件时层级嵌套的，外层容器高度由内层撑开。 所以要想动态生成高度，只能去获取一个动态计算出的高度，如viewport的高度（动态）
      });
    },
  },
};
</script>
<style scoped>
.tooltip-wrapper {
  background-color: aqua;
}
</style>
