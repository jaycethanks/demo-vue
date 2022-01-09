<template>
  <div class="wrapper">
    <main-content @isMounted="isMountedHandler" />
    <SideArea ref="sideArea" />
  </div>
</template>
<script>
import MainContent from "./comps/MainContent.vue";
import SideArea from "./comps/SideArea.vue";
export default {
  components: {
    MainContent,
    SideArea,
  },
  data() {
    return {
      mock: null,
    };
  },
  methods: {
    isMountedHandler({ msg }) {
      this.$refs.sideArea.doSomething(msg);
    },
  },
};
</script>
<style scoped>
.wrapper {
  height: 500px;
  width: 1000px;
  border: 1px solid red;
  display: flex;
  justify-content: flex-start;
}
</style>
