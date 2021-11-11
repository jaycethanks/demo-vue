<template>
  <div class="component-root-wrapper flex">
    <TradeDistribution style="width: 30%; height: 100%" />
    <div class="flex flex-col items-center" style="width: 100%; height: 100%">
      <TradeDistTreeMap style="width: 100%; height: 20%" />
      <TradeDistTreeNode style="width: 100%; height: 80%" />
    </div>
  </div>
</template>
<script>
import TradeDistribution from "./TradeDistribution.vue";
import TradeDistTreeMap from "./TradeDistTreeMap.vue";
import TradeDistTreeNode from "./TradeDistTreeNode.vue";

export default {
  components: {
    TradeDistribution,
    TradeDistTreeMap,
    TradeDistTreeNode,
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
