<template>
  <div id="top-header">
    <!-- <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" /> -->
    <!-- <div class="header-decoration"></div> -->
    <div class="center-title">
      <span data-text="莱宸系统运营展示" class="center-title-style"
        >莱宸系统运营展示</span
      >
    </div>
    <!-- <div class="header-decoration" style="transform: rotateY(180deg);"></div> -->
  </div>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style lang="scss">
.header-decoration {
  width: 640px;
  height: 60px;
  background: rgb(6, 17, 49);
  background: linear-gradient(
    90deg,
    rgba(6, 17, 49, 1) 0%,
    rgba(29, 65, 149, 1) 48%,
    rgba(56, 105, 178, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
}
#top-header {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 60px;
  }
  .center-title {
    // -webkit-clip-path: polygon(
    //   0 0,
    //   100% 0,
    //   90% 100%,
    //   88% 100%,
    //   88% 91%,
    //   12% 88%,
    //   12% 100%,
    //   10% 100%
    // );
    // clip-path: polygon(
    //   0 0,
    //   100% 0,
    //   90% 100%,
    //   88% 100%,
    //   88% 91%,
    //   12% 88%,
    //   12% 100%,
    //   10% 100%
    // );
    // width: 40%;
    width: 100%;
    height: 80%;
    // background: #000000;
    // background: -webkit-radial-gradient(
    //   circle farthest-side at center center,
    //   #000000 26%,
    //   #65a4d7 100%
    // );
    // background: -moz-radial-gradient(
    //   circle farthest-side at center center,
    //   #000000 26%,
    //   #65a4d7 100%
    // );
    // background: radial-gradient(
    //   circle farthest-side at center center,
    //   #000000 26%,
    //   #65a4d7 100%
    // );

    span.center-title-style {
      $color: #004cff;
      // filter: brightness(110%);
      transform: translateX(-50%);
      position: absolute;
      margin: 0;
      font-size: 6rem;
      color: rgb(0, 0, 0);
      // text-shadow: 0 0 5px $color, 0 0 10px $color, 0 0 20px $color,
      //   0 0 40px $color, 0 0 80px $color, 0 0 90px $color, 0 0 100px $color,
      //   0 0 150px $color;
      -webkit-text-stroke: 0.5rem;
      -webkit-text-stroke-color: transparent;

      background-image: linear-gradient(
        to right,
        #09f1b8,
        #00a2ff,
        #0033ff,
        #40a9ff
      );
      filter: brightness(110%);
      -webkit-background-clip: text;
      font-weight: 800;
      letter-spacing: 10px;
    }
  }
}
</style>
