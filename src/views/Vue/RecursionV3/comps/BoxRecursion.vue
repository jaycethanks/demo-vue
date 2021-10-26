<template>
  <div class="box">
    <details open v-for="(item, index) in dirlist" :key="index">
      <summary :style="{ color: item.child ? '#1890ff' : '#dbdbdb' }">{{
        item.path
      }}</summary>
      <template v-if="item.child && item.child.length">
        <BoxRecursion :dirlist="item.child" />
      </template>
    </details>
  </div>
</template>
<script>
export default {
  name: "BoxRecursion",
  props: ["dirlist"],
};
</script>
<style scoped>
.box {
  /* width: 100%;
  height: 100%; */
}
</style>
