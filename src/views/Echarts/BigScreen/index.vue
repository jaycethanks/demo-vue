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
              <LeftOne />
            </dv-border-box-7>
          </div>
          <div class="left-side-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <LeftTwo />
            </dv-border-box-7>
          </div>
          <div class="left-side-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <LeftThree />
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
              <swiper
                class="coverflow-swiper-slide"
                style="width:100%;height:90%;"
                ref="mySwiper"
                :options="swiperOption"
              >
                <!-- <swiper-slide>1</swiper-slide> -->
                <!-- <swiper-slide>2</swiper-slide> -->
                <swiper-slide><pia-chart id="asdnlasnf12wd" /> </swiper-slide>
                <swiper-slide><pia-chart id="47823rwerw2wd" /> </swiper-slide>
                <swiper-slide><pia-chart id="82349238be2wd" /> </swiper-slide>
              </swiper>
              <!-- <Global style="height:100%;width:100%" /> -->
            </dv-border-box-7>
          </section>
          <section class="center-btm-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <MainPartBtm />
            </dv-border-box-7>
          </section>
        </div>
        <div class="right-side-wrapper">
          <div class="right-side-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <RightOne />
            </dv-border-box-7>
          </div>
          <div class="right-side-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <RightTwo />
            </dv-border-box-7>
          </div>
          <div class="right-side-card">
            <dv-border-box-7
              :color="['#0e2d5b', '#3781c2']"
              class="dv-border-box-x"
            >
              <swiper
                style="height:100%"
                ref="mySwiper"
                :options="swiperOptionCube"
              >
                <swiper-slide>1</swiper-slide>
                <swiper-slide>2</swiper-slide>
                <swiper-slide>3</swiper-slide>
                <swiper-slide>4</swiper-slide>
                <!-- <swiper-slide><RightThree /> </swiper-slide> -->
                <!-- <swiper-slide
                  ><div style="width:300px;height:300px;background:yellow"></div
                ></swiper-slide>
                <swiper-slide
                  ><div style="width:300px;height:300px;background:green"></div
                ></swiper-slide>
                <swiper-slide
                  ><div style="width:300px;height:300px;background:red"></div
                ></swiper-slide>
                <swiper-slide
                  ><div style="width:300px;height:300px;background:blue"></div
                ></swiper-slide> -->
              </swiper>
              <!-- <RightThree /> -->
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

// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

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
    Swiper,
    SwiperSlide,
    PiaChart,
  },

  directives: {
    swiper: directive,
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
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100vw, 0, 0);
  }
}
</style>

<style lang="scss" scoped>
.swiper-slide {
  // swiper coverflow 辅助样式
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  background-color: #2c8dfb;
  background-position: center;
  background-size: cover;
}

.coverflow-swiper-slide .swiper-slide {
  // width: 300px;
  // height: 300px;
}
</style>
