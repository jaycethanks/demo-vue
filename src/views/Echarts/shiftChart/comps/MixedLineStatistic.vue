<!--
 * @Author:
 * @Date: 2021年12月28日
 * @Description: 客户日月冻结echart 柱线 图组件
 * @FilePath: \demo-vue\src\views\Echarts\shiftChart\comps\MixedLineStatistic.vue
 *
-->
<template>
  <div></div>
</template>

<script>
import resize from "./resize.js";

export default {
  props: {
    param: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  mixin: [resize],
  data() {
    return {
      height: "500px",
      e_chart: null,
    };
  },
  computed: {
    xAxisData: function() {
      return this.param.map((it) => it.freezeDate);
    },
    seriesVolume: function() {
      return this.param.map((it) => it.freezeVolume);
    },
    seriesAmount: function() {
      return this.param.map((it) => it.customerChangeAmount);
    },
  },
  watch: {
    param: {
      handler() {
        this.drawChart();
      },
    },
  },
  created() {},
  mounted() {
    this.e_chart = this.$echarts.init(this.$el);
    this.drawChart();
    this.resizeListener();
  },
  methods: {
    drawChart() {
      let _this = this;
      console.log(this.param, "---Onlylmf55");
      this.e_chart.setOption({
        title: {
          text: "Statistics.customerFreezeData",
        },
        color: ["#2196f3"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: ["日用量", "日扣费"],
        },
        xAxis: [
          {
            type: "category",
            data: this.xAxisData,
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              show: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "日用量",
            interval: 10,
            splitLine: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              formatter: "{value} 吨",
            },
          },
          {
            splitLine: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            max: 50,
            type: "value",
            name: "日扣费",
            interval: 5,
            axisLabel: {
              formatter: "{value} 元",
            },
          },
        ],
        series: [
          {
            name: "日用量",
            type: "bar",

            data: this.seriesVolume,
            label: {
              show: true,
              // distance:-50,
              position: "top",
              color: "#2b9bf4",
              fontSize: 12,
              formatter: "{c} 吨",
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(195,230,255,1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(195,230,255,0.1)",
                    },
                  ],
                  false,
                ),
                shadowColor: "#00000011",
                shadowBlur: 20,
              },
            },
          },
          {
            name: "日扣费",
            type: "line",
            yAxisIndex: 1,
            data: this.seriesAmount,
            smooth: true,
            label: {
              show: true,
              formatter: "{c} 元",
              distance: 0,
              color: "#000",
              fontSize: 12,
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(195,230,255,0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(195,230,255,0.1)",
                    },
                  ],
                  false,
                ),
                shadowColor: "#00000011",
                shadowBlur: 20,
              },
            },
          },
        ],
      });
      _this.e_chart.resize({
        width: "auto", //自动获取dom宽度
        height: (() => {
          // console.log(document.body.clientHeight * 0.3 + "px", "--line157");
          // return document.body.clientHeight * 0.3 + "px";
        })(),
      });
    },
    resizeListener() {
      let _this = this;
      window.addEventListener("resize", function() {
        _this.e_chart.resize({
          width: "auto", //自动获取dom宽度
          height: (() => {
            // console.log(document.body.clientHeight * 0.3 + "px", "--line157");
            // return document.body.clientHeight * 0.3 + "px";
          })(),
        }); //solve ：https://blog.csdn.net/keloneko/article/details/106062750
      });
    },
  },
};
</script>

<style scoped></style>
