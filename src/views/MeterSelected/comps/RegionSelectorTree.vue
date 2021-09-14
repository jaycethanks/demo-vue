<template>
  <div class="region-selection-tree-wrapper">
    <div class="region-selection-tree">
      <a-tree
        v-model="tree.checkedKeys"
        checkable
        auto-expand-parent
        :selectable="false"
        :tree-data="tree.treeData"
        @check="onCheckArea"
        :replace-fields="tree.replaceFields"
      >
        <a-icon slot="switcherIcon" type="down" />
      </a-tree>
    </div>
    <div class="region-child-nodes-wrapper" style="overflow: scroll;">
      <a-table
        rowKey="meterId"
        :row-selection="{
          selectedRowKeys: table.selectedRowKeys,
          onChange: table.onChange,
          onSelect: table.onSelect,
          onSelectAll: table.onSelectAll,
        }"
        :columns="table.columns"
        :data-source="table.data"
        :pagination="false"
      >
        <template slot="title">
          <slot name="tableTitle"></slot>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import region from "../mock/region";
import mockRes from "../mock/mockRes";
export default {
  data() {
    return {
      table: {
        columns: [
          {
            title: "Name",
            dataIndex: "meterNumber",
            key: "meterNumber",
          },
        ],
        data: [],
        onChange: (selectedRowKeys, selectedRows) => {
          this.table.selectedRowKeys = selectedRowKeys;
        },
        onSelect: (record, selected, selectedRows) => {
          this.$emit("onSelect", record, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          this.$emit("onSelectAll", selected, selectedRows);
        },
        selectedRowKeys: [],
      },
      tree: {
        checkedKeys: [],
        treeData: region.Region.childRegions,
        replaceFields: {
          children: "childRegions",
          title: "regionName",
          key: "regionCode",
        },
      },
      // checkedKeys: ["0-0-0"],
      mockRes: mockRes,
    };
  },
  methods: {
    async onCheckArea(checkedKeys) {
      this.tree.checkedKeys = checkedKeys;
      // let res = await this.$axios({
      //   url: "http://154.72.43.168:23666/api/walkby/getUnTaskMeter.do",
      //   method: "post",
      //   data: checkedKeys,
      //   headers: {
      //     "Content-Type": "application/json;charset=UTF-8",
      //   },
      // });
      // console.log(res, "--line65");
      // console.log(this.mockRes.meterList, "--line88");
      this.table.data = []; //init
      this.table.data = this.mockRes.meterList;
      this.$emit("onCheckArea", this.table.data);
    },

    onNodeChange(checkedValues) {
      console.log("checked = ", checkedValues);
      console.log("value = ", this.value);
    },
  },
};
</script>
<style lang="css" scoped>
.region-child-nodes-wrapper,
.region-selection-tree {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  min-width: 100px;
  height: 100%;
}
.region-selection-tree {
  /* background-color: rgb(165, 112, 42); */
  min-width: 200px;
  width: 300px;
  overflow: scroll;
}
.region-child-nodes-wrapper {
  width: calc(100% - 300px);
  /* background-color: rgb(219, 219, 219); */
}
.ant-table td {
  white-space: nowrap;
}
</style>
