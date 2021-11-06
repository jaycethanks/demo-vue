<template>
  <div class="component-root-wrapper">
    <!-- <Global style="height:100%;width:100%" @change="onWorldMapChange" /> -->
    <!-- <TransitionWrapper ref="TransitionWrapper" /> -->
  </div>
</template>
<script>
import Global from "./Global.vue";
import TransitionWrapper from "./TransitionWrapper/index.vue";

export default {
  components: {
    Global,
    TransitionWrapper,
  },
  methods: {
    onWorldMapChange(val) {
      // return;
      this.$refs.TransitionWrapper.toggleEvent(val);
    },
  },
};
</script>
<style scoped>
.component-root-wrapper {
  width: 100%;
  height: 100%;
}
</style>
