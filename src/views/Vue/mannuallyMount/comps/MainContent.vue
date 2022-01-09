<template>
  <div class="flex justify-center items-center">
    MainContent
  </div>
</template>
<script>
export default {
  created() {
    let count = 0;
    setInterval(
      () => this.$emit("isMounted", { msg: "依赖的假数据" + count++ }),
      2000,
    );
  },
};
</script>
<style scoped>
div {
  height: 100%;
  width: 800px;
  background-color: lightcoral;
  color: white;
  font-size: 24px;
}
</style>
