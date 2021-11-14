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
    this.chart.dispatchAction({
      type: "mousedown",
      name: "Rwanda",
    });
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
      // prettier-ignore
      let length = Math.floor(Math.random()*10) + 5;
      let arr = [];
      for (let i = 0; i < length; i++) {
        arr.push({
          name:
            "ABCDEFGHIJKLMNOPQRSTVUWSYZ"[Math.floor(Math.random() * 26)] +
            Math.floor(Math.random() * 26),
          value: Math.floor(Math.random() * 100),
        });
      }

      let res = arr.sort((a, b) => {
        return a.value - b.value;
      });
      var data = res;
      data.forEach((i) => {
        i.itemStyle = {
          color: {
            x: 0,
            y: 1,
            colorStops: [
              {
                offset: 1,
                color: "#0064fa",
                // "rgba(" +
                // Math.random() * 20 +
                // 0 +
                // ", " +
                // Math.random() * 10 +
                // 100 +
                // ", " +
                // Math.random() * 5 +
                // 250 +
                // "," +
                // 0.9 +
                // ")",
              },
              {
                offset: 0,
                color: "#00000024",
              },
            ],
          },
        };
      });
      this.chart.setOption({
        title: {
          show: false,
          text: "World Population",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          show: false,
        },
        grid: {
          top: 20,
          left: 5,
          right: 5,
          bottom: 40,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: [0, 0.01],
          data: data.map((i) => i.name),
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          max: 100,
          splitLine: {
            show: true,
          },
        },
        series: [
          {
            name: "2012",
            type: "bar",
            data: data,
            label: {
              show: true,
              position: "top",
              formatter: "{b}",
            },

            // itemStyle: {
            //   color: {
            //     colorStops: [
            //       {
            //         offset: 1,
            //         color: "#1d53f7c4",
            //       },
            //       {
            //         offset: 0,
            //         color: "#476cff73",
            //       },
            //     ],
            //   },
            // },
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
