<template>
  <div>
    <ChildA ref="childa" />
  </div>
</template>
<script>
import ChildA from "./comps/ChildA.vue";
export default {
  components: {
    ChildA,
  },
  // created() {
  //   console.log(this.$refs.childa.name); //ChildA
  // },
  // mounted() {
  //   console.log(this.$refs.childa.name); //ChildA
  // },
};
</script>
