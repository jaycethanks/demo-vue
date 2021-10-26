<template>
  <div class="box">
    <BoxRecursion v-if="count <= 50" />
  </div>
</template>
<script>
export default {
  name: "BoxRecursion",
  data() {
    return {
      count: 0,
    };
  },
  created() {
    let a, b;
    a = localStorage.getItem("key"); //获取key值
    b = a * 1; //转换为Number 类型
    b++; //加一操作
    localStorage.setItem("key", b); //重新set key值
    this.count = b;
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px solid red;
}
</style>
