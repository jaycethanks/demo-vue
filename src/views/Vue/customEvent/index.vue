<template>
  <Child @customEvent="customEventHandler" />
</template>
<script>
import Child from "./comps/child.vue";
export default {
  components: {
    Child,
  },
  methods: {
    customEventHandler() {
      console.log("custom event handler trigger!!", "--line12");
    },
  },
};
</script>
