<template>
  <div class="a-card">
    <div class="title">root wrapper</div>
    <div class="link-wrapper"><a class="link" @click="openModal">open modal</a></div>
    <j-modal ref="jModal" />
  </div>

</template>

<script>
import JModal from './comps/modal.vue'
export default {
  components: {
    JModal,
  },
  methods: {
    openModal() {
      this.$refs.jModal.show('123')
    }
  }
}
</script>

<style scoped>
/* @import url("../../Antd/antd.css"); */

.title {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  border-bottom: 2px solid #55555555;
  display: flex;
  justify-content: center;
  font-weight: 600;
}
.a-card {
  width: 600px;
  height: 200px;
  border: 1px solid #d3d3d3 !important;
  margin: 10px;
  border-radius: 10px;
  background-color: #0e8bff27;
}
.link-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
}
</style>