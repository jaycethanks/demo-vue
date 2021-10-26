<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">Laison tech. Analyse Platform</div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style lang="scss">
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }
  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 60px;
  }
  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    //
    filter: brightness(110%);
    text-shadow: 0 0 5px #3f51b5, 0 0 10px #3f51b5, 0 0 15px #2196f3,
      0 0 20px #03a9f4, 0 0 35px #03a9f4, 0 0 40px #03a9f4, 0 0 50px #03a9f4,
      0 0 75px #03a9f4;
  }
}
</style>
