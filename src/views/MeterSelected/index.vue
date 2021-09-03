<template>
  <div class="map-meter-wrapper">
    <RegionSelectorTree class="con-tree" />
    <MeterOnMapViewer class="con-map" />
  </div>
</template>
<script>
import RegionSelectorTree from "./comps/RegionSelectorTree.vue";
import MeterOnMapViewer from "./comps/MeterOnMapViewer.vue";
export default {
  components: {
    RegionSelectorTree,
    MeterOnMapViewer,
  },
};
</script>
<style lang="css">
.map-meter-wrapper,
.con-tree,
.con-map {
  display: inline-block;
  box-sizing: border-box;
}

.map-meter-wrapper {
  width: 100%;
  height: 100vh;
  border: 1px solid red;
}
.con-tree {
  border: 1px solid seagreen;
  height: inherit;
  width: 400px;
}
.con-map {
  border: 1px solid slateblue;
  height: inherit;
  width: calc(100% - 400px);
}
</style>
