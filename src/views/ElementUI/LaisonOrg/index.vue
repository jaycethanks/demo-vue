<template>
  <div>
    <el-button @click="visible = true">OPEN</el-button>
    <OrganizationModal v-model="visible" />
  </div>
</template>
<script>
import OrganizationModal from "./comps/OrganizationModal.vue";
export default {
  components: {
    OrganizationModal,
  },
  data() {
    return {
      visible: true,
    };
  },
};
</script>
<style></style>
