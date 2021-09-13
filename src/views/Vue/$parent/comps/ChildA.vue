<template>
  <div>
    ChildA
    <ComSubChild />
  </div>
</template>
<script>
import ComSubChild from "./ComSubChild.vue";

export default {
  components: {
    ComSubChild,
  },
  data() {
    return {
      name: "ChildA",
    };
  },
};
</script>
