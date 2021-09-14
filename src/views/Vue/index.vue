<template>
  <div class="bd">
    <common-menu />
    <div class="view-router-area">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hello: "this is hello"
    }
  }
};
</script>
