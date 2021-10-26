<template>
  <div style="width:100%;height:100%">
    <BoxRecursion :arr="arr" />
  </div>
</template>
<script>
import BoxRecursion from "./comps/BoxRecursion.vue";
export default {
  components: {
    BoxRecursion,
  },
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
};
</script>
<style></style>
