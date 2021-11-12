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
      list: [],
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
    let _this = this;
    !(function loop() {
      setTimeout(() => {
        _this.chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
        });
        _this.chart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: Math.floor(Math.random() * _this.list.length),
          // name: _this.list[Math.floor(Math.random() * _this.list.length)],
        });
        _this.$emit("change");
        loop();
      }, 3000);
    })();
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
      var data = [
    {
        "name": "Burkina Faso",
        "value": "388"
    },
    {
        "name": "Niger",
        "value": "527"
    },
    {
        "name": "Angola",
        "value": "590"
    },
    {
        "name": "Zimbabwe",
        "value": "872"
    },
    {
        "name": "Rwanda",
        "value": "1319"
    },
    {
        "name": "Swaziland",
        "value": "2074"
    },
    {
        "name": "Cambodia",
        "value": "2877"
    },
    {
        "name": "Togo",
        "value": "3017"
    },
    {
        "name": "Ghana",
        "value": "3176"
    },
    {
        "name": "Vietnam",
        "value": "3350"
    },
    {
        "name": "Liberia",
        "value": "3590"
    },
    {
        "name": "Greece",
        "value": "3767"
    },
    {
        "name": "Sierra Leone",
        "value": "3873"
    },
    {
        "name": "Botswana",
        "value": "3881"
    },
    {
        "name": "Gabon",
        "value": "3921"
    },
    {
        "name": "Malawi",
        "value": "3928"
    },
    {
        "name": "Zambia",
        "value": "3945"
    },
    {
        "name": "France",
        "value": "4052"
    },
    {
        "name": "Madagascar",
        "value": "4374"
    },
    {
        "name": "India",
        "value": "4617"
    },
    {
        "name": "Lesotho",
        "value": "4626"
    },
    {
        "name": "Tanzania",
        "value": "4971"
    },
    {
        "name": "Mozambique",
        "value": "5018"
    },
    {
        "name": "Benin",
        "value": "5235"
    },
    {
        "name": "Indonesia",
        "value": "5335"
    },
    {
        "name": "Kazakhstan",
        "value": "5835"
    },
    {
        "name": "Philippines",
        "value": "6807"
    },
    {
        "name": "Cameroon",
        "value": "7184"
    },
    {
        "name": "Italy",
        "value": "7311"
    },
    {
        "name": "Peru",
        "value": "7335"
    },
    {
        "name": "Uganda",
        "value": "7569"
    },
    {
        "name": "Namibia",
        "value": "8431"
    },
    {
        "name": "Nigeria",
        "value": "8782"
    },
    {
        "name": "Ethiopia",
        "value": "9294"
    },
    {
        "name": "Kenya",
        "value": "9832"
    },
    {
        "name": "Egypt",
        "value": "9865"
    }
];
      _this.list = data;
      data.forEach((i) => {
        i.label = {
          alignTo: "edge",
          show: true,
          position: "outer",
          // minMargin: 5,
          edgeDistance: 10,

          color: "#006cf0",
          textBorderWidth: 2,
          textBorderColor: "#000000",
          // textShadowColor: "#ffffff",
          // textShadowBlur: 2,
        };

        i.itemStyle = {
          color: {
            type: "linear",
            // globalCoord: true,
            // glonal: true,
            // x: 0.5,
            // y: 0.5,
            // r: 0.5,
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
          borderColor: {
            colorStops: [
              {
                offset: 0,
                color: "#0569ffc9",
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
          top: 0,
          left: "3%",
          right: "10%",
          bottom: 0,
          containLabel: true,
        },
        series: [
          {
            name: "2012",
            type: "pie",
            radius: [0, 150],
            // center: ["50%", "60%"],
            roseType: "area",
            startAngle: 0,
            data: data,
            emphasis: {
              scaleSize: 15,
              itemStyle: {
                color: {
                  colorStops: [
                    {
                      offset: 1,
                      color: "#ff0905a1",
                    },
                    {
                      offset: 0,
                      color: "#ff09050f",
                    },
                  ],
                },
              },
              labelLine: {
                lineStyle: {
                  color: "#f00",
                },
              },
              label: {
                color: "#f00",
              },
            },
            labelLayout: function (params) {
              const isLeft = params.labelRect.x < _this.chart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points,
              };
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
