<template>
  <div>
    child component
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "child component",
    };
  },
  created() {
    console.log(this.$parent, "--line9");
  },
};
</script>
