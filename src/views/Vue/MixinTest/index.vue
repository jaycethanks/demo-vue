<template>
  <div>{{ msg }}</div>
</template>
<script>
import mi from "./mixin/mixin";
export default {
  data() {
    return {
      jay: "jayce",
    };
  },
  mixins: [mi],
  mounted() {
    console.log(this.init(), "--line9");
  },
};
</script>
<style></style>
