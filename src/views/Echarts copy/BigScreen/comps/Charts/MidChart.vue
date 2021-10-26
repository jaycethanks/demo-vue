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
      var xdata = ["去年同月累计", "去年同月", "年初至本月累计", "本月"];
      var ydata = [
        "集装箱（万TEU）",
        "内河（万吨）",
        "沿海（万吨）",
        "其中：外贸（万吨）",
        "总港口吞吐量（万吨）",
      ];
      var vdata1 = [1623, 4963, 38279, 13865, 43242];
      var vdata2 = [600, 1966, 14011, 4799, 15876];
      var vdata3 = [1350, 4806, 37360, 13632, 41900];
      var vdata4 = [515, 2028, 14361, 4887, 16389];
      var fontColor = "#30eee9";
      var piedata1 = [
        {
          name: "水路运输",
          value: 4947289.9,
        },
        {
          name: "铁路运输",
          value: 58478.1,
        },
        {
          name: "公路运输",
          value: 1108923.3,
        },
        {
          name: "航空运输",
          value: 1166309.8,
        },
        {
          name: "邮件运输",
          value: 394.8,
        },
        {
          name: "其它运输",
          value: 108465.2,
        },
      ];
      var piedata2 = [
        {
          name: "水路运输",
          value: 2994962.7,
        },
        {
          name: "铁路运输",
          value: 52694.2,
        },
        {
          name: "公路运输",
          value: 495376.5,
        },
        {
          name: "航空运输",
          value: 514103.1,
        },
        {
          name: "邮件运输",
          value: 332.6,
        },
        {
          name: "其它运输",
          value: 100384.2,
        },
      ];

      var piedata3 = [
        {
          name: "水路运输",
          value: 9834899.5,
        },
        {
          name: "铁路运输",
          value: 35975.8,
        },
        {
          name: "公路运输",
          value: 3103988.4,
        },
        {
          name: "航空运输",
          value: 2478583.1,
        },
        {
          name: "邮件运输",
          value: 118873.6,
        },
        {
          name: "其它运输",
          value: 51835.6,
        },
      ];
      this.chart.setOption({
        backgroundColor: "#0C1E49",
        title: {
          text: "2020年1-4月港口吞吐量情况",
          fontColor: "#FFF",
        },
        legend: {
          data: xdata,
          textStyle: {
            color: fontColor,
          },
          bottom: "45%",
        },
        tooltip: {},
        xAxis: {
          type: "value",
          max: 45000,
          axisLabel: {
            color: fontColor,
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: fontColor,
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: fontColor,
            },
          },
        },
        yAxis: {
          data: ydata,
          axisLabel: {
            color: fontColor,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: fontColor,
            },
          },
        },
        grid: [
          {
            bottom: "55%",
            top: "15%",
            left: "15%",
            right: "5%",
          },
        ],
        series: [
          {
            name: "去年同月累计",
            type: "bar",
            data: vdata1,
          },
          {
            name: "去年同月",
            type: "bar",
            data: vdata2,
          },
          {
            name: "年初至本月累计",
            type: "bar",
            data: vdata3,
          },
          {
            name: "本月",
            type: "bar",
            data: vdata4,
          },
          {
            name: "进出口合计（5月）",
            type: "pie",
            radius: "55%",
            //center: ['50%', '50%'],
            data: piedata1,
            bottom: "0%",
            top: "55%",
            left: "0%",
            right: "65%",
          },
          {
            name: "人民币(万）_出口_2020年5月",
            type: "pie",
            radius: "55%",
            //center: ['50%', '50%'],
            data: piedata2,
            bottom: "0%",
            top: "55%",
            left: "33%",
            right: "32%",
          },
          {
            name: "人民币(万）_进口_2020年1月至2020年5月",
            type: "pie",
            radius: "55%",
            //center: ['50%', '50%'],
            data: piedata3,
            bottom: "0%",
            top: "55%",
            left: "65%",
            right: "0%",
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
