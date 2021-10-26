<template>
  <div style="height:100%" />
</template>

<script>
// import resize from "@/views/dashboard/mixins/resize";

const animationDuration = 1000;

export default {
  // mixins: [resize],
  props: {
    dataSource: {
      // 不直接传入轴数据 和 系列数据的原因是因为tooltip 需要展示额外的数据字段，ringRatio
      type: Array,
      default: () => [
        { date: "2021", payBill: "1252", unPayBill: "5648", total: "9895" },
      ],
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
    xAxisData: function() {
      // 从props 中取出轴数据
      return this.dataSource.map((it) => it.date);
    },
    reportMeter: function() {
      // 从props 中取出系列
      return this.dataSource.map((it) => it.payBill);
    },
    unReportMeter: function() {
      // 从props 中取出系列
      return this.dataSource.map((it) => it.unPayBill);
    },
    shouldReportTotal: function() {
      // 从props 中取出系列
      return this.dataSource.map((it) => it.total);
    },
  },
  watch: {
    // 监听数据变化，触发图表绘制刷新
    dataSource: {
      handler: function() {
        this.drawChart();
      },
      deep: true,
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

      // let dataSrc = this.dataSource.map(item => {
      //   return {
      //     value: item.volume,
      //     name: item.time
      //   };
      // });

      // const target = new Map();
      // this.dataSource.forEach(item => {
      //   target.set(item.time, {
      //     ringRatio: item.ringRatio,
      //     volume: item.volume
      //   });
      // });

      this.chart.setOption({
        title: {
          text: "最近30天通信情况",
          left: "center",
          top: 20,
        },
        legend: {
          show: true,
          right: 0,
        },
        tooltip: {
          backgroundColor: "#fff",
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
          },
          // formatter: function(name) {
          //   let ringRatio = target.get(name[0].name).ringRatio;
          //   let volume = target.get(name[0].name).volume;
          //   return `
          //   <div style="margin:0;padding:10px;>
          //   <p style="margin:0;color:red;font-weight:bold">${name[0].name}</p>
          //   <p style="margin:0;font-weight:bold"><span style="color:#188ffb;font-size:18px;">●</span>用水量: ${Math.abs(
          //     volume
          //   )}</p>
          //   <p style="margin:0">${_this.tooltipItem}: <span style='color:${
          //     ringRatio > 0 ? "green" : ringRatio < 0 ? "red" : "black"
          //   }'>${ringRatio > 0 ? "▲" : ringRatio < 0 ? "▼" : ""} ${Math.abs(
          //     ringRatio
          //   )} %</span> </p>
          //   </div>
          //   `;
          // }
        },
        grid: {
          top: 30,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.xAxisData,
            axisLine: {
              lineStyle: {
                color: "#eeeeee",
              },
            },
            axisLabel: {
              // inside: true,
              color: "#4d4d4d",
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
            },
            axisLabel: {
              color: "#999",
            },
            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "支付账单",
            type: "bar",
            stack: "total",
            // stack: "vistors",
            barWidth: "40%",
            itemStyle: {
              borderRadius: 2, // 统一设置四个角的圆角大小
              color: "#f40",
              // color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   { offset: 0, color: "#f40" }
              //   // { offset: 0.5, color: "#188df0" },
              //   // { offset: 1, color: "#1890ff" }
              // ])
            },
            data: this.reportMeter,
            animationDuration,
          },
          {
            name: "未支付账单",
            type: "bar",
            stack: "total",
            // stack: "vistors",
            barWidth: "40%",
            itemStyle: {
              borderRadius: 2, // 统一设置四个角的圆角大小
              color: "#04f",
            },
            data: this.unReportMeter,
            animationDuration,
          },
          {
            name: "应支付账单",
            type: "bar",
            stack: "total",
            // stack: "vistors",
            barWidth: "40%",
            itemStyle: {
              borderRadius: 2, // 统一设置四个角的圆角大小
              color: "#f0f",
            },
            data: this.shouldReportTotal,
            animationDuration,
          },

          // {
          //   name: "pageB",
          //   type: "line",
          //   stack: "vistors",
          //   barWidth: "60%",
          //   data: [80, 52, 200, 334, 390, 330, 220],
          //   animationDuration
          // },
        ],
      });
      _this.resize(); //首次绘制 resize
      // 窗口缩放resize
      window.addEventListener("resize", _this.resize());
    },
    resize() {
      this.chart.resize({
        //https://echarts.apache.org/zh/api.html#echartsInstance.resize
        //注意，将在每次查询时被执行
        width: "auto", //自动获取dom宽度
        height: (() => {
          // console.log(document.body.clientHeight * 0.3 + "px", "--line157");
          // return document.body.clientHeight * 0.3 + "px";
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
