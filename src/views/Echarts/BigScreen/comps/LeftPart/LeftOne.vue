<template>
  <div class="component-root-wrapper">
    <section class="left-one-openaccount-section">
      <p class="card-label">开户数</p>
      <div class="value-chart">
        <div class="value-chart-val">1531241355</div>
        <div class="value-chart-cht">
          <OpenAccount style="width:100%;height:100%" />
        </div>
      </div>
    </section>
    <section class="left-one-closeaccount-section">
      <p class="card-label">销户数</p>
      <div class="value-chart">
        <div class="value-chart-val">5456463</div>
        <div class="value-chart-cht">
          <CloseAccount style="width:100%;height:100%" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import OpenAccount from "../Charts/OpenAccount.vue";
import CloseAccount from "../Charts/OpenAccount.vue";
export default {
  components: {
    OpenAccount,
    CloseAccount,
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
