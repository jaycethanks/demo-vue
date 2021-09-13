<template>
  <vue-resizable :dragSelector="dragSelector" :active="handlers" class="drag-area">
    <div class="block">
      <div class="drag-container-1">此处拖拽</div>
      <details>
        <summary @click="initMenu" style="cursor:default">展开路由目录</summary>
        <div class="bd flex flex-column ">
          <router-link v-for="(item, index) in routes" :key="index" :to="item.path">{{ index }}. {{ item.name }}</router-link>
        </div>
      </details>
    </div>
  </vue-resizable>
</template>
<script>
import VueResizable from "vue-resizable";

import UTILS from "@/utils/common.js";

export default {
  components: { VueResizable },
  data() {
    return {
      handlers: [],
      dragSelector: ".drag-container-1, .drag-container-2",
      routes: [],
    };
  },
  created() {
    this.initMenu();
  },
  methods: {
    initMenu() {
      this.routes = UTILS.init(this.$router);
    },
  },
};
</script>
<style lang="css">
.drag-container-1,
.drag-container-2 {
  width: 200px;
  height: auto;
  background: rgb(54, 84, 255);
  color: white;
  text-align: center;
  cursor: pointer;
}
.block {
  position: absolute;
  top: 50px;
  right: 50px;
}

.drag-area {
  position: absolute;
  width: 100%;
  height: 1px !important;
  z-index: 999;
}
details {
  padding: 5px;
  background-color: #fff;
  border: 1px solid #efefef;
}
</style>
