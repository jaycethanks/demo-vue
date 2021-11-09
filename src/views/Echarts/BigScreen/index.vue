<template>
  <div id="data-view">
    <div class="back-ground-img"></div>
    <dv-full-screen-container>
      <top-header class="top-header" />
      <div class="main-content">
        <div class="left-side-wrapper side-wrapper">
          <div class="left-side-card left-one">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <LeftOne />
            </dv-border-box-7>
          </div>
          <div class="left-side-card left-two">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <LeftTwo />
            </dv-border-box-7>
          </div>
          <div class="left-side-card left-three">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <!-- <LeftThree /> -->
            </dv-border-box-7>
          </div>
        </div>
        <div class="center-wrapper">
          <section class="center-top-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
              style="display:flex;justify-content:center;align-items:center;position:relative"
            >
              <MainPartTop />
            </dv-border-box-7>
          </section>
          <section class="center-btm-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <!-- <MainPartBtm /> -->
            </dv-border-box-7>
          </section>
        </div>
        <div class="right-side-wrapper side-wrapper">
          <div class="right-side-card right-one">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <RightOne />
            </dv-border-box-7>
          </div>
          <div class="right-side-card right-two">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <RightTwo />
            </dv-border-box-7>
          </div>
          <div class="right-side-card right-three">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <!-- <RightThree /> -->
              <!-- <CssCarousel /> -->
            </dv-border-box-7>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from "./comps/topHeader";
import Global from "./comps/MainPart/MainPartTop/Global.vue";
import LeftOne from "./comps/LeftPart/LeftOne.vue";
import LeftTwo from "./comps/LeftPart/LeftTwo.vue";
import LeftThree from "./comps/LeftPart/LeftThree.vue";
import RightOne from "./comps/RightPart/RightOne.vue";
import RightTwo from "./comps/RightPart/RightTwo.vue";
import RightThree from "./comps/RightPart/RightThree.vue";
import MainPartTop from "./comps/MainPart/MainPartTop/index.vue";
import MainPartBtm from "./comps/MainPart/MainPartBtm.vue";
import PiaChart from "./comps/Charts/PieChart.vue";
import CssCarousel from "./comps/CssCarousel";
import "animate.css";
import "flag-icon-css/css/flag-icon.css";

export default {
  name: "DataView",
  components: {
    topHeader,
    Global,
    LeftOne,
    LeftTwo,
    LeftThree,
    RightOne,
    RightTwo,
    RightThree,
    MainPartBtm,
    PiaChart,
    CssCarousel,
    MainPartTop,
  },

  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        // cubeEffect: {
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // },
      },
      swiperOptionCube: {
        effect: "cube",
        grabCursor: true,
        loopedSlides: 4,
        loop: true,
        autoplay: {
          delay: 500,
          disableOnInteraction: false,
        },
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      },
    };
  },
};
</script>

<style>
#nav {
  display: none !important;
}
.resizable-component.drag-area {
  display: none !important;
}
</style>
<style>
html {
  font-size: 14px;
}
@font-face {
  /* lcd 字体 */
  font-family: "wgsFont";
  src: url("./assets/fonts/open_24_display_st-webfont.eot"); /* IE9 Compat Modes */
  src: url("./assets/fonts/open_24_display_st-webfont.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/open_24_display_st-webfont.woff")
      format("woff"),
    /* Modern Browsers */ url("./assets/fonts/open_24_display_st-webfont.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("./assets/fonts/open_24_display_st-webfont.svg") format("svg"); /* Legacy iOS */
}
</style>
<style lang="scss" scoped>
@import "./assets/style/mainpage.scss";
@import "./assets/style/tailwind_flex_snippet.css";

#data-view {
  overflow: hidden;
}
.back-ground-img {
  background: url("./assets/img/8k_stars_milky_way.jpg") repeat-x;
  height: 100vh;
  width: 200vw;
  animation: slide 60s linear infinite;
}
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100vw);
  }
}
</style>
<style scoped>
>>> .border-box-content {
  overflow: hidden;
}
</style>
