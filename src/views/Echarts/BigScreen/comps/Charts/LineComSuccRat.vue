<template>
  <div :class="className" />
</template>

<script>
// import resize from "@/views/dashboard/mixins/resize";
let chart = null;
export default {
  // mixins: [resize],
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
    };
  },
  computed: {
    seriesData: function () {
      // 从props 中取出系列
      return this.dataSource.map((it) => it);
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
    chart = this.$echarts.init(this.$el, "macarons");
    this.drawChart();
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
        title: {
          text: "近七日通信情况",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: "23",
          },
        },
        grid: {
          bottom: 20,
          top: 40,
          right: 55,
        },

        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: false,
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: ["9/12", "9/13", "9/14", "9/15", "9/16", "9/17", "9/18"],
          axisLabel: {
            color: "#1fe9ff",
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          max: 100,
          min: 0,
          axisLabel: {
            formatter: "{value} %",
            color: "#1fe9ff",
          },
        },
        series: [
          {
            name: "Highest",
            type: "bar",
            barWidth: 20,
            data: [100, 100, 87, 100, 76, 86, 93],
            // markPoint: {
            //   data: [
            //     { type: "max", name: "Max" },
            //     { type: "min", name: "Min" },
            //   ],
            // },
            markLine: {
              silent: true,
              symbol: "none",
              lineStyle: {
                color: "#4dfff3",
                width: 2,
                shadowColor: "rgb(0, 0, 0)",
                shadowBlur: 10,
              },
              label: {
                color: "#1fe9ff",
                formatter: "{c} %",
              },
              data: [
                {
                  type: "average",
                  name: "Avg",
                },
              ],
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#1fe9ff33",
                  },
                  {
                    offset: 1,
                    color: "#1fe9ff",
                  },
                ],
              },
            },
          },
        ],
      });
      _this.resize(); //首次绘制 resize
      // 窗口缩放resize
      window.addEventListener("resize", _this.resize()); //这个不加也可以，但是加了在resize的时候更加流畅
    },
    resize() {
      chart.resize({
        //https://echarts.apache.org/zh/api.html#echartsInstance.resize
        //注意，将在每次查询时被执行
        width: "auto", //自动获取dom宽度
        height: (() => {
          // console.log(document.body.clientHeight * 0.3 + "px", "--line157");
          // return document.body.clientHeight * 0.3 + "px";
          "auto";
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
