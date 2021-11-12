<template>
  <div class="top-summary-root-wrapper">
    <div class="top-summary-sub-wrapper flex justify-around items-center">
      <div class="flex flex-col justify-around items-center" style="width: 50%">
        <div class="number-wrapper --fliper-box">
          {{ count1 }}
        </div>
        <div class="description-field">全球运营表计实时数量</div>
      </div>
      <div class="flex flex-col justify-around items-center" style="width: 50%">
        <div class="number-wrapper">{{ count2 }}</div>
        <div class="description-field">远传表急实时在线数量</div>
      </div>
      <!-- <div></div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count1: "",
      count2: "",
    };
  },
  mounted() {
    setInterval(() => {
      let str = new Date().getTime().toString();
      this.count1 = str.slice(2, 12);
      this.count2 = str.slice(6, 14);
    }, 1000);
    // util function
  },
};
</script>
<style lang="scss" scoped>
.--fliper-box {
}
.top-summary-root-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  // border: 1px solid #0f0;
  // background-color: #ff8f8f1f;
  .top-summary-sub-wrapper {
    height: auto;
    .number-wrapper {
      font-family: wgsFont;
      font-size: 48px;
      line-height: 48px;
      // color: transparent;
      // color: #000;
      letter-spacing: 10px;
      -webkit-text-stroke: 4px;
      -webkit-background-clip: text;
      -webkit-text-stroke-color: transparent;
      background-image: linear-gradient(
        to right,
        #ff7a7a,
        #ff0000,
        #ff3d3d,
        #a30000
      );
      filter: brightness(120%);
      padding: 0 5px;
    }
    .description-field {
      margin-top: 20px;
      font-size: 24px;
      line-height: 24px;
      color: transparent;
      text-shadow: #ff8f8f5c 0 0 5px;
      -webkit-text-stroke: 1px;
      -webkit-background-clip: text;
      -webkit-text-stroke-color: transparent;

      background-image: linear-gradient(
        to right,
        #ff0000,
        #ff3d3d,
        #b80000,
        #ff8f8f
      );
    }
  }
}
</style>
