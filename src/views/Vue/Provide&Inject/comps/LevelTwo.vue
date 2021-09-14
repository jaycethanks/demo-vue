<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ["indexFunc"],
  data() {
    return {
      name: "level2",
    };
  },
  created() {
    console.log(this.$parent.name, "--line2"); //index
    this.indexFunc(); //hello this is a fucntion from index
  },
};
</script>
<style></style>
