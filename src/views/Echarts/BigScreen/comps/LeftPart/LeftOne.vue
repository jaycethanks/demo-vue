<template>
  <div class="component-root-wrapper flex justify-around items-center">
    <div class="simple-summary flex flex-col justify-center items-center">
      <div class="field-label">已入库表计数</div>
      <div class="field-value">{{ val1 }}</div>
    </div>
    <div class="simple-summary flex flex-col justify-center items-center">
      <div class="field-label">上月开户数</div>
      <div class="field-value">32530</div>
    </div>
    <div class="simple-summary flex flex-col justify-center items-center">
      <div class="field-label">上月销户数</div>
      <div class="field-value">12530</div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      val1: 45960,
    };
  },
  mounted() {
    let _this = this;
    !(function loop() {
      setTimeout(() => {
        _this.val1 = _this.val1 + Number((Math.random() * 100).toFixed(0));
        loop();
      }, 2000);
    })();
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/_variables.scss";
// @font-face {
//   font-family: "wgsFont";
//   src: url("../../assets/fonts/open_24_display_st-webfont.eot"); /* IE9 Compat Modes */
//   src: url("../../assets/fonts/open_24_display_st-webfont.eot?#iefix")
//       format("embedded-opentype"),
//     /* IE6-IE8 */ url("../../assets/fonts/open_24_display_st-webfont.woff")
//       format("woff"),
//     /* Modern Browsers */
//       url("../../assets/fonts/open_24_display_st-webfont.ttf")
//       format("truetype"),
//     /* Safari, Android, iOS */
//       url("../../assets/fonts/open_24_display_st-webfont.svg") format("svg"); /* Legacy iOS */
// }
// @import url("../../assets/style/_variables.scss");
$cardlabelHeight: 50px;

.component-root-wrapper {
  width: 100%;
  height: 100%;
  .simple-summary {
    // border: 1px solid red;
    box-sizing: border-box;
    .field-label {
      font-size: 0.01vw;
      font-weight: 600;
      color: rgb(0, 132, 255);
      text-shadow: rgb(0, 132, 255) 0 0 3px;
    }
    .field-value {
      font-size: 1.4vw;
      color: #fff;
    }
  }
}
</style>
