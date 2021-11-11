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
    // this.chart.dispatchAction({
    //   type: "select",
    //   name: "Angola",
    // });
    // return;
    let _this = this;
    let a = [
      "Angola",
      "Benin",
      "Cameroon",
      "Kenya",
      "Botswana",
      "Ghana",
      "Gabon",
      "Rwanda",
      "Sierra Leone",
      "Swaziland",
      "Tanzania",
      "Togo",
      "Swaziland",
      "Uganda",
      "Namibia",
      "Mozambique",
      "Ethiopia",
      "Lesotho",
      "Madagascar",
      "Malawi",
      "Zambia",
      "Zimbabwe",
      "Peru",
      "Vietnam",
      "Nigeria",
      "Indonesia",
      "France",
      "India",
      "Italy",
      "Cambodia",
      "Greece",
      "Burkina Faso",
      "Liberia",
      "Philippines",
      "Niger",
      "Kazakhstan",
      "Egypt",
    ];
    function ranCon() {
      return a[Math.floor(Math.random() * a.length)];
    }
    let start = ranCon();
    !(function loop() {
      setTimeout(() => {
        console.log(a[Math.floor(Math.random() * a.length)], "--line100");
        _this.chart.dispatchAction({
          type: "legendUnSelect",
          name: start,
        });
        start = ranCon();
        _this.chart.dispatchAction({
          type: "legendSelect",
          name: start, //'Angola'
        });

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
      let _rawData = [
        [
          "Angola",
          [
            "",
            "",
            "",
            "4.40",
            "4.40",
            "4.40",
            "4.40",
            "4.40",
            "4.40",
            "4.40",
            "4.40",
            "4.40",
          ],
        ],
        [
          "Benin",
          [
            "",
            "3.20",
            "3.20",
            "3.20",
            "3.20",
            "3.20",
            "3.20",
            "3.20",
            "3.20",
            "3.20",
            "3.20",
            "3.20",
          ],
        ],
        [
          "Cameroon",
          [
            "",
            "",
            "",
            "",
            "6.90",
            "6.90",
            "6.90",
            "6.90",
            "6.90",
            "6.90",
            "6.90",
            "6.90",
          ],
        ],
        [
          "Kenya",
          [
            "",
            "",
            "",
            "",
            "",
            "",
            "2.78",
            "2.78",
            "2.78",
            "2.78",
            "2.78",
            "2.78",
          ],
        ],
        [
          "Botswana",
          [
            "",
            "",
            "4.58",
            "4.58",
            "4.58",
            "4.58",
            "4.58",
            "4.58",
            "4.58",
            "4.58",
            "4.58",
            "4.58",
          ],
        ],
        ["Ghana", ["", "", "", "", "", "", "", "", "", "1.32", "1.32", "1.32"]],
        [
          "Gabon",
          [
            "",
            "",
            "",
            "3.63",
            "3.63",
            "3.63",
            "3.63",
            "3.63",
            "3.63",
            "3.63",
            "3.63",
            "3.63",
          ],
        ],
        [
          "Rwanda",
          [
            "",
            "9.76",
            "9.76",
            "9.76",
            "9.76",
            "9.76",
            "9.76",
            "9.76",
            "9.76",
            "9.76",
            "9.76",
            "9.76",
          ],
        ],
        [
          "Sierra Leone",
          [
            "",
            "6.40",
            "6.40",
            "6.40",
            "6.40",
            "6.40",
            "6.40",
            "6.40",
            "6.40",
            "6.40",
            "6.40",
            "6.40",
          ],
        ],
        [
          "Swaziland",
          ["", "", "", "", "", "", "", "6.00", "6.00", "6.00", "6.00", "6.00"],
        ],
        [
          "Tanzania",
          [
            "",
            "",
            "3.48",
            "3.48",
            "3.48",
            "3.48",
            "3.48",
            "3.48",
            "3.48",
            "3.48",
            "3.48",
            "3.48",
          ],
        ],
        [
          "Togo",
          [
            "2.44",
            "2.44",
            "2.44",
            "2.44",
            "2.44",
            "2.44",
            "2.44",
            "2.44",
            "2.44",
            "2.44",
            "2.44",
            "2.44",
          ],
        ],
        [
          "Swaziland",
          [
            "",
            "",
            "",
            "",
            "",
            "6.21",
            "6.21",
            "6.21",
            "6.21",
            "6.21",
            "6.21",
            "6.21",
          ],
        ],
        [
          "Uganda",
          ["", "", "", "", "", "", "", "", "8.48", "8.48", "8.48", "8.48"],
        ],
        [
          "Namibia",
          [
            "4.33",
            "4.33",
            "4.33",
            "4.33",
            "4.33",
            "4.33",
            "4.33",
            "4.33",
            "4.33",
            "4.33",
            "4.33",
            "4.33",
          ],
        ],
        [
          "Mozambique",
          [
            "",
            "",
            "0.73",
            "0.73",
            "0.73",
            "0.73",
            "0.73",
            "0.73",
            "0.73",
            "0.73",
            "0.73",
            "0.73",
          ],
        ],
        [
          "Ethiopia",
          [
            "",
            "",
            "",
            "",
            "",
            "",
            "6.35",
            "6.35",
            "6.35",
            "6.35",
            "6.35",
            "6.35",
          ],
        ],
        [
          "Lesotho",
          ["", "", "", "", "", "", "", "", "", "4.33", "4.33", "4.33"],
        ],
        [
          "Madagascar",
          [
            "",
            "",
            "3.18",
            "3.18",
            "3.18",
            "3.18",
            "3.18",
            "3.18",
            "3.18",
            "3.18",
            "3.18",
            "3.18",
          ],
        ],
        [
          "Malawi",
          ["", "", "", "", "", "", "", "4.29", "4.29", "4.29", "4.29", "4.29"],
        ],
        [
          "Zambia",
          [
            "",
            "",
            "",
            "8.53",
            "8.53",
            "8.53",
            "8.53",
            "8.53",
            "8.53",
            "8.53",
            "8.53",
            "8.53",
          ],
        ],
        [
          "Zimbabwe",
          [
            "",
            "",
            "",
            "",
            "1.16",
            "1.16",
            "1.16",
            "1.16",
            "1.16",
            "1.16",
            "1.16",
            "1.16",
          ],
        ],
        [
          "Peru",
          [
            "",
            "",
            "",
            "3.80",
            "3.80",
            "3.80",
            "3.80",
            "3.80",
            "3.80",
            "3.80",
            "3.80",
            "3.80",
          ],
        ],
        [
          "Vietnam",
          ["", "", "", "", "", "", "", "5.81", "5.81", "5.81", "5.81", "5.81"],
        ],
        [
          "Nigeria",
          [
            "",
            "",
            "5.25",
            "5.25",
            "5.25",
            "5.25",
            "5.25",
            "5.25",
            "5.25",
            "5.25",
            "5.25",
            "5.25",
          ],
        ],
        [
          "Indonesia",
          ["", "", "", "", "", "", "", "3.71", "3.71", "3.71", "3.71", "3.71"],
        ],
        [
          "France",
          [
            "",
            "",
            "0.65",
            "0.65",
            "0.65",
            "0.65",
            "0.65",
            "0.65",
            "0.65",
            "0.65",
            "0.65",
            "0.65",
          ],
        ],
        [
          "India",
          [
            "",
            "7.68",
            "7.68",
            "7.68",
            "7.68",
            "7.68",
            "7.68",
            "7.68",
            "7.68",
            "7.68",
            "7.68",
            "7.68",
          ],
        ],
        [
          "Italy",
          [
            "",
            "6.79",
            "6.79",
            "6.79",
            "6.79",
            "6.79",
            "6.79",
            "6.79",
            "6.79",
            "6.79",
            "6.79",
            "6.79",
          ],
        ],
        [
          "Cambodia",
          [
            "2.07",
            "2.07",
            "2.07",
            "2.07",
            "2.07",
            "2.07",
            "2.07",
            "2.07",
            "2.07",
            "2.07",
            "2.07",
            "2.07",
          ],
        ],
        [
          "Greece",
          [
            "",
            "",
            "",
            "1.15",
            "1.15",
            "1.15",
            "1.15",
            "1.15",
            "1.15",
            "1.15",
            "1.15",
            "1.15",
          ],
        ],
        [
          "Burkina Faso",
          [
            "",
            "",
            "",
            "",
            "",
            "9.61",
            "9.61",
            "9.61",
            "9.61",
            "9.61",
            "9.61",
            "9.61",
          ],
        ],
        [
          "Liberia",
          [
            "",
            "",
            "",
            "",
            "",
            "3.24",
            "3.24",
            "3.24",
            "3.24",
            "3.24",
            "3.24",
            "3.24",
          ],
        ],
        [
          "Philippines",
          [
            "",
            "",
            "",
            "",
            "0.56",
            "0.56",
            "0.56",
            "0.56",
            "0.56",
            "0.56",
            "0.56",
            "0.56",
          ],
        ],
        [
          "Niger",
          [
            "",
            "",
            "",
            "",
            "",
            "8.28",
            "8.28",
            "8.28",
            "8.28",
            "8.28",
            "8.28",
            "8.28",
          ],
        ],
        [
          "Kazakhstan",
          [
            "6.92",
            "6.92",
            "6.92",
            "6.92",
            "6.92",
            "6.92",
            "6.92",
            "6.92",
            "6.92",
            "6.92",
            "6.92",
            "6.92",
          ],
        ],
        [
          "Egypt",
          [
            "",
            "7.06",
            "7.06",
            "7.06",
            "7.06",
            "7.06",
            "7.06",
            "7.06",
            "7.06",
            "7.06",
            "7.06",
            "7.06",
          ],
        ],
      ];
      let series = [];
      _rawData.forEach((item) => {
        let _series = {
          type: "line",
          name: item[0],
          data: item[1],
          showSymbol: false,
          itemStyle: {
            color: "#0f73ffe3",
            shadowBlur: 2,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: "#0f73ffe3",
          },
          areaStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#0f73ffe3", // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#0f73ff40", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#0f73ff0a", // 100% 处的颜色
                },
              ],
            },
          },
          lineStyle: {
            color: "#0f73ffe3",
            shadowBlur: 2,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: "#0f73ffe3",
          },
        };
        series.push(_series);
      });
      this.chart.setOption({
        grid: {
          top: 80,
          bottom: 20,
          left: 20,
          right: 50,
        },

        xAxis: {
          type: "category",
          data: [
            2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
            2021,
          ],
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          splitLine: {
            show: false,
          },
        },
        label: {
          // show: true,
          position: "end",
        },
        legend: {
          show: true,
          icon: "rect",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
          },
          selected: {
            Angola: false,
            Benin: false,
            Cameroon: false,
            Kenya: false,
            Botswana: false,
            Ghana: false,
            Gabon: false,
            Rwanda: false,
            "Sierra Leone": false,
            Swaziland: false,
            Tanzania: false,
            Togo: false,
            Swaziland: false,
            Uganda: false,
            Namibia: false,
            Mozambique: false,
            Ethiopia: false,
            Lesotho: false,
            Madagascar: false,
            Malawi: false,
            Zambia: false,
            Zimbabwe: false,
            Peru: false,
            Vietnam: false,
            Nigeria: false,
            Indonesia: false,
            France: false,
            India: false,
            Italy: false,
            Cambodia: false,
            Greece: false,
            "Burkina Faso": false,
            Liberia: false,
            Philippines: false,
            Niger: false,
            Kazakhstan: false,
            Egypt: false,
          },
        },
        series: series,
      });
      _this.resize(); //首次绘制 resi

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
