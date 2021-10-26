<template>
  <ul>
    <li v-for="(item, index) in children" :key="index">
      <tree-folder v-if="item.child" :folderList="[item]" />
      <span v-else>{{ item.path }}</span>
    </li>
  </ul>
</template>
<script>
// import TreeFolder from "../index.vue";
export default {
  props: ["children"],
  name: "tree-folder-contents",
  components: {
    // TreeFolder,
    TreeFolder: () => import("../index.vue"),
  },
};
</script>
