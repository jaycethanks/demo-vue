<template>
  <div>
    <ChildA />
    <ChildB />
    <ChildC />
    <button @click="$off()">Clear</button>
    
  </div>
</template>
<script>
import ChildA from "./comps/ChildA.vue";
import ChildB from "./comps/ChildB.vue";
import ChildC from "./comps/ChildC.vue";
export default {
  components: {
    ChildA,
    ChildB,
    ChildC
  },
};
</script>
<style></style>
