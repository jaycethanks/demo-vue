<template> </template>
<script>
export default {
  inject: ["indexFunc"],
  data() {
    return {
      name: "level3",
    };
  },
  created() {
    console.log(this.$parent.name, "--line3"); //level2
    this.indexFunc(); //hello this is a fucntion from index
  },
};
</script>
<style></style>
