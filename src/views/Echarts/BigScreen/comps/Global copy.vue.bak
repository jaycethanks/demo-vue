<template>
  <div :class="className" />
</template>

<script>
import resize from "../mixins/resize.js";
import mockDataSrc from "../mock/routes.json";

function getAirportCoord(idx) {
  return [mockDataSrc.airports[idx][3], mockDataSrc.airports[idx][4]];
}
var mock = mockDataSrc.routes.map(function(airline) {
  return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
});
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
      let _this = this;
      this.chart.setOption({
        backgroundColor: "#f00",
        globe: {
          baseTexture: require("../assets/img/world.topo.bathy.200401.jpg"),
          // heightTexture: require("../img/bathymetry_bw_composite_4k.jpg"),
          environment: require("../assets/img/8k_stars_milky_way.jpg"),
          displacementTexture: require("../assets/img/bathymetry_bw_composite_4k.jpg"),
          displacementScale: 0.2,
          displacementQuality: "medium",
          shading: "realistic",
          postEffect: true,
          // top: 200,
          light: {
            ambient: {
              intensity: 0.4,
            },
            main: {
              color: "#fff",
              intensity: 0.4,
              shadow: false,
              shadowQuality: "high",
              alpha: 45,
              beta: 45,
            },
          },
          viewControl: {
            autoRotate: true,
            autoRotateDirection: "ccw",
            autoRotateSpeed: 5,
            damping: 0.8,
            center: [80, 50, 30],
            distance: 200,
            targetCoord: [120.206958, 30.214328],
          },
        },

        series: {
          type: "lines3D",
          coordinateSystem: "globe",
          blendMode: "lighter",
          lineStyle: {
            width: 1,
            color: "rgb(50, 50, 150)",
            opacity: 0.1,
          },
          effect: {
            show: true,
            period: 15, //箭头指向速度，值越小速度越快
            trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: "arrow", //箭头图标
            symbolSize: 1, //图标大小
          },
          data: mock,
        },
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
