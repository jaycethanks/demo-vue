<template>
  <div />
</template>

<script>
// import resize from "@/views/dashboard/mixins/resize";

export default {
  // mixins: [resize],
  props: {
    // className: {
    //   type: String,
    //   default: "chart",
    // },
    // dataSource: {
    //   // 不直接传入轴数据 和 系列数据的原因是因为tooltip 需要展示额外的数据字段，ringRatio
    //   type: Array,
    //   default: () => [],
    // },
    // tooltipItem: {
    //   type: String,
    //   default: "Link Relative Ratio",
    // },
  },
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    // seriesData: function () {
    //   // 从props 中取出系列
    //   return this.dataSource.map((it) => it);
    // },
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
      let _data = [
        {
          value: [
            80.9, 83.9, 90.1, 60.7, 48.3, 39.2, 31.6, 46.6, 55.4, 10.4, 10.3,
            9.7,
          ],
          name: "南京螃蟹城",
        },
        {
          value: [
            50.9, 73.9, 30.1, 20.7, 78.3, 19.2, 81.6, 26.6, 65.4, 20.4, 30.3,
            29.7,
          ],
          name: "埃及苏伊士运河",
        },
        {
          value: [
            20.9, 33.9, 20.1, 10.7, 28.3, 29.2, 31.6, 26.6, 15.4, 50.4, 20.3,
            32,
          ],
          name: "莫桑比克FIPAG",
        },
        {
          value: [
            20.9, 13.9, 20.1, 40.7, 28.3, 59.2, 61.6, 56.6, 25.4, 30.4, 20.3,
            90.7,
          ],
          name: "尼日尔SEEN",
        },
      ];
      let xAxis = [],
        yAxis = [],
        series = [],
        grid = [];
      let vGap = 0;
      // utils function : generate color in define
      function colorDefine(id, opacity = "1") {
        let temp =
          id === 0
            ? "rgba(9,241,184," + opacity + ")"
            : id === 1
            ? "rgba(15, 255, 255," + opacity + ")"
            : id === 2
            ? "rgba(255, 102, 102," + opacity + ")"
            : "rgba(64, 169, 255," + opacity + ")";
        return temp;
      }
      _data.forEach((item, ind) => {
        let id = ind;
        let stepFactor = ind === 0 ? 10 : 22; //步进因子, 分别设定index 为0和不为0 的 'margin top' 值，
        vGap += stepFactor; //折线图垂直间隔
        let _grid = {
          id,
          left: 25,
          top: vGap + "%",
          right: 25,
          height: "20%",
        };
        let _xAxis = {
          gridIndex: id,
          type: "category",
          boundaryGap: false,
          axisLabel: {
            show: id === 3 ? true : false,
            color: "#1fe9ff",
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#1fe9ff57",
            },
          },
          axisLine: {
            show: false,
            onZero: false,
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "Precipitation  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          // prettier-ignore
          data: ['2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6', '2020-7', '2020-8', '2020-9', '2020-10', '2020-11', '2020-12'],
        };
        let _yAxis = {
          gridIndex: id,
          type: "value",
          splitLine: { show: false },
          axisLabel: {
            show: false,
            color: "#f40",
          },
        };
        let _series = {
          xAxisIndex: id,
          yAxisIndex: id,
          name: item.name,
          type: "line",
          smooth: true,
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: colorDefine(id),
          },
          label: {
            show: true,
            color: colorDefine(id),
            textBorderColor: "#000",
            textBorderWidth: 1,
            textShadowColor: colorDefine(id, 0.5),
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            textShadowBlur: 10,
          },
          data: item.value,
          lineStyle: {
            color: colorDefine(id),
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: colorDefine(id, 0.8), // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: colorDefine(id, 0.5), // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: colorDefine(id, 0), // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        };

        xAxis.push(_xAxis);
        yAxis.push(_yAxis);
        series.push(_series);
        grid.push(_grid);
      });

      // console.log(xAxis, "--linexAxis");
      // console.log(yAxis, "--lineyAxis");
      // console.log(series, "--lineseries");
      // console.log(grid, "--linegrid");

      this.chart.setOption({
        tooltip: {
          trigger: "none",
        },
        title: {
          show: false,
          text: "埃及苏伊士运河",
          // right: "center",
          left: 0,
          top: 0,
          textStyle: {
            fontSize: "16",
            color: "#fff",
          },
        },
        legend: {
          show: true,
          icon: "rect",
          selectedMode: false,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
          },
        },
        grid: grid,
        xAxis: xAxis,
        yAxis: yAxis,
        series: series,
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
