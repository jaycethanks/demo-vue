<template>
  <div class="component-root-wrapper">
    <p style="font-family:wgsFont;font-size:48px;color:#0f0">12581189</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: "wgsFont";
  src: url("../../assets/fonts/open_24_display_st-webfont.eot"); /* IE9 Compat Modes */
  src: url("../../assets/fonts/open_24_display_st-webfont.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../assets/fonts/open_24_display_st-webfont.woff")
      format("woff"),
    /* Modern Browsers */
      url("../../assets/fonts/open_24_display_st-webfont.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../../assets/fonts/open_24_display_st-webfont.svg") format("svg"); /* Legacy iOS */
}
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
