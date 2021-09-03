<template>
  <div class="region-selection-tree-wrapper">
    <div class="region-selection-tree">
      <a-tree
        v-model="checkedKeys"
        checkable
        :expanded-keys="expandedKeys"
        :auto-expand-parent="autoExpandParent"
        :selected-keys="selectedKeys"
        :tree-data="treeData"
        @expand="onExpand"
        @select="onSelect"
        :replace-fields="replaceFields"
      >
        <a-icon slot="switcherIcon" type="down" />
      </a-tree>
    </div>
    <div class="region-child-nodes-wrapper"></div>
  </div>
</template>
<script>
import region from "../mock/region";
export default {
  data() {
    return {
      expandedKeys: ["0-0-0", "0-0-1"],
      autoExpandParent: true,
      checkedKeys: ["0-0-0"],
      selectedKeys: [],
      treeData: region.Region.childRegions,
      replaceFields: {
        children: "childRegions",
        title: "regionName",
        key: "regionCode",
      },
    };
  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    },
  },
  created() {
    console.log(region, "--line67");
  },
  methods: {
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log("onCheck", checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    },
  },
};
</script>
<style lang="css" scoped>
.region-child-nodes-wrapper,
.region-selection-tree {
  display: inline-block;
  box-sizing: border-box;
}
.region-selection-tree {
  border: 2px solid rgb(165, 112, 42);
  min-width: 100px;
  overflow: scroll;
  height: 100%;
}
.region-child-nodes-wrapper {
  border: 2px solid rgb(0, 255, 110);
  min-width: 100px;
  height: 100%;
}
</style>
