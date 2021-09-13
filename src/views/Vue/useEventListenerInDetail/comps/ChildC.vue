<template>
  <div>
    <button @click="$emit('cusE01', 'E01')">cusE01</button>
    <button @click="$emit('cusE02', 'E02', 'hello')">cusE02</button>
    <button @click="$emit('cusE03', 'E03', 'hello', 'world')">cusE03</button>
    <button @click="$off(['cusE01', 'cusE02'])">Off Multi</button
    ><!--指定销毁/移除多个-->
    <button @click="$off()">Off All</button
    ><!--全部销毁/移除-->
  </div>
</template>
<script>
export default {
  created() {
    this.$on(["cusE01", "cusE02", "cusE03"], (...params) => {
      console.log(params, "--line12");
      // ['E01'] '--line12'
      // ['E02', 'hello'] '--line12'
      // ['E03', 'hello', 'world'] '--line12'
    });
  },
};
</script>
<style></style>
