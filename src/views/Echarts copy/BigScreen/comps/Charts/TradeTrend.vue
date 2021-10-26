<template>
  <div :class="className" />
</template>

<script>
// import resize from "@/views/dashboard/mixins/resize";

const animationDuration = 1000;

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
      chart: null,
    };
  },
  computed: {
    seriesData: function() {
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
      var xData = (function() {
        var data = [];
        for (var i = 1; i < 31; i++) {
          data.push(i + "日");
        }
        return data;
      })();
      let _this = this;
      this.chart.setOption({
        backgroundColor: "#1A1835",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          borderWidth: 0,
          top: 0,
          right: 0,
          bottom: 0,
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          x: "46%",
          top: "11%",
          textStyle: {
            color: "#90979c",
          },
          data: ["访问量", "订单量"],
        },

        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "rgba(204,187,225,0.5)",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            data: xData,
          },
        ],

        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(204,187,225,0.5)",
              },
            },
          },
        ],
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,

            start: 10,
            end: 80,
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            handleStyle: {
              color: "#5B3AAE",
            },
            textStyle: {
              color: "rgba(204,187,225,0.5)",
            },
            fillerColor: "rgba(67,55,160,0.4)",
            borderColor: "rgba(204,187,225,0.5)",
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35,
          },
        ],
        series: [
          {
            name: "访问量",
            type: "line",
            symbolSize: 10,
            symbol: "circle",
            itemStyle: {
              color: "#6f7de3",
            },
            markPoint: {
              label: {
                normal: {
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              data: [
                {
                  type: "max",
                  name: "最大值",
                },
                {
                  type: "min",
                  name: "最小值",
                },
              ],
            },
            data: [
              509,
              917,
              2455,
              2610,
              2719,
              3033,
              3044,
              3085,
              2708,
              2809,
              2117,
              2000,
              1455,
              1210,
              719,
              733,
              944,
              2285,
              2208,
              3372,
              3936,
              3693,
              2962,
              2810,
              3519,
              2455,
              2610,
              2719,
              2484,
              2078,
            ],
          },
          {
            name: "订单量",
            type: "line",
            symbolSize: 10,
            symbol: "circle",
            itemStyle: {
              color: "#c257F6",
            },
            markPoint: {
              label: {
                normal: {
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              data: [
                {
                  type: "max",
                  name: "最大值",
                },
                {
                  type: "min",
                  name: "最小值",
                },
              ],
            },
            data: [
              2136,
              3693,
              2962,
              3810,
              3519,
              3484,
              3915,
              3823,
              3455,
              4310,
              4019,
              3433,
              3544,
              3885,
              4208,
              3372,
              3484,
              3915,
              3748,
              3675,
              4009,
              4433,
              3544,
              3285,
              4208,
              3372,
              3484,
              3915,
              3823,
              4265,
              4298,
            ],
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
