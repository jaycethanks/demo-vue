<template>
  <div class="component-root-wrapper">
    <div
      class="common-card-title"
      style="height: 20px; text-align: center; font-size: 16px; color: #fff"
    >
      订单详情
    </div>
    <dv-scroll-board style="height: calc(100% - 20px)" :config="config" />
  </div>
</template>
<script>
import RightBtm from "../Charts/RightBtm.vue";
export default {
  components: {
    RightBtm,
  },
  data() {
    return {
      config: {
        // rowNum:''.
        align: ["center", "center", "center", "center"],
        header: ["日期", "用户", "异常数据", "处理进度"], //表头数据
        headerBGC: "#0037ad75", //headerBGC
        oddRowBGC: "#0037ad36", //奇数行背景色
        evenRowBGC: "#0037ad1c", //偶数行背景色
        // waitTime: "", //轮播时间间隔(ms)
        // index: true, //	显示行号
        // headerHeight	表头高度
        // columnWidth	列宽度
        // indexHeader	行号表头
        // carousel	轮播方式
        // hoverPause	悬浮暂停轮播

        data: [
          //表数据
          ["2021-10-09", "张三", "余额不足", "正在处理"],
          ["2021-10-10", "潇然", "阀门异常", "正在处理"],
          ["2021-10-11", "明哲", "低电流", "正在处理"],
          [
            "2021-10-12",
            "立果",
            "表记通信异常",
            "<span style='color:red'>紧急处理</span>",
          ],
          ["2021-10-13", "哲瀚", "余额不足", "正在处理"],
          ["2021-10-14", "金鑫", "阀门异常", "正在处理"],
          ["2021-10-15", "笑愚", "低电流", "正在处理"],
          ["2021-10-16", "智宸", "表记通信异常", "正在处理"],
          ["2021-10-17", "炫明", "余额不足", "正在处理"],
          ["2021-10-18", "思源", "阀门异常", "正在处理"],
          ["2021-10-19", "雪松", "低电流", "正在处理"],
          ["2021-10-20", "鹏煊", "表记通信异常", "正在处理"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
// @import url("../../assets/style/_variables.scss");
$cardlabelHeight: 50px;

.component-root-wrapper {
  width: 100%;
  height: 100%;
}
</style>
