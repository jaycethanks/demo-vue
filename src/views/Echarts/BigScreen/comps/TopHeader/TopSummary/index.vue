<template>
  <div class="top-summary-root-wrapper">
    <div class="top-summary-sub-wrapper flex justify-start">
      <dv-border-box-7 :color="['#0e2d5b', '#3781c2']" class="dv-border-box-7">
        <div class="top-summary-item flex flex-col justify-around items-start">
          <div class="number-wrapper --fliper-box">
            {{ count1 }}
          </div>
          <div class="description-field">全球运营表计实时数量</div>
        </div>
      </dv-border-box-7>
      <dv-border-box-7 :color="['#0e2d5b', '#3781c2']" class="dv-border-box-7">
        <div class="top-summary-item flex flex-col justify-around items-start">
          <div class="number-wrapper">{{ count2 }}</div>
          <div class="description-field">远传表急实时在线数量</div>
        </div>
      </dv-border-box-7>
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
$gutter: 14px;
.--fliper-box {
}
.top-summary-root-wrapper {
  height: 100%;
  width: 100%;
  .top-summary-sub-wrapper {
    white-space: nowrap;
    height: 100%;
    width: 100%;
    .dv-border-box-7 {
      width: 50%;
      .top-summary-item {
        padding: 5px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        // border: 1px solid yellow;
        // width: calc((100% - #{$gutter}) / 2);
      }
    }
    .dv-border-box-7:nth-child(1) {
      margin-right: $gutter;
    }
    .number-wrapper {
      font-family: wgsFont;
      font-size: 30px;
      line-height: 30px;
      // color: transparent;
      color: #000;
      letter-spacing: 10px;
      -webkit-text-stroke: 4px;
      -webkit-background-clip: text;
      -webkit-text-stroke-color: transparent;
      background-image: linear-gradient(
        to right,
        #2eeaff,
        #1499ff,
        #2eeaff,
        #1499ff
      );
      filter: brightness(120%);
      padding: 0 5px;
    }
    .description-field {
      margin-top: 8px;
      font-size: 18px;
      line-height: 18px;
      color: transparent;
      // text-shadow: #ff8f8f5c 0 0 5px;
      -webkit-text-stroke: 1px;
      -webkit-background-clip: text;
      -webkit-text-stroke-color: transparent;

      background-image: linear-gradient(
        to right,
        #ffffff,
        #ffffff,
        #ffffff,
        #ffffff
      );
    }
  }
}
</style>
