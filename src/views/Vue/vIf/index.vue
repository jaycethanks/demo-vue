<template>
  <div>
    <Child v-if="ifshow" />
  </div>
</template>
<script>
import Child from "./comps/index.vue";

export default {
  data() {
    return {
      ifshow: false,
    };
  },
  components: {
    Child,
  },
  created() {
    console.log("father created!", "--line13");
  },
  mounted() {
    console.log("father mounted", "--line16");
  },
};
</script>
<style></style>
