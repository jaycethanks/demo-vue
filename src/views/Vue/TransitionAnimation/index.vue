<template>
  <div class="container-box">
    <div class="image-wrapper" v-for="(it, ind) in imgList" :key="ind">
      <transition>
        <div v-if="ind === currentIndex">
          <img :src="it" alt="" />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [],
      currentIndex: 0,
      timer: null,
    };
  },
  created() {
    let a = new Array(4);
    a[0] = require("./assets/food0.jpg");
    a[1] = require("./assets/food1.jpg");
    a[2] = require("./assets/food2.jpg");
    a[3] = require("./assets/food3.jpg");
    this.imgList = a;
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(() => {
      if (_this.currentIndex === _this.imgList.length - 1) {
        _this.currentIndex = 0;
      } else {
        _this.currentIndex++;
      }
      console.log(_this.currentIndex, "--line23");
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style scoped>
.container-box {
  border: 1px solid #efefef;
  width: 100%;
  height: 200px;
  display: flex;
}
.image-wrapper {
  width: 300px;
}
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s;
}
.v-enter {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0);
}
.v-leave {
  transform: translateX(0);
}
.v-leave-to {
  transform: translateX(-100%);
}
</style>
