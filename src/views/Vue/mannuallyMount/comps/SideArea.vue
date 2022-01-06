<template>
  <div class="flex justify-center items-center">
    SideArea
  </div>
</template>
<script>
export default {
  methods: {
    doSomething(msg) {
      console.log("触发一次执行一次", msg, "--line10");
    },
  },
};
</script>
<style scoped>
div {
  height: 100%;
  width: 200px;
  background-color: lightseagreen;
  color: white;
  font-size: 24px;
}
</style>
