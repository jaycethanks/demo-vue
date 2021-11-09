<template>
  <div class="top-summary-root-wrapper">
    <div class="top-summary-sub-wrapper flex justify-around items-center">
      <div class="flex flex-col justify-around items-center" style="width:50%">
        <div class="number-wrapper --fliper-box">
          {{ count1 }}
        </div>
        <div class="description-field">全球运营表计数量</div>
      </div>
      <div class="flex flex-col justify-around items-center" style="width:50%">
        <div class="number-wrapper">{{ count2 }}</div>
        <div class="description-field">远传表急在线数量</div>
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
  background-color: #002ac483;
  .top-summary-sub-wrapper {
    height: auto;
    .number-wrapper {
      font-family: wgsFont;
      // color: #ffe27a;
      // color: transparent;
      letter-spacing: 1.5rem;
      height: 7rem;
      font-size: 7rem;
      line-height: 7rem;
      margin-top: 1.5rem;
      padding: 0 0.2rem;
      -webkit-text-stroke: 0.8rem;
      -webkit-text-stroke-color: transparent;
      background-image: linear-gradient(
        to right,
        #ffe27a,
        #ffc800,
        #ffd53b,
        #a58100
      );
      filter: brightness(110%);
      -webkit-background-clip: text;
    }
    .description-field {
      margin-top: 0.3rem;
      margin-bottom: 1.5rem;
      height: 3rem;
      font-size: 3rem;
      line-height: 3rem;
      margin-top: 1.5rem;
      // color: #ffd53b;
      color: transparent;
      background-image: linear-gradient(
        to right,
        #ffc800,
        #fffb00,
        #ffd53b,
        #fffb00
      );
      background-clip: text;
      text-shadow: #ffc800b2 0 0 5px;
      // line-height: 1.2rem;
    }
  }
}
</style>
