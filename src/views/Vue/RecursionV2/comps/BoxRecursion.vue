<template>
  <div class="box">
    <BoxRecursion :arr="propArr" v-if="propArr.length != 0" />
    {{ arr }}
  </div>
</template>
<script>
export default {
  name: "BoxRecursion",
  props: ["arr"],
  computed: {
    propArr: function() {
      return this.arr.slice(1, this.arr.length);
    },
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
