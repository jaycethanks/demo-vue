<template>
  <div id="data-view">
    <div class="back-ground-img"></div>
    <dv-full-screen-container>
      <top-header class="top-header" />
      <div class="main-content">
        <div class="left-side-wrapper">
          <div class="left-side-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <!-- <LeftOne /> -->
            </dv-border-box-7>
          </div>
          <div class="left-side-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <!-- <LeftTwo /> -->
            </dv-border-box-7>
          </div>
          <div class="left-side-card">
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
              style="display:flex;justify-content:center;align-items:center"
            >
              <!-- <CssCarousel /> -->
              <Global style="height:100%;width:100%" />
              <!-- <pia-chart class="pia-chart" /> -->
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
        <div class="right-side-wrapper">
          <div class="right-side-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <!-- <RightOne /> -->
            </dv-border-box-7>
          </div>
          <div class="right-side-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <!-- <RightTwo /> -->
            </dv-border-box-7>
          </div>
          <div class="right-side-card">
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
import Global from "./comps/Global";
import LeftOne from "./comps/LeftPart/LeftOne.vue";
import LeftTwo from "./comps/LeftPart/LeftTwo.vue";
import LeftThree from "./comps/LeftPart/LeftThree.vue";
import RightOne from "./comps/RightPart/RightOne.vue";
import RightTwo from "./comps/RightPart/RightTwo.vue";
import RightThree from "./comps/RightPart/RightThree.vue";
import MainPartBtm from "./comps/MainPart/MainPartBtm.vue";
import PiaChart from "./comps/Charts/PieChart.vue";
import CssCarousel from "./comps/CssCarousel";

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
  },

  created() {
    console.log("father created!!", "--line156");
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
  methods: {},
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
<style lang="css" scoped>
/* temp */
</style>
<style lang="scss" scoped>
@import "./assets/style/mainpage.scss";

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
