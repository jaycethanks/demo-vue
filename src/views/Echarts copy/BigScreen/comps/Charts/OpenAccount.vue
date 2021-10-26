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
      let _this = this;

      this.chart.setOption({
        tooltip: {
          backgroundColor: "#fff",
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          top: 20,
          left: 0,
          right: 0,
          bottom: 10,
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.xAxisData,
            axisLine: {
              lineStyle: {
                color: "#eeeeee",
              },
            },
            axisLabel: {
              // inside: true,
              color: "#4d4d4d",
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
            },
            axisLabel: {
              color: "#999",
            },
            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "line",
            // stack: "vistors",
            barWidth: "40%",
            itemStyle: {
              borderRadius: 2, // 统一设置四个角的圆角大小
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#1890ff" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#83bff6" },
              ]),
            },
            data: [1, 2, 3, 4, 5, 8, 9],
            animationDuration,
          },
          // {
          //   name: "pageB",
          //   type: "line",
          //   stack: "vistors",
          //   barWidth: "60%",
          //   data: [80, 52, 200, 334, 390, 330, 220],
          //   animationDuration
          // },
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
