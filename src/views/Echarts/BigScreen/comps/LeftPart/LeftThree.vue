<template>
  <div class="component-root-wrapper">
    <div
      style="
        width: 100%;
        height: 5%;
        text-align: center;
        font-size: 20px;
        color: #fff;
      "
    >
      售出表计类型统计
    </div>
    <PieSaleSort
      @change="$refs.BarSaleSort.drawChart()"
      style="height: 35%; width: 100%"
    />
    <BarSaleSort ref="BarSaleSort" style="height: 65%; width: 100%" />
  </div>
</template>
<script>
import PieSaleSort from "../Charts/PieSaleSort.vue";
import BarSaleSort from "../Charts/BarSaleSort.vue";
import LiquidChartSell from "../Charts/LiquidChartSell.vue";
import LiquidChartUse from "../Charts/LiquidChartSell.vue";
export default {
  components: {
    LiquidChartSell,
    LiquidChartUse,
    BarSaleSort,
    PieSaleSort,
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
}
</style>
