<template>
  <div>
    <Child />
  </div>
</template>
<script>
import Child from "./comps/index.vue";
export default {
  components: {
    Child,
  },
  data() {
    return {
      name: "father component",
    };
  },
  created() {
    // console.log(this.$children, "--line18");
  },
};
</script>
