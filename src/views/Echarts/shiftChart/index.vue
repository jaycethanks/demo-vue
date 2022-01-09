<template>
  <div
    style="height:70vh;width:100vw;background-color:#efefef;"
    class="flex flex-column justify-center align-center"
  >
    <h1>DEMO</h1>
    <a-button @click="handleClick">显示一个</a-button
    ><a-button @click="handleClick2">显示两个</a-button>
    <div class="root-wrapper flex">
      <MixedLineStatistic style="height:300px;flex:1" :param="mock[0]" />
      <!-- prettier-ignore -->
      <LineDepCustomerDailyData v-show="mock.length === 2" style="height:300px;flex:1" :param="mock[1]"/>
    </div>
  </div>
</template>
<script>
import LineDepCustomerDailyData from "./comps/LineDepCustomerDailyData.vue";
import MixedLineStatistic from "./comps/MixedLineStatistic.vue";
import mock from "./mock/mock.js";
import mock2 from "./mock/mock2.js";
export default {
  components: {
    LineDepCustomerDailyData,
    MixedLineStatistic,
  },
  data() {
    return {
      mock: mock,
    };
  },
  methods: {
    handleClick() {
      this.mock = mock2;
    },
    handleClick2() {
      this.mock = mock;
    },
  },
  mounted() {
    console.log(mock, "--line17");
  },
};
</script>
<style scoped>
.root-wrapper {
  height: 600px;
  width: 80vw;
  border: 1px solid red;
}
</style>
