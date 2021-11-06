<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  created() {
    console.log("pia chart created", "--line27");
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
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
    initChart() {
      this.chart = this.$echarts.init(this.$el, "macarons");
      let commonStyle = {
        borderColor: "#61dfffc4",
        borderWidth: 1,
        shadowColor: "rgb(130, 248, 234)",
        shadowOffsetX: -2,
        shadowOffsetY: 2,
        shadowBlur: 10,
        color: "rgba(31, 240, 255, 0.09)",
        // color: {
        //   type: "radial",
        //   x: 0.5,
        //   y: 0.5,
        //   r: 0.8,
        //   colorStops: [
        //     {
        //       offset: 0,
        //       color: "rgba(31, 240, 255, 0.09)", // 0% 处的颜色
        //     },
        //     {
        //       offset: 0.2,
        //       color: "rgba(31, 225, 255, 0.23)", // 0% 处的颜色
        //     },
        //     {
        //       offset: 0.6,
        //       color: "rgba(31, 255, 248, 0.45)", // 0% 处的颜色
        //     },
        //     {
        //       offset: 0.7,
        //       color: "rgba(31, 229, 255, 0.77)", // 0% 处的颜色
        //     },
        //     {
        //       offset: 1,
        //       color: "rgba(0, 229, 255, 0.77)", // 100% 处的颜色
        //     },
        //   ],
        //   globalCoord: false, // 缺省为 false
        // },
      };
      let highlightStyle = {
        borderColor: "#61dfffc4",
        borderWidth: 1,
        shadowColor: "rgb(130, 248, 234)",
        shadowOffsetX: -2,
        shadowOffsetY: 2,
        shadowBlur: 10,
        color: "rgba(31, 240, 255, 0.4)",
      };

      this.chart.setOption({
        title: {
          show: false,
        },
        // background: "#f40",
        tooltip: {
          show: false,
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          show: false,
          left: "center",
          // bottom: "10",
          data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
        },
        label: {
          show: false,
        },
        series: [
          {
            animationEasing: "cubicInOut",
            animationDuration: 1000,
            name: "Access From",
            type: "pie",
            center: ["50%", "50%"],
            radius: [0, "100%"],
            roseType: "radius",
            colorBy: "data",
            label: {
              position: "inside",
              fontSize: 16,
              fontWeight: "bold",
              color: "rgb(255, 255, 255)",
              textShadowColor: "rgb(46, 203, 255)",
              textShadowBlur: 8,
              textShadowOffsetX: 2,
              textShadowOffsetY: 2,
            },
            labelLine: { show: false },
            data: [
              {
                value: 1048,
                name: "",
                itemStyle: { ...commonStyle },
              },
              {
                value: 735,
                name: "7%",
                itemStyle: { ...highlightStyle },
              },
            ],

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>
