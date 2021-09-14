<template>
  <div>
    <ChildA />
    <ChildB />
  </div>
</template>
<script>
import ChildA from "./comps/ChildA.vue";
import ChildB from "./comps/ChildB.vue";
export default {
  components: {
    ChildA,
    ChildB,
  },
};
</script>
<style></style>
