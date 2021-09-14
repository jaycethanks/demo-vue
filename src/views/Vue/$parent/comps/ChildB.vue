<template>
  <div>
    ChildB
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
      name: "ChildB",
    };
  },
};
</script>
