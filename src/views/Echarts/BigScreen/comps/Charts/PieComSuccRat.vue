<template>
  <div :class="className" />
</template>

<script>
// import resize from "@/views/dashboard/mixins/resize";

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
      let pieData = [
        {
          name: "日",
          value: 50,
        },
        {
          name: "周",
          value: 30,
        },
        {
          name: "月",
          value: 70,
        },
      ];
      var titleArr = [],
        seriesArr = [];
      pieData.forEach(function (item, index) {
        titleArr.push({
          text: item.name,
          left: index * 34 + 13.5 + "%",
          top: "48%",
          textAlign: "center",
          textStyle: {
            fontWeight: "normal",
            fontSize: "16px",
            color: "white",
            textAlign: "center",
          },
        });
        seriesArr.push({
          name: item.name,
          type: "pie",
          legend: {
            show: true,
          },
          clockwise: true,
          radius: ["50%", "70%"],
          hoverAnimation: false,
          center: [index * 34 + 15.5 + "%", "45%"],
          data: [
            {
              value: item.value,
              itemStyle: {
                borderWidth: 1.5,
                borderColor: {
                  colorStops: [
                    {
                      offset: 0,
                      // color: "#1d54f7",
                      color: ["#fdcb58", "#fd5858", "#8c87f2"][index],
                    },
                    {
                      offset: 1,
                      // color: "#68eaf9",
                      color: ["#ff810a", "#ff0aeb", "#4405ff"][index],
                    },
                  ],
                },
                color: {
                  colorStops: [
                    {
                      offset: 0,
                      // color: "#1d54f7",
                      color: ["#fdcb58", "#fd5858", "#8c87f2"][index],
                    },
                    {
                      offset: 1,
                      // color: "#68eaf9"
                      color: ["#ff810a", "#ff0aeb", "#4405ff"][index],
                    },
                  ],
                },
              },
              label: {
                formatter: function (params) {
                  return params.value + "%";
                },
                top: 10,
                show: true,
                textStyle: {
                  fontSize: "16",
                  fontWeight: "bold",
                  color: ["#fdcb58", "#fd5858", "#8c87f2"][index],
                },
                position: "center",
              },
            },
            {
              value: 100 - item.value,
              name: "invisible",
              itemStyle: {
                color: "#4405ff57",
              },
              label: {
                show: false,
              },
            },
          ],
        });
      });
      this.chart.setOption({
        grid: {
          left: "5%",
          right: "2%",
          bottom: "0%",
          top: "0%",
          containLabel: true,
        },
        backgroundColor: "black",
        title: titleArr,
        series: seriesArr,
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
