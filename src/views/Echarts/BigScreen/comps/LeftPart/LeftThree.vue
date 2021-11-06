<template>
  <div class="component-root-wrapper">
    <section class="left-one-openaccount-section">
      <p class="card-label">月总售水量</p>
      <div class="value-chart">
        <div class="value-chart-val">153124吨</div>
        <div class="value-chart-cht">
          <LiquidChartSell style="width:100%;height:100%" />
        </div>
      </div>
    </section>
    <section class="left-one-closeaccount-section">
      <p class="card-label">月总使用量</p>
      <div class="value-chart">
        <div class="value-chart-val">5456463吨</div>
        <div class="value-chart-cht">
          <LiquidChartUse style="width:100%;height:100%" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import LiquidChartSell from "../Charts/LiquidChartSell.vue";
import LiquidChartUse from "../Charts/LiquidChartSell.vue";
export default {
  components: {
    LiquidChartSell,
    LiquidChartUse,
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
    height: 50%;
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
