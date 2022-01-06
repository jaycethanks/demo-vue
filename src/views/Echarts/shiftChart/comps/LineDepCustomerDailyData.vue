<!--
 * @Author:
 * @Date: 2021年12月29日
 * @Description: 客户日冻结echart 线图组件
 * @FilePath: \demo-vue\src\views\Echarts\shiftChart\comps\LineDepCustomerDailyData.vue
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
      e_chart: null,
    };
  },
  computed: {
    yAxis: function() {
      let hourDatas = [];
      hourDatas = this.param[0].hourDatas;
      return hourDatas;
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
      console.log("trigger 绘制", "--line52");
      let _this = this;
      this.e_chart.setOption({
        title: {
          text: "Statistics.customerDailyFreezeData",
        },
        tooltip: {
          trigger: "axis",
        },
        visualMap: [
          {
            show: false,
            type: "continuous",
            seriesIndex: 0,
            min: 0,
            max: 30,
          },
        ],
        xAxis: {
          type: "category",
          data: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
          ],
        },
        yAxis: {
          type: "value",
          name: "小时用量",
          interval: 5.0,
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
        series: [
          {
            data: [
              1.0,
              5.0,
              8.0,
              23.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              0.0,
              44.0,
              0.0,
              0.0,
              0.0,
              2.0,
              0.0,
              0.0,
              0.0,
              15.0,
              0.0,
              0.0,
              8.0,
              0.0,
            ],
            type: "line",
            showSymbol: false,
            smooth: true,
          },
        ],
      });
      _this.e_chart.resize({
        width: "auto", //自动获取dom宽度
        height: (() => {
          // return document.body.clientHeight * 0.3 + "px";
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
  destroyed() {
    this.e_chart.dispose();
  },
};
</script>

<style scoped></style>
