<template>
  <div style="width:100%;height:100%">
    <BoxRecursion />
  </div>
</template>
<script>
import BoxRecursion from "./comps/BoxRecursion.vue";
export default {
  components: {
    BoxRecursion,
  },
  created() {
    localStorage.setItem("key", 0);
  },
};
</script>
<style></style>
