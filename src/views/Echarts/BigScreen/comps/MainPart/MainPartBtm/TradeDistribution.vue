<template>
  <div class="component-root-wrapper">
    <section class="left-one-openaccount-section">
      <Bar3dTradeDist style="width: 100%; height: 100%" />
    </section>
  </div>
</template>
<script>
import Bar3dTradeDist from "../../Charts/Bar3dTradeDist.vue";
export default {
  components: {
    Bar3dTradeDist,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
// @import url("../../assets/style/_variables.scss");
$cardlabelHeight: 50px;

.component-root-wrapper {
  width: 100%;
  height: 100%;
  section {
    height: 100%;
    width: 100%;
    .card-label {
      margin: 0;
      margin-left: 20px;
      line-height: $cardlabelHeight;
      font-size: 28px;
      color: aqua;
    }
    .value-chart {
      height: calc(100% - #{$cardlabelHeight});
      width: 100%;
      display: flex;
      .value-chart-val {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;
        font-size: 24px;
        color: aqua;
        // background-color: green;
      }
      .value-chart-cht {
        margin: 10px;
        height: 100%;
        width: 70%;
        // background-color: #004223d8;//chart background-color
      }
    }
  }
}
</style>
