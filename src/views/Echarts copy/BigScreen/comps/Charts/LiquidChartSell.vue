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
        series: [
          {
            type: "liquidFill",
            radius: "78.1%",
            center: ["50%", "50%"],
            color: ["#ecf3fe", "#c8dcfe", "#5594fa"],
            data: [0.6104, 0.6104, 0.6104], // data个数代表波浪数
            amplitude: 15,
            // 图形样式
            itemStyle: {
              opacity: 1, // 波浪的透明度
              shadowBlur: 0, // 波浪的阴影范围
            },
            backgroundStyle: {
              borderWidth: 2,
              borderColor: "#448af9",
              color: "#fff",
            },
            label: {
              show: true,
              textStyle: {
                color: "#5594fa",
                insideColor: "#12786f",
                fontSize: 20,
              },
              formatter: (params) => {
                return `${(params.value * 100).toFixed(2)}%`;
              },
            },
            outline: {
              show: false,
            },
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
