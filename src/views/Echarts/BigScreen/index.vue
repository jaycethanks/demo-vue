<template>
  <div id="data-view">
    <div class="back-ground-img"></div>
    <dv-full-screen-container>
      <top-header class="top-header" />
      <div class="main-content">
        <div class="left-side-wrapper">
          <div class="left-side-card">
            <LeftOne />
          </div>
          <div class="left-side-card">
            <LeftTwo />
          </div>
          <div class="left-side-card">
            <LeftThree />
          </div>
        </div>
        <div class="center-wrapper">
          <section class="center-top-card">
            <dv-border-box-12 style="padding:10px">
              <!-- <Global style="height:100%;width:100%" /> -->
            </dv-border-box-12>
          </section>
          <section class="center-btm-card">
            <MainPartBtm />
          </section>
        </div>
        <div class="right-side-wrapper">
          <div class="right-side-card">
            <RightOne />
          </div>
          <div class="right-side-card">
            <RightTwo />
          </div>
          <div class="right-side-card">
            <RightThree />
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
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="css" scoped>
/* temp */
#nav {
  display: none !important;
}
.resizable-component.drag-area {
  display: none;
}
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
